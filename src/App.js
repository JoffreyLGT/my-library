import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding:'10px'}}>
        <header>
          <h1>Joffrey's library</h1>
          <div>
            <input type="text" placeholder="Search" />
            <span style={{'margin-left':'10px'}}>12 items</span>
          </div>
        </header>
        <hr />
        <div className="itemList">
          <div className="item">Item 1</div>       
          <div className="item">Item 2</div>       
          <div className="item">Item 3</div>       
          <div className="item">Item 4</div>       
          <div className="item">Item 5</div>   
          <div className="item">Item 6</div>       
          <div className="item">Item 7</div>       
          <div className="item">Item 8</div>       
          <div className="item">Item 9</div>       
          <div className="item">Item 10</div>   
          <div className="item">Item 11</div>       
          <div className="item">Item 12</div>       
        </div>
      </div>
    );
  }
}

export default App;
