import React from 'react';

import classes from './cardHolder.module.css';

const cardHolder =(props)=>{
    return(
        <div className={classes.CardHolder} id="cardHolder">
            {props.children}
        </div>
    )
}

export default cardHolder