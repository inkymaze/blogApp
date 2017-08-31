import React, { Component } from 'react';
// redux-form replaces the "connect" helper function
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderTitleField(field){
    return (
      <div>
        <input />
      </div>
    );
  }

  // the 'Field' only works with redux form and needs the component attribute
  // to render JSX to the DOM
  render () {
    return (
      <form>
        <Field name="title"
               component={this.renderTitleField}
        />
      </form>

    );
  }
}


// below helps component communicate to the reducer that has already been setup
// below specifies a namespace for the app state
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
