import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<colorman-parent app-id="123" bundle-id="456"></colorman-parent>');
    const element = await page.find('colorman-parent');
    expect(element).toHaveClass('hydrated');
  });
});
