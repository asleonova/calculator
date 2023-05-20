import { browser } from "@wdio/globals";
const DEFAULT_PAGE_URL = "src/index.html";

export default class Page {

  open(path: string = DEFAULT_PAGE_URL) {
    return browser.url(path);
  }
}
