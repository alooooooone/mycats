import React, { Component } from 'react';
import './Count.css'

class Count extends Component{
    render(){
        let { flag, num } = this.props

        return (
            <div className="num" style={flag ? { animation: `animation-${num} ${num*0.5}s ease`,animationDelay: '1.2s',animationFillMode: 'forwards' } : {}}>
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
        )
    }
}

export default Count