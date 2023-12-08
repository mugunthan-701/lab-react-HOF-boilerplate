import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    return this.state.userData.map((item) => [
      <li key={item.id} className="list-elements">
        <span>Id: {item.id} </span>
        <span>Name: {item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>,
    ]);
  };
  renderTypes =()=>{
    const filterType= this.state.userData.filter(item=>item.user_type === 'Designer')
    return filterType.map((item)=>[
      <li key={item.id} className='list-elements'>
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ])
  }
  renderName =()=>{
    const Name= this.state.userData.filter(item=>item.name[0] === 'J')
    return Name.map((item)=>[
      <li key={item.id} className='list-elements'>
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ])
  }
  renderAge =()=>{
    const age= this.state.userData.filter(item=>item.age>28 && item.age<=50)
    return age.map((item)=>[
      <li key={item.id} className='list-elements'>
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ])
  }

  renderExpirience =()=>{
    const expirience= this.state.userData.filter(item=>item.user_type === 'Designer')
   const filterExpirience=expirience.reduce((acc,expirience)=>acc+expirience.years,0)
   return (
    <div>
      <h2>Total Experience of Designers:</h2>
      <p>{filterExpirience} years</p>
    </div>
  );
  }
  render() {
    return (
      <div className='App'>
        <h1>User Data</h1>
        <ul>{this.renderItems()}</ul>
        <ul>{this.renderTypes()}</ul>
        <ul>{this.renderName()}</ul>
        <ul>{this.renderAge()}</ul>
        <p>{this.renderExpirience()}</p>
      </div>
    );
  }
}

export default App;
