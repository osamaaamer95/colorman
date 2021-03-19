import { newE2EPage } from '@stencil/core/testing';

describe('colorman-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<colorman-search></colorman-search>');

    const element = await page.find('colorman-search');
    expect(element).toHaveClass('hydrated');
  });
});
