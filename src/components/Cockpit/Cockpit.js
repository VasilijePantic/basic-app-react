import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    //styling dynamic
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if(props.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>Some text</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
         </div> 
    );
}

export default cockpit;