import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (action, state) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'riad',
        email: 'simoh@gmail.com',
        phone: 5445454545,
      },
      {
        id: 2,
        name: 'Katia',
        email: 'simoh@gmail.com',
        phone: 5455,
      },
      {
        id: 3,
        name: 'Ali',
        email: 'simoh@gmail.com',
        phone: 5454545,
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(action, state));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
