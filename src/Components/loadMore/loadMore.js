import React from 'react';

import classes from './loadMore.module.css';

const loadMore = (props)=>{
    return(
        <div className={classes.LoadMore}>
            <button onClick={props.onClick}>Load More</button>
        </div>
    )
}

export default loadMore