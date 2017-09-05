import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import Charts from '../components/Charts';
import RenderComponents from '../components/renderComponents';
import RegForm from '../components/form';
// actions
import {
  toggleColor,
} from '../../actions/actions';

require('../../../node_modules/material-ui');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div>
        <RegForm />
      </div>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
