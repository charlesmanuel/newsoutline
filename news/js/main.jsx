import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Post from './post';

// This method is only called once
ReactDOM.render(
    // Insert the likes component into the DOM
    <Post url="/api/v1/posts/" />,
    document.getElementById('reactEntry'),
);