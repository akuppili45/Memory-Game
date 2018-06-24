import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            showColor: false,
            onClickable: true,
            prevColor: null   
        }
        this.switchCardStates = this.switchCardStates.bind(this);
    }
    //if this.state.showColor color = this.props.color; 
    //onClick: this.setState({showColor: true});
    switchCardStates(e){
        e.preventDefault();
        console.log(this.state.prevColor);
        if(this.state.prevColor != null){
            this.setState({onClickable: false});
        }
        if(this.state.onClickable){
            this.setState({
                showColor: !this.state.showColor,
                prevColor: this.props.color
            });
        }
        console.log(this.state.prevColor);
    }
    render(){
        let color = 'white';
        if(this.state.showColor){
            color = this.props.color;
        }
        const styles = {
            backgroundColor: `${color}`,
            width: '75px',
            height: '75px',
            margin: '15px',
            border: '3px solid black'
        };
        return(
            <button style={styles} onClick={this.switchCardStates}>

            </button>
        );
    }
}

export default Card;





