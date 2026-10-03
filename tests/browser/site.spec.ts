import { test, expect } from '@playwright/test';

test('home and the full learning path navigate under the project base', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('自己的理解');
  await expect(page.getByRole('navigation', { name: '主导航' }).getByRole('link', { name: '播客' })).toHaveCount(0);
  await page.screenshot({ path: 'test-results/home-desktop.png', fullPage: true });
  await page.getByRole('link', { name: '从学习路径开始' }).click();
  await expect(page).toHaveURL(/\/tracks\/ai-app-foundations\/$/);
  await expect(page.getByRole('list', { name: '学习章节' }).locator('li')).toHaveCount(4);
  await page.getByRole('link', { name: '分清 token 与上下文预算', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Token 与上下文');
  await expect(page.getByRole('heading', { name: '原始资料与核验依据' })).toBeVisible();
  await page.getByRole('link', { name: /下一步/ }).click();
  await expect(page).toHaveURL(/\/notes\/rag-evidence\/$/);
  expect(errors).toEqual([]);
});

test('resource filters, empty results and reset preserve a usable list', async ({ page }) => {
  await page.goto('resources/');
  await expect(page.locator('[data-content-card]:visible')).toHaveCount(5);
  await page.getByLabel('主题', { exact: true }).selectOption('rag');
  await page.getByLabel('资料类型').selectOption('paper');
  await expect(page.locator('[data-content-card]:visible')).toHaveCount(1);
  await page.getByLabel('标题或标签').fill('nothing-can-match-this');
  await expect(page.locator('[data-filter-empty]')).toBeVisible();
  await page.getByRole('button', { name: '清除筛选' }).click();
  await expect(page.locator('[data-content-card]:visible')).toHaveCount(5);
  await expect(page).not.toHaveURL(/\?/);
});

test('Chinese and English search, restored query, filters and zero results work', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('search/?q=检索增强');
  const input = page.locator('.pagefind-ui__search-input');
  await expect(input).toHaveValue('检索增强');
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: '让答案回到证据' }).first()).toBeVisible();
  await input.fill('RAG');
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: '让答案回到证据' }).first()).toBeVisible();
  await page.locator('.pagefind-ui__filter-name').filter({ hasText: '主题' }).click();
  await page.getByRole('checkbox', { name: /检索增强/ }).check();
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: '让答案回到证据' }).first()).toBeVisible();
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: 'AI 应用入门' })).toHaveCount(0);
  await page.getByRole('checkbox', { name: /检索增强/ }).uncheck();
  await input.fill('token');
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: 'Token 与上下文' }).first()).toBeVisible();
  await expect(page.locator('.pagefind-ui__filter-panel')).not.toHaveCount(0);
  await input.fill('zzzznoresultzzzz');
  await expect(page.locator('.pagefind-ui__message')).toContainText(/0|没有|未找到|No results/i);
  await page.locator('.pagefind-ui__search-clear').click();
  await expect(input).toHaveValue('');
  await expect(page).not.toHaveURL(/q=/);
  expect(errors).toEqual([]);
  await input.fill('检索增强');
  await expect(page.locator('.pagefind-ui__result-link').filter({ hasText: '让答案回到证据' }).first()).toBeVisible();
  await page.screenshot({ path: 'test-results/search-desktop.png', fullPage: true });
  await expect(page.locator('.pagefind-ui__message')).toContainText('条结果');
  await page.setViewportSize({ width: 375, height: 812 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/search-mobile.png' });
  const result = page.locator('.pagefind-ui__result-link').filter({ hasText: '让答案回到证据' }).first();
  await result.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/notes\/rag-evidence\/$/);
});

test('375px reading, mobile navigation, keyboard focus and code overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
  await page.getByRole('button', { name: '菜单', exact: true }).click();
  await expect(page.getByRole('button', { name: '收起菜单' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: '菜单', exact: true })).toBeFocused();
  await page.screenshot({ path: 'test-results/home-mobile.png', fullPage: true });
  await page.goto('notes/keyword-retrieval-lab/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator('.toc details')).not.toHaveAttribute('open');
  await page.getByText('本页目录', { exact: true }).click();
  await expect(page.locator('.toc details')).toHaveAttribute('open');
  const paragraphSize = await page.locator('.prose p').first().evaluate(node => parseFloat(getComputedStyle(node).fontSize));
  expect(paragraphSize).toBeGreaterThanOrEqual(17);
  await page.screenshot({ path: 'test-results/note-mobile.png', fullPage: true });
  await page.screenshot({ path: 'test-results/note-mobile-viewport.png' });
});

test('RSS, missing articles and empty podcast route are honest', async ({ page, request }) => {
  const rss = await request.get('rss.xml');
  expect(rss.ok()).toBe(true);
  const xml = await rss.text();
  expect((xml.match(/<item>/g) ?? []).length).toBe(4);
  expect(xml).not.toContain('first-episode-draft');
  expect(xml).toContain('/notes/token-context/');
  const draft = await request.get('episodes/first-episode-draft/');
  expect(draft.status()).toBe(404);
  await page.goto('episodes/');
  await expect(page.getByText('第一期节目尚未发布', { exact: false })).toBeVisible();
  await expect(page.locator('audio')).toHaveCount(0);
});
