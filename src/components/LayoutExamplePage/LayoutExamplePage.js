/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LayoutExamplePage.scss';
import Box from 'react-layout-components'

class LayoutExamplePage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div  />
          <h1>Hello world</h1>
          <Box width="100%" height="100%" wrap="reverse" >
            //This acts as an actual flexbox container

            <Box justifyContent="center" alignItems="flex-start">
              <Box flex={3}>
                {this.props.path === '/' ? null : this.props.title}
              </Box>
              <Box flex="1 0 auto" alignSelf="baseline" dangerouslySetInnerHTML={{ __html: this.props.content || '' }}/>
            </Box>
          </Box>
        </div>
      </div>
    );
  }

}

export default withStyles(LayoutExamplePage, s);
