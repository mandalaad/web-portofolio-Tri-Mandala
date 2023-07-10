import React, { Component } from 'react'
import './heroprojectstyle.css'
class Heroproject extends Component{
    render(){
        return (
            <div className='hero2'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    } 
 
}

export default Heroproject