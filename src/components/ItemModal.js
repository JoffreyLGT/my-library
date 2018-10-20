import React, { Component } from "react";
import Item from "./Item";

const emptyState = {
  name:'',
  platform:'PC',
  url:'',
  updated: false
};

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({},emptyState, props.modalItem);
    this.updateItem = this.updateItem.bind(this);
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (prevState.updated === "true") return null;
    let newState = Object.assign({}, emptyState, newProps.modalItem);
    return newState;
  }

  /** Update the state of the component to re-render the item preview. */
  updateItem(event) {
    let { name, value } = event.target;
    let prop = {};
    prop[name] = value;
    prop["updated"] = "true";
    this.setState(prop);
  }

  render() {
    const { id, title, onSave, visible, onHide } = this.props;

    /** Empties the fields, the states and calls onHide props. */
    const closeModal = () => {
      // Empty all the input fields to reset the modal
      let inputNodes = document
        .getElementById(id)
        .getElementsByTagName("input");
      for (let i = 0; i < inputNodes.length; i++) {
        inputNodes[i].value = "";
      }
      // Reset the state of the component
      this.setState(emptyState);
      // Remove the is-active class to hide the modal
      onHide();
    };

    /** Generates a new item from the state, sends it back and closes the modal. */
    const saveAndExit = () => {
      let item = Object.assign({}, this.state);
      if (item.name.length === 0) return;
      onSave(item);
      closeModal();
    };

    return (
      <div>
        <div
          id={id}
          className={"modal " + (visible === "true" ? "is-active" : "")}
        >
          <div onClick={closeModal} className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button
                onClick={closeModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column is-two-thirds">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Enter a name"
                        onChange={this.updateItem}
                        value={this.state.name}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Platform</label>
                    <div className="control">
                      <div className="select">
                        <select
                          name="platform"
                          value={this.state.platform}
                          onChange={this.updateItem}
                        >
                          <option value="PC">PC</option>
                          <option value="Switch">Switch</option>
                          <option value="Xbox One">Xbox One</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                      <input
                        className="input"
                        type="url"
                        value={this.state.url}
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
              <button className="button" onClick={closeModal}>
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
