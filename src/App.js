import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
  'name': 'Joffrey',
  'items':[
    {
      'name':'Halo 5',
      'platform':'Xbox One'
    },
    {
      'name':'Doom',
      'platform':'PC'
    }
  ]
}


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
            <header>
              <h1>{this.state.data.name}'s library</h1>
              <div>
                <input type="text" placeholder="Search" onChange={(e) => {
                  let stringToSearch = e.target.value;
                  let newState = Object.assign({}, this.state);
                  newState.data.items = fakeServerData.items.filter((item) => {
                    return item.name.toLowerCase().includes(stringToSearch)
                  })
                  this.setState(newState)} 
                  }
                />
                <span style={{'margin-left':'10px'}}>{this.state.data.items.length} items</span>
              </div>
            </header>
            <hr />
            <div className="itemList">
              {this.state.data.items ? this.state.data.items.map((item, i) => 
                <div className="item" key={i}>{item.name}</div> 
              ):''}      
            </div>
          </div>
        ) : (
          <div><span>Loading in progress...</span></div>
        )}
      </div>
    );
  }
}

export default App;