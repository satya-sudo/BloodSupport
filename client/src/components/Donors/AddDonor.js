import React from 'react';
import { Form, Field } from 'react-final-form'
import { addDonor } from '../../actions';
import { connect } from 'react-redux';
import { stateData,BloodTypeData } from '../../constants/ConstantsData';


const stateFieldoptions  = stateData.map(state => {return  <option value={state}>{state}</option>})
const bloodtypeFieldOptions = BloodTypeData.map(bloodType => {return <option value={bloodType}>{bloodType}</option>  })


const AddDonorForm = (props) => {

    return (
    <div className="Donorform_main">
    <div className="container text-center">
        <h3 className="display-5 py-4">Fill In Your Details And Contibute To The Noble Cause! </h3>
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
                    <Field name="age">
                        {( {input}) => (
                            <input className="form-control" placeholder="age" type="number" {...input} />
                        )}
                    </Field>
                </div>
                <div className="form-group">
               
                    <Field className="form-control" name="bloodgroup" component="select" placeholder="bloodgroup">
                        <option >bloodgroup</option>
                        {bloodtypeFieldOptions}
                    </Field>
                </div>
                <div className="form-group">
                    <Field className="form-control" name="state" component="select" placeholder="state">
                        <option >state</option>
                        {stateFieldoptions}
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
                <button  type="submit" className="btn btn-info btn-block">Submit</button>

            </form>
        )}
    </Form>
    </div>
    </div>
    );


};

export default connect(()=>{},{ addDonor })(AddDonorForm);

