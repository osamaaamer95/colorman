import { newSpecPage } from '@stencil/core/testing';
import { ColormanSearch } from '../colorman-search';

describe('colorman-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColormanSearch],
      html: `<colorman-search></colorman-search>`,
    });
    expect(page.root).toEqualHtml(`
      <colorman-search>
        <mock:shadow-root>
          <input class="input" placeholder="Search" value="">
        </mock:shadow-root>
      </colorman-search>
    `);
  });
});
