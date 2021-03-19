import { newSpecPage } from '@stencil/core/testing';
import { ColormanListitem } from '../colorman-listitem';

describe('colorman-listitem', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColormanListitem],
      html: `<colorman-listitem name="name" description="description"></colorman-listitem>`,
    });
    expect(page.root).toEqualHtml(`
      <colorman-listitem description="description" name="name">
      <mock:shadow-root>
          <div class="item">
            <div>name</div>
            <div>description</div>
          </div>
        </mock:shadow-root>
      </colorman-listitem>
    `);
  });
});
