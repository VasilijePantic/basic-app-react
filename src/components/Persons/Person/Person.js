import React from 'react';
import './Person.css';


const person = (props) => {
    const rnd = Math.random();

    if(rnd > 0.99) {
        throw new Error('Something went wrong')
    }
    
    
    return (
        <div className="Person">
            {/* props.click - click is the name of the property in app.js - in render */}
            <p onClick={props.click}>Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p> 
            {/* .children refers to anything in between <p></p> for example */}

            <input placeholder="name" type="text" onChange={props.changed} value={props.name}/>
        </div> 
        )
};


export default person;