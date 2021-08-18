import React,{useState} from 'react';
import { Form, Field } from 'react-final-form'
import { addDonor } from '../../actions';
import { connect } from 'react-redux';
import { stateData,BloodTypeData } from '../../constants/ConstantsData';
import Fade from 'react-reveal/Fade';


const stateFieldoptions  = stateData.map(state => {return  <option value={state}>{state}</option>})
const bloodtypeFieldOptions = BloodTypeData.map(bloodType => {return <option value={bloodType}>{bloodType}</option>  })


const AddDonorForm = (props) => {

    // const [toggleman, settoggleman] = useState(props.toggle);
    console.log(props.toggle);
    return (
    <Fade top>    
    <div className="Donorform_main">
    <div className="container text-center">
        <h3 className="display-5 py-4">Fill In Your Details And Contibute To The Noble Cause! </h3>
        <Form onSubmit={(formObj)=>{props.addDonor(formObj); window.alert("Thank  you for Your contribultion in this nobal couse");props.handleToggle(false)}} 
            
            validate={(values) => {
            const errors = {};
            if (!values.age  || (values.age < 18 || values.age > 60) ){
                errors.age = "Age must be between 18 and 60 to be able to donate blood";
            }
            if (!values.bloodgroup || values.bloodgroup === "bloodgroup") {
                errors.bloodgroup = "Please Specify Your Bloodgroup";
            } 
            if (!values.state) {
                errors.state = "Please Specify Your State";
            }
                
            return errors;
            }}>
            {({handleSubmit})=> (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        
                        <Field name="name">
                            {( {input,meta}) => (
                                <div>
                                <input placeholder="name" className="form-control" type="text" {...input} />
                                {meta.error && meta.touched && <small className="form-text  text-danger">{meta.error}</small>}
                                </div>
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
                            {( {input,meta}) => (
                                <div>
                                <input className="form-control" placeholder="age" type="number" {...input} />
                                {meta.error && meta.touched && <small className="form-text  text-danger">{meta.error}</small>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form-group">
                
                        <Field className="form-control" name="bloodgroup" component="select" placeholder="bloodgroup">
                            {({input,meta})=>(
                                <div>
                                    <select className="form-control" name="bloodgroup" {...input}>
                                        <option >bloodgroup</option>
                                        {bloodtypeFieldOptions}
                                    </select>
                                    {meta.error && meta.touched && <small className="form-text  text-danger">{meta.error}</small>}
                                    
                                </div>
                            )}
                            {/* <option >bloodgroup</option>
                            {bloodtypeFieldOptions}
                            {meta.error && meta.touched && <span>{meta.error}</span>} */}
                        </Field>
                    </div>
                    <div className="form-group">
                        <Field className="form-control" name="state" component="select" placeholder="state">
                            {({input,meta})=>(
                                <div>
                                    <select className="form-control" name="state" {...input}>
                                        <option >State</option>
                                        {stateFieldoptions}
                                    </select>
                                    {meta.error && meta.touched && <small className="form-text  text-danger">{meta.error}</small>}

                                </div>
                            )}
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
    </Fade>
    );


};

export default connect(()=>{},{ addDonor })(AddDonorForm);

