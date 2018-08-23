// Survey field contains logic to render a single label and text input
import React from 'react';

export default ({ input, label }) => {
    return (
        <div>
            <label>
                { label }
            </label>
            <div>
                <input {...input} />
            </div>
        </div>
    )
}