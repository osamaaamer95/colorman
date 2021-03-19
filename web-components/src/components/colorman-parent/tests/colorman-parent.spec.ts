import { newSpecPage } from '@stencil/core/testing';
import { ColormanParent } from '../colorman-parent';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ColormanParent],
      html: '<colorman-parent app-id="123" bundle-id="456"></colorman-parent>',
    });
    expect(root).toEqualHtml(`
      <colorman-parent app-id="123" bundle-id="456">
        <mock:shadow-root>
          <div>
            <span>
              Hello, World! Config: App ID: 123, Bundle ID: 456
            </span>
            <p>
              Search query:
            </p>
            <colorman-search searchquery=""></colorman-search>
            <colorman-list loading=""></colorman-list>
          </div>
        </mock:shadow-root>
      </colorman-parent>
    `);
  });
});
