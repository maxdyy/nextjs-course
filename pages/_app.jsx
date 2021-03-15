import React from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyApp;
