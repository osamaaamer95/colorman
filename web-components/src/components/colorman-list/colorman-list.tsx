import { Component, Host, h, Prop } from '@stencil/core';
import { Item } from '../colorman-parent/colorman-parent';

@Component({
  tag: 'colorman-list',
  styleUrl: 'colorman-list.css',
  shadow: true,
})
export class ColormanList {
  @Prop() loading: boolean = true;
  @Prop() itemsList: Item[] = [];

  render() {
    return (
      <Host>
        {this.loading ? (
          <div>Loading</div>
        ) : (
          <div class="list">
            {this.itemsList.map(el => {
              return <colorman-listitem {...el}></colorman-listitem>;
            })}
          </div>
        )}
      </Host>
    );
  }
}
