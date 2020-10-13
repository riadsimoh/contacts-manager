import React from 'react';

function About(props) {
  console.log(props.match.params);
  return (
    <div className="container text-center mt-5">
      <h1>
        About <span className="text-danger">Contact Manager</span>{' '}
      </h1>
      <p>It's is a simple application to manage your contacts.</p>
      <p>
        It was created with <span className="text-danger">React.js</span>
      </p>
    </div>
  );
}

export default About;
