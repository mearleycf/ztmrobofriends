import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from './containers/App';
import {Page404} from './pages';

/**
 * Utilize process.env.PUBLIC_URL that is exposed by create-react-app internally:
 * See: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/env.js
 * By prefixing the root path with process.env.PUBLIC_URL the root path will now match your Github specific url:
 * process.env.PUBLIC_URL + '/' === https://<username>.github.io/
 * See: https://github.com/facebookincubator/create-react-app/issues/1765
 */

export default () => (
    <HashRouter>
        <div>
            <Route path='/' component={App} />
        </div>

        <Route path='*' component={Page404} />
    </HashRouter>
);