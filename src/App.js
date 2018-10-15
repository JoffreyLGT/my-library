import React, { Component } from 'react';
import Item from './components/Item';
import './App.css';

import fakeServerData from './FakeServerData';

class App extends Component {

  componentDidMount(){
    // Simulation of the call to a remote server returning a value 1 second
    // after the componend did mount.
    let data = Object.assign({}, fakeServerData);
    setTimeout(()=>{
      this.setState({
        data
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state && this.state.data ? (
          <div>
            <header className="header">
              <h1 className="title">{this.state.data.name}'s library</h1>
              <div>
                <input className="search" type="text" placeholder="Search" onChange={(e) => {
                  let stringToSearch = e.target.value;
                  let newState = Object.assign({}, this.state);
                  newState.data.items = fakeServerData.items.filter((item) => {
                    return item.name.toLowerCase().includes(stringToSearch)
                  })
                  this.setState(newState)} 
                  }
                />
                <span>{this.state.data.items.length} items</span>
              </div>
            </header>
            <hr />
            <div className="item-list">
              {this.state.data.items
                ? this.state.data.items.map((item, i) => 
                  <Item key={i} name={item.name} platform={item.platform} url={item.url} /> )
                : ''}      
            </div>
          </div>
        ) : (
          <div><h1 className="title">Loading in progress...</h1></div>
        )}
      </div>
    );
  }
}

export default App;