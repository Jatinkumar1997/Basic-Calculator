import React, { Component } from 'react'
import '../App.css';

export default class Panel extends Component {
    render() {
        return (
            <div className="row">
            <div className="row">
                <button className="waves-effect waves-light btn-large" name="1" onClick={this.props.onClick}>1</button>
                <button className="waves-effect waves-light btn-large" name="2" onClick={this.props.onClick}>2</button>
                <button className="waves-effect waves-light btn-large" name="3" onClick={this.props.onClick}>3</button>
                <button className="waves-effect waves-light btn-large" name="+" onClick={this.props.onClick}>+</button>
            </div>
            <div className="row">
                <button className="waves-effect waves-light btn-large" name="4" onClick={this.props.onClick}>4</button>
                <button className="waves-effect waves-light btn-large" name="5" onClick={this.props.onClick}>5</button>
                <button className="waves-effect waves-light btn-large" name="6" onClick={this.props.onClick}>6</button>
                <button className="waves-effect waves-light btn-large" name="*" onClick={this.props.onClick}>*</button>
            </div>
            <div className="row">
                <button className="waves-effect waves-light btn-large" name="7" onClick={this.props.onClick}>7</button>
                <button className="waves-effect waves-light btn-large" name="8" onClick={this.props.onClick}>8</button>
                <button className="waves-effect waves-light btn-large" name="9" onClick={this.props.onClick}>9</button>
                <button className="waves-effect waves-light btn-large" name="/" onClick={this.props.onClick}>/</button>
            </div>
            <div className="row"> 
                <button className="waves-effect waves-light btn-large" name="0" onClick={this.props.onClick}>0</button>
                <button className="waves-effect waves-light btn-large" name="." onClick={this.props.onClick}>.</button>
                <button id="equalBtn" className="waves-effect waves-light btn-large" name="=" onClick={this.props.onClick}>=</button>
                <button className="waves-effect waves-light btn-large" name="-" onClick={this.props.onClick}>-</button>
            </div>
            </div>
        )
    }
}
