import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-button'
})
export class MyButton {
  @State() toggle: boolean = false

  handleClick = (e) => {
    e.preventDefault();
    this.toggle = !this.toggle;
  }

  render() { return (
    <button onClick={this.handleClick.bind(this)}>
    {this.toggle
      ? 'Hide'
      : 'Show'
    }
    </button>
  )}
}
