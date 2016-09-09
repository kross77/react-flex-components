/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EventEmitter from 'eventemitter3';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';

const title = 'Contact Us';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});




class ContactPage extends Component {

    handleRequestClose() {
        console.log("handleRequestClose");
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        console.log("handleTouchTap");

        this.setState({
            open: true,
        });
    }

    handleClick = (event) => {
        console.log("hallo world");
    };


  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
      this.handleRequestClose = this.handleRequestClose.bind(this);
      this.handleTouchTap = this.handleTouchTap.bind(this);

      this.state = {
          open: false,
      };
    this.context.onSetTitle(title);
  }



  render() {
    const standardActions = (
        <FlatButton
            label="Ok"
            primary={true}
            onTouchTap={this.handleRequestClose}
            onClick={this.handleRequestClose}
            />
    );

    return (
      <div className={s.root}>

        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Dialog
                open={this.state.open}
                title="Super Secret Password"
                actions={standardActions}
                onRequestClose={this.handleRequestClose}
                >
              1-2-3-4-5
            </Dialog>
            <h1>Material-UI</h1>
            <h2>example project</h2>
            <RaisedButton
                label="Super Secret Password"
                secondary={true}
                onClick={this.handleTouchTap}
                onTouchTap={this.handleTouchTap}
                />
              <br/>
          </div>
        </MuiThemeProvider>

      </div>
    );
  }

}

export default withStyles(ContactPage, s);
