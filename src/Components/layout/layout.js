import React, { Component } from 'react';
import axios from 'axios'

import classes from './layout.module.css';
import CardHolder from '../cardsHolder/cardsHolder';
import Card from '../card/card';
import LoadMore from '../loadMore/loadMore'

class Layout extends Component{
    state ={
        userData:[]
    };
    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=5')
        .then(res=> this.setState({userData:res.data.results}))
        .catch(err=>console.log(err))
    }

    onClickHandler = ()=>{
        axios.get('https://randomuser.me/api/?results=5')
        .then(res=> {
            let updatedUsers = [...this.state.userData];
            updatedUsers.push(...res.data.results);
            this.setState({userData:updatedUsers})
        })
        .catch(err=>console.log(err));
        this.gotoBottom()
    }

    gotoBottom=()=>{
        var element = document.getElementById('cardHolder');
        element.scrollTop = element.scrollHeight - element.clientHeight;
     }
    
    render(){
        console.log(this.state.userData);
        return(
            <div className={classes.Layout}>
                <CardHolder>
                   {this.state.userData.map(user=>
                   <Card key={user.name.first}
                   picture={user.picture.large} 
                   name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                   gender={user.gender}
                   email={user.email}
                   phone={user.phone}
                   doj={user.registered.date.slice(0,10)}
                   id={user.id.value}
                   />)}   
                </CardHolder>
                <LoadMore onClick={this.onClickHandler} />
            </div>
        )
    }
}

export default Layout;