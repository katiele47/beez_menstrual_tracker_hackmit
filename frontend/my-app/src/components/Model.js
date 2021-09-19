import React from 'react'
import './model.css'
import model from '../assets/images/model.JPG'

function Model() {
    return (
        <div className="model-container">
            <img src={model} alt="" className="modelimg" />
        </div>
    )
}

export default Model
