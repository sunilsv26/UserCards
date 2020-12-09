import React from "react";

import classes from "./card.module.css";

const card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.cardRow1}>
        <div className={classes.Picture}>
          <img src={props.picture} alt="img" />
        </div>
        <div>
          <div>Name : {props.name}</div>
          <div style={{textTransform:'capitalize'}}>Gender : {props.gender}</div>
          <div>Phone : {props.phone}</div>
        </div>
      </div>
      <div className={classes.cardRow2}>
        <div>D.O.J :{props.doj}</div>
        <div>ID : {props.id}</div>
        <div>Email: <span>{props.email}</span></div>
      </div>
    </div>
  );
};

export default card;
