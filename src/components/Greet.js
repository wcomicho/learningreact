import React from 'react'

const Greet = (props) => {
    //destrstructure
    const {name, heroName} = props;

    
    // Greet = (props)
    // <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    //or
    // Gree = {name, heroName}
    
    return(
        <React.Fragment>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </React.Fragment>
    )
}

export default Greet

