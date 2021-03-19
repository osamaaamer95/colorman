import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'colorman-search',
  styleUrl: 'colorman-search.css',
  shadow: true,
})
export class ColormanSearch {
  @Event({
    eventName: 'colormanQueryChange',
  })
  searchQueryChange: EventEmitter;

  @Prop() searchQuery: string = '';

  handleChange(event: Event) {
    this.searchQueryChange.emit((event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <Host>
        <input placeholder="Search" value={this.searchQuery} class="input" onInput={event => this.handleChange(event)} />
      </Host>
    );
  }
}
