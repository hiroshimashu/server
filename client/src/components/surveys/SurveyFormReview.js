import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';

const SurveyReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key = { name }>
                <label>{ label }</label>
                <div>
                    { formValues[name] }
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>
                Please confirm your entries
            </h5>
            { reviewFields }
            <button 
                className = "yellow darken-3 btn-flat"
                onClick = { onCancel }
            >
                Back
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.values
    };
}

export default connect(mapStateToProps)(SurveyReview);