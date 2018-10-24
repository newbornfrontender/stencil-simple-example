import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  shadow: true
})
export class MyFirstComponent {
  @Prop() msg: string = 'default world';

  render() { return (
    <div>
      <slot />
      <p>Hello {this.msg}!</p>
    </div>
  )}
}
