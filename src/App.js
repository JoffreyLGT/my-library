import React, { Component } from "react";
import Item from "./components/Item";
import ItemModal from "./components/ItemModal";
import "./App.css";
import "bulma/css/bulma.css";

import { fakeServerData, fakePlatformsData } from "./FakeServerData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: "false",
      modalAction: "add",
      modalItem: {}
    };
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  componentDidMount() {
    // Simulation of the call to a remote server returning a value 1 second
    // after the componend did mount.
    let data = Object.assign({}, fakeServerData);
    setTimeout(() => {
      this.setState({
        serverData: Object.assign({}, data),
        data: Object.assign({}, data)
      });
    }, 1000);
    let platforms = Object.assign([], fakePlatformsData);
    setTimeout(() => {
      this.setState({
        platforms
      });
    }, 3000);
  }

  /** Add an item in the serverData state and trigger filterItems(). */
  addItem(item) {
    let newItems = Object.assign([], this.state.serverData.items);
    // Get the last id in the serverData
    let lastId = newItems.reduce(
      (biggest, current) => (biggest < current.id ? current.id : biggest),
      0
    );
    let newItem = Object.assign({}, item, { id: lastId + 1 });
    newItems.push(newItem);

    let newState = Object.assign({}, this.state);
    newState.serverData.items = Object.assign([], newItems);
    this.setState(newState);
    this.filterItems();
  }

  /** Update an item in the serverData state and trigger filterItems(). */
  updateItem(item) {
    // Copie the serverData in a new array.
    let newItems = Object.assign([], this.state.serverData.items);
    // Get the item position in the list and update the item.
    let itemPosition = newItems.findIndex(
      currentItem => currentItem.id === item.id
    );

    newItems[itemPosition] = item;
    // Assign the new items in the serverData and set the new state.
    let newState = Object.assign({}, this.state);
    newState.serverData.items = Object.assign([], newItems);
    this.setState(newState);
    // Trigger the filter.
    this.filterItems();
  }

  /** Filter the list of elements displayed on the page. */
  filterItems() {
    // Get the values from the fields
    let stringToSearch = document.getElementById("searchItem").value;
    let selectedPlatform = document.getElementById("platformFilter").value;

    // Declare a new object and filter it
    let filteredState = Object.assign({}, this.state);
    let serverItems = Object.assign([], filteredState.serverData.items);
    filteredState.data.items = serverItems.filter(
      item =>
        item.name.toLowerCase().includes(stringToSearch) &&
        (selectedPlatform.toLowerCase() === "all platforms" ||
          item.platform.toLowerCase() === selectedPlatform.toLowerCase())
    );

    // Set this object as a new state
    this.setState(filteredState);
  }

  render() {
    return (
      <div>
        {this.state && this.state.data ? (
          <div>
            <header className="header">
              <h1 className="header__title">
                {this.state.data.name}
                's library
              </h1>
              <div className="header__bar">
                <span
                  className="button is-primary"
                  onClick={() =>
                    this.setState({
                      showModal: "true",
                      modalAction: "add",
                      modalItem: {}
                    })
                  }
                >
                  Add a new item
                </span>
                <div className="control" style={{ padding: "0 10px 0 10px" }}>
                  <input
                    id="searchItem"
                    className="input"
                    type="text"
                    placeholder="Search"
                    onChange={this.filterItems}
                  />
                </div>
                <div style={{ padding: "0 10px 0 0px" }}>
                  <div className="control">
                    <div className="select">
                      <select id="platformFilter" onChange={this.filterItems}>
                        <option>All Platforms</option>
                        {this.state.platforms
                          ? this.state.platforms.map((platform, i) => (
                              <option key={i}>{platform}</option>
                            ))
                          : ""}
                      </select>
                    </div>
                  </div>
                </div>
                <span>{this.state.data.items.length} items</span>
              </div>
            </header>
            <hr />
            <div className="item-list">
              {this.state.data.items
                ? this.state.data.items.map((item, i) => (
                    <Item
                      key={i}
                      id={item.id}
                      name={item.name}
                      platform={item.platform}
                      url={item.url}
                      onClick={() =>
                        this.setState({
                          modalItem: Object.assign({}, item, { key: i }),
                          showModal: "true",
                          modalAction: "edit"
                        })
                      }
                    />
                  ))
                : ""}
            </div>
            <ItemModal
              id="addItemModal"
              action={this.state.modalAction}
              visible={this.state.showModal}
              platforms={this.state.platforms}
              title={
                this.state.modalAction === "add"
                  ? "Add a new item"
                  : "Edit an item"
              }
              modalItem={this.state.modalItem}
              onHide={() =>
                this.setState({
                  modalItem: {},
                  showModal: "false"
                })
              }
              onSave={
                this.state.modalAction === "add"
                  ? this.addItem
                  : this.updateItem
              }
            />
          </div>
        ) : (
          <div className="header">
            <h1 className="header__title">Loading in progress...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
