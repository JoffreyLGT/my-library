import React, { Component } from "react";
import Item from "./components/Item";
import ItemModal from "./components/ItemModal";
import "./App.css";
import "bulma/css/bulma.css";

import fakeServerData from "./FakeServerData";

class App extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    // Simulation of the call to a remote server returning a value 1 second
    // after the componend did mount.
    let data = Object.assign({}, fakeServerData);
    setTimeout(() => {
      this.setState({
        data
      });
    }, 1000);
  }

  addItem(item) {
    let newData = Object.assign(this.state.data.items);
    newData.push(item);
    this.setState(newData);
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
                <ItemModal
                  id="addItemModal"
                  action="add"
                  onSave={this.addItem}
                />
                <div class="control" style={{ padding: "0 10px 0 10px" }}>
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    onChange={e => {
                      let stringToSearch = e.target.value;
                      let newState = Object.assign({}, this.state);
                      newState.data.items = fakeServerData.items.filter(
                        item => {
                          return item.name
                            .toLowerCase()
                            .includes(stringToSearch);
                        }
                      );
                      this.setState(newState);
                    }}
                  />
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
                      name={item.name}
                      platform={item.platform}
                      url={item.url}
                    />
                  ))
                : ""}
            </div>
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
