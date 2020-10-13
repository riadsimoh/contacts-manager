import React, { Component } from 'react';
import classnames from 'classnames';
class TextInput extends Component {
  render() {
    const {
      type,
      name,
      placeholder,
      value,
      onChange,
      label,
      error,
    } = this.props;
    console.log(type);
    return (
      <div>
        <div className="from-group">
          <label htmlFor={name}> {label} </label>
          <input
            type={type}
            name={name}
            className={classnames('form-control form-control-lg', {
              'is-invalid': error,
            })}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    );
  }
}

export default TextInput;
