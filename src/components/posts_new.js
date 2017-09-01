import React, { Component } from 'react';
// redux-form replaces the "connect" helper function
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  // the 'on' handlers are replaced by the ...field below
  // / onChange={field.input.onChange}
  // onFocus={field.input.onFocus}
  // field is a specified slice of state
  // meta.error looks at that same 'name' attribute and
  //  passes on errors for that tag if they exist

  renderField(field){
    // double destructuring
    const { meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;


    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {

    console.log(values);
  }

  // the 'Field' only works with redux form and needs the component attribute
  // to render JSX to the DOM

  // redux form does not submit to backend, must be done manually

  render () {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title"
              label='Title for Post'
               component={this.renderField}
        />
        <Field name="categories"
              label='Categories'
               component={this.renderField}
        />
        <Field name="content"
              label='Post Content'
               component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }
  // if errors is empty then form is fine to submit
  // else redux-form assumes form is valid
  return errors;
}

// below helps component communicate to the reducer that has already been setup
// below specifies a namespace for the app state
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
