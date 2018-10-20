import React, { Component } from "react";
import Item from "./Item";

const emptyState = {
  name: "",
  platform: "PC",
  url: ""
};

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = emptyState;

    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(event) {
    let { name, value } = event.target;
    let prop = {};
    prop[name] = value;
    this.setState(prop);
  }

  render() {
    const { id, action, onSave } = this.props;

    const title = action === "add" ? "Add a new item" : "Edit an item";

    const showModal = () => {
      document.getElementById(id).classList.add("is-active");
    };

    const hideModal = () => {
      // Remove the is-active class to hide the modal
      document.getElementById(id).classList.remove("is-active");

      // Empty all the input fields to reset the modal
      let inputNodes = document
        .getElementById(id)
        .getElementsByTagName("input");
      for (let i = 0; i < inputNodes.length; i++) {
        inputNodes[i].value = "";
      }
      // Reset the state of the component
      this.setState(emptyState);
    };

    const saveAndExit = () => {
      let item = Object.assign({}, this.state);
      if (item.name.length === 0) return;
      onSave(item);
      hideModal();
    };

    return (
      <div>
        <span class="button is-primary" onClick={showModal}>
          {title}
        </span>
        <div id={id} className="modal">
          <div onClick={hideModal} className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button
                onClick={hideModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column is-two-thirds">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        name="name"
                        class="input"
                        type="text"
                        placeholder="Enter a name"
                        onInput={this.updateItem}
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Platform</label>
                    <div class="control">
                      <div class="select">
                        <select name="platform" onChange={this.updateItem}>
                          <option>PC</option>
                          <option>Switch</option>
                          <option>Xbox One</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Image URL</label>
                    <div class="control">
                      <input
                        class="input"
                        type="url"
                        placeholder="Enter a URL"
                        name="url"
                        onChange={this.updateItem}
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <Item
                    name={this.state.name}
                    platform={this.state.platform}
                    url={this.state.url}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={saveAndExit}>
                Save
              </button>
              <button className="button" onClick={hideModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemModal;
