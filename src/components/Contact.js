import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showInfo: false,
  };
  deleteHandeler = (dispatch, id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contacts;
    const { showInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body">
              <h2>
                {name}
                <i
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    this.setState({
                      showInfo: !this.state.showInfo,
                    });
                  }}
                  className="fas fa-sort-down"
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.deleteHandeler.bind(this, dispatch, id)}
                ></i>
              </h2>

              {showInfo ? (
                <ul className="list-g roup">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.protoType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
