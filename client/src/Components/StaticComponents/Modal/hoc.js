import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';

const Modal = (Component) => {

    return class extends React.Component {

        state = {open: false};

        componentWillReceiveProps(nextProps) {
            this.setState({open: nextProps.open});
        }

        render() {
            return (
                <Dialog
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Component {...this.props}/>
                </Dialog>
            );
        }
    }

};

export default Modal;