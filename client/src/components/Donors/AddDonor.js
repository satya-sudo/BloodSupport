import React from 'react';
import { Form, Field } from 'react-final-form'

const AddDonorForm = () => {

    return (
    <Form onSubmit={(fromObj)=>{ console.log(fromObj)}}>
        {({handleSubmit})=> (
            <form onSubmit={handleSubmit}>
                <Field name="name">
                    {( {input}) => (
                        <input placeholder="name" type="text" {...input} />
                    )}
                </Field>
                
                <button  type="submit">Submit</button>

            </form>
        )}
    </Form>
    );


};

export default AddDonorForm;

