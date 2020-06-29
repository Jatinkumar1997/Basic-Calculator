import React from 'react'

export default function Input(props) {
    return (
        <div className="row">
            <input className="col s6" type="text" value={props.value} readOnly/>
        </div>
    )
}
