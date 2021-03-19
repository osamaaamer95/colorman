import { Component, Prop, h, State, Listen } from '@stencil/core';

export interface Item {
  name: string;
  description: string;
}

@Component({
  tag: 'colorman-parent',
  styleUrl: 'colorman-parent.css',
  shadow: true,
})
export class ColormanParent {
  /**
   * App ID
   */
  @Prop() appId: string;

  /**
   * Bundle ID
   */
  @Prop() bundleId: string;

  @State() searchQuery: string = '';
  @State() loading: boolean = true;
  @State() items: Item[] = [];

  componentWillLoad() {
    this.getListOfItems().then(data => {
      this.items = data;
      this.loading = false;
    });
  }

  // simulate API request
  private getListOfItems(): Promise<Item[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            name: 'Some name',
            description: 'Some description',
          },
          {
            name: 'Some name 2',
            description: 'Some description 2',
          },
        ]);
      }, 1000);
    });
  }

  @Listen('colormanQueryChange')
  getChangedValue(val: CustomEvent<string>) {
    this.searchQuery = val.detail;
  }

  private getConfig(): string {
    return `App ID: ${this.appId}, Bundle ID: ${this.bundleId}`;
  }

  render() {
    return (
      <div>
        <span>Hello, World! Config: {this.getConfig()}</span>
        <p>Search query: {this.searchQuery}</p>
        <colorman-search searchQuery={this.searchQuery} />
        <colorman-list loading={this.loading} itemsList={this.items} />
      </div>
    );
  }
}
