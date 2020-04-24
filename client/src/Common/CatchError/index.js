import React from 'react';

/* Components  */
import Snackbar from '@material-ui/core/Snackbar';

/* Module */
import { bindActionCreators } from 'redux';
import { actionCatchError } from 'Store/Actions/actionMain';
import { connect } from 'react-redux';

const CatchError = props => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={props.showError}
      onClose={() => props.actionCatchError()}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      message={<span id="message-id">{props.textError}</span>}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actionCatchError: bindActionCreators(actionCatchError, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    showError: state.main.showError,
    textError: state.main.textError
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchError);
