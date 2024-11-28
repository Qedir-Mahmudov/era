import React from 'react'
import PropTypes from 'prop-types'

function Button() {
    return (
        <div>Button
            <button>

            </button>
            <input type="text" >{inputumuz}</input>


        </div>

    )
    Button.prototype = {
        inputumuz: PropTypes.string

    };
}

export default Button