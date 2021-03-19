import { newE2EPage } from '@stencil/core/testing';

describe('colorman-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<colorman-list></colorman-list>');

    const element = await page.find('colorman-list');
    expect(element).toHaveClass('hydrated');
  });
});
