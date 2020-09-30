import React, { Component } from 'react';

const like_color = '#131b20';
const dislike_color = '#462128';
const like = 'Like';
const dislike = 'Dislike';

export default class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = { color: like_color, text: like };
        this.changeColor = this.changeColor.bind(this);  
    }
    changeColor() {
        const newText = this.state.text == like ? dislike : like;
        const newColor = this.state.color == like_color ? dislike_color : like_color;
        this.setState({ color: newColor, text: newText });
    }
    
    render() {
        return(
            <div>
                <button className='like-button' style={{background: this.state.color}} onClick={this.changeColor}>{this.state.text}</button>
            </div>
        );
    }
}

