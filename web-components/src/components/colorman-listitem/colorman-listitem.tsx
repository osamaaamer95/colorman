import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'colorman-listitem',
  styleUrl: 'colorman-listitem.css',
  shadow: true,
})
export class ColormanListitem {
  @Prop() name: string;
  @Prop() description: string;

  render() {
    return (
      <Host>
        <div class="item">
          <div>{this.name}</div>
          <div>{this.description}</div>
        </div>
      </Host>
    );
  }
}
