import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      eric:"IS A DIP SHIT"
    }
  }
  render(){
    return(
      <div>
        <h1>FUCK YOU BRAD{eric}</h1>
      </div>
    )
  }
}