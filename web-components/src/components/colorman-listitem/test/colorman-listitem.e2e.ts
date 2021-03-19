import { newE2EPage } from '@stencil/core/testing';

describe('colorman-listitem', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<colorman-listitem name="name" description="description"></colorman-listitem>');

    const element = await page.find('colorman-listitem');
    expect(element).toHaveClass('hydrated');
  });
});
