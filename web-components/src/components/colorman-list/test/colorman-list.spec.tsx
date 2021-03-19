import { newSpecPage } from '@stencil/core/testing';
import { ColormanList } from '../colorman-list';

describe('colorman-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColormanList],
      html: `<colorman-list></colorman-list>`,
    });
    expect(page.root).toEqualHtml(`
      <colorman-list>
        <mock:shadow-root>
          <div>
            Loading
          </div>
        </mock:shadow-root>
      </colorman-list>
    `);
  });
});
