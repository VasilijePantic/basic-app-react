import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



  // state - special PROPERTY - manged from inside of a component only
  // its a js obj - in it you can do WHATEVA
  // basically changes let/const inside of a class
class App extends Component {
  state = {
    persons: [
      {id: '1' ,name: 'Pero', age: 29},
      {id: '2' ,name: 'Manu', age: 69},
      {id: '3' ,name: 'Makoto Nagano', age: 213}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons})
  }
  

  deletePersonHandler = (personIndex) => {
    //.slice() - copies the full array into a new one => const persons bellow
    // const persons = this.state.persons.slice(); ----or use the spread operator
    const persons = [...this.state.persons];
    
    // splice removes 1 element from the array
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  // RENDER
  render() {
    
    // STYLING
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // if showPersons(boolean) is true - it will render Persons
    if (this.state.showPersons) {
      persons = (
        // .map() converts any element from an array (persons from state)
          // it returns a new array - can be even JSX
        <div>  
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }


    //styling dynamic
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }




    return (
        <div className="App">
          <h1>Hi, I'm react app</h1>
          <p className={classes.join(' ')}>Some text</p>

          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
  }
}

export default App;
