import React from 'react';
import { Form, Field } from 'react-final-form'
import { addDonor } from '../../actions';
import { connect } from 'react-redux';
const AddDonorForm = (props) => {

    return (
    <div className="Donorform_main bg-dark">
    <div className="container text-center">
        <h3 className="display-6">Fill In Your Details And Contibute To The Noble Cause! </h3>
    <Form onSubmit={(fromObj)=>{ console.log(fromObj),props.addDonor(fromObj)}}>
        {({handleSubmit})=> (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    
                    <Field name="name">
                        {( {input}) => (
                            <input placeholder="name" className="form-control" type="text" {...input} />
                            
                        )}
                    </Field>
                    <small className="form-text  text-info">Your name is optional.</small>
                </div>
                {/* <Field name="Number">
                    {( {input}) => (
                        <input placeholder="name" type="text" {...input} />
                    )}
                </Field> */}
                <div className="form-group">
               
                    <Field className="form-control" name="bloodgroup" component="select" placeholder="bloodgroup">
                        <option >bloodgroup</option>
                        <option value="#ff0000">❤️ Red</option>
                        <option value="#00ff00">💚 Green</option>
                        <option value="#0000ff">💙 Blue</option>
                    </Field>
                </div>
                <div className="form-group">
                    <Field className="form-control" name="state" component="select" placeholder="state">
                        <option >state</option>
                        <option value="#ff0000">❤️ Red</option>
                        <option value="#00ff00">💚 Green</option>
                        <option value="#0000ff">💙 Blue</option>
                    </Field>
                </div>
                <div className="form-group">
                <Field name="city">
                    {( {input}) => (
                        <input className="form-control" placeholder="city" type="text" {...input} />
                    )}
                </Field>
                </div>
                <p>You should be between 18 and 60 years of age </p>
                <p>You should have a weight of 50+ kgs</p>
                <button  type="submit" className="btn btn-info">Submit</button>

            </form>
        )}
    </Form>
    </div>
    </div>
    );


};

export default connect(()=>{},{ addDonor })(AddDonorForm);

