import React, { Component } from 'react'
import BladeService from '../service/BladeService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Blade extends Component {

    constructor(props) {
        super(props)
        this.state = {
            blade: {},
            id: this.props.match.params.id,
            name: '',
            stars: '',
            notes: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount () {
        console.log("id: "+this.state.id);
        // eslint-disable-next-line
        if (this.state.id === -1) {
            //for adding
            return
        }
        this.getBlade(this.state.id);      
    }

    getBlade(id) {
        BladeService.retrieveBlade(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({blade: response.data});
                }
            )
    }

    onSubmit(values) {
        console.log("in Submit. Values:"+ values);
        let blade = {
            id: this.state.id,
            name: values.name,
            stars: values.stars,
            notes: values.notes
        }

        if (this.state.id === -1) {
            BladeService.createBlade(blade)
                .then(() => this.props.history.push('/blades'));
        } else {
            BladeService.updateBlade(this.state.id, blade)
                .then(() => this.props.history.push('/blades'));
        }

    }


    validate(values) {
        console.log("in validate: "+ values.stars);
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Name'
        } else if (values.name.length < 3) {
            errors.name = 'Enter atleast 3 Characters in Name'
        }
        if (!values.stars) {
            errors.stars = 'Please enter stars from 1-5'
        } else if (values.stars < 1 || values.stars >5) {
            errors.stars = 'Enter a value between 1-5 for Stars'
        }
        if (!values.notes) {
            errors.notes = 'Please enter a value for notes'
        } else if (values.name.length < 3) {
            errors.notes = 'Enter atleast 3 Characters in Notes'
        }
    
        return errors
    }

    render() {

        let {blade, id } = this.state
    
        return (
            <div>
                <h3>Blade Details!</h3>
                <div className="container">
                    <Formik
                      onSubmit={this.onSubmit}
                      validateOnChange={false}
                      validateOnBlur={false}
                      validate={this.validate}
                      enableReinitialize={true}
                      initialValues={blade}
                    >            
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                     <ErrorMessage name="stars" component="div"
                                        className="alert alert-warning" />
                                     <ErrorMessage name="nots" component="div"
                                        className="alert alert-warning" />
                                    
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Stars</label>
                                        <Field className="form-control" type="text" name="stars" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Notes</label>
                                        <Field className="form-control" type="text" name="notes" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }

}

export default Blade;