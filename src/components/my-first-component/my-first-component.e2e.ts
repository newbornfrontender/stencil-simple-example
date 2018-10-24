import { newE2EPage } from '@stencil/core/testing';

describe('my-first-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-first-component></my-first-component>');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-first-component></my-first-component>');
    const component = await page.find('my-first-component');
    const element = await page.find('my-first-component >>> div');

    component.setProperty('msg', 'new world');
    await page.waitForChanges();
    expect(element.textContent).toEqual('Hello new world!');
  });
});
