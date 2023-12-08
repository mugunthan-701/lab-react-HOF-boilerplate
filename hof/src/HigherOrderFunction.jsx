import React, { Component } from 'react';

export default class HigherOrderFunction extends Component {
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
    return this.state.userData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id} </span>
        <span>Name: {item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ));
  };

  renderTypes = () => {
    const filterType = this.state.userData.filter((item) => item.user_type === 'Designer');
    return filterType.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ));
  };

  renderName = () => {
    const Name = this.state.userData.filter((item) => item.name[0] === 'J');
    return Name.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ));
  };

  renderAge = () => {
    const age = this.state.userData.filter((item) => item.age > 28 && item.age <= 50);
    return age.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id:{item.id} </span>
        <span>Name:{item.name} </span>
        <span>User Type: {item.user_type} </span>
      </li>
    ));
  };

  renderExperience = () => {
    const experience = this.state.userData.filter((item) => item.user_type === 'Designer');
    const filterExperience = experience.reduce((acc, exp) => acc + exp.years, 0);
    return (
      filterExperience
    );
  };

  render() {
    return (
        <div className="App">
          <h1>User Data</h1>
          <ul>{this.renderItems()}</ul>
          <h2>Designer</h2>
          <ul>{this.renderTypes()}</ul>
          <h2>Person with letter J as his first letter</h2>
          <ul>{this.renderName()}</ul>
          <h2>Person above age 28 and less than or equal to 50</h2>
          <ul>{this.renderAge()}</ul>
          <h2>Expirience of the total designers</h2>
          <p>{this.renderExperience()}</p>
        </div>
    );
  }
}
