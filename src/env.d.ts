/// <reference types="astro/client" />
declare module '@pagefind/default-ui' {
  export class PagefindUI {
    constructor(options: Record<string, unknown>);
    triggerSearch(term: string): void;
  }
}
