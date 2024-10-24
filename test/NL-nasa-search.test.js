import { html, fixture, expect } from '@open-wc/testing';
import "../NL-nasa-search.js";

describe("NLNasaSearch test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <NL-nasa-search
        title="title"
      ></NL-nasa-search>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
