// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    

    handleClickEvent = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    
    render() {
        return (
            <div>
                <button onClick={this.handleClickEvent}>Corrdinates</button>
            </div>
        )
    }
}

