import React, { Component } from 'react';
import TextInput from './TextInput';

import { Consumer } from '../context';
import { v4 as uuid } from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    errors: {},
  };

  inputHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (dispatch, e) => {
    e.preventDefault();

    const { errors, name, email, phone } = this.state;

    if (name == '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email == '') {
      this.setState({ errors: { email: 'Email is requeired' } });
      return;
    }
    if (phone == '') {
      this.setState({ errors: { phone: 'phone is required' } });
      return;
    }

    const newContacts = {
      name,
      email,
      phone,
    };
    newContacts.id = uuid();
    console.log(newContacts);
    dispatch({ type: 'ADD_CONTACT', payload: newContacts });
    this.setState({
      name: '',
      phone: '',
      email: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  render() {
    const { errors, name, phone, email } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.submitHandler.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name..."
                    onChange={this.inputHandeler}
                    value={name}
                    error={errors.name}
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    onChange={this.inputHandeler}
                    value={email}
                    error={errors.email}
                  />
                  <TextInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter your phone..."
                    onChange={this.inputHandeler}
                    value={phone}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-danger mt-3"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

// inputHandler = (e) => this.setState({ [e.target.name]: e.target.value });
// submitHandler = (e) => {
//   e.preventDefault();
//   console.log(this.state);
// };
