import React from 'react';
import {Link, useRouteMatch, Switch, Route} from 'react-router-dom';
import ReactTopic from './ReactTopic';
import Es6Topic from './Es6Topic';
import Topic from './Topic';

function JavaScriptPage(props) {
    let match = useRouteMatch();

    return (
        <React.Fragment>
            <h1>JavaScript - ECMA-262</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Integer feugiat scelerisque varius morbi enim nunc faucibus. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Vel facilisis volutpat est velit egestas dui id ornare. Amet consectetur adipiscing elit ut aliquam purus sit amet. Elementum sagittis vitae et leo duis ut diam. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ullamcorper eget nulla facilisi etiam dignissim diam. Urna duis convallis convallis tellus id interdum velit. Etiam non quam lacus suspendisse faucibus interdum. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.</p>
            <h3>Here are some topics in JavaScript</h3>
            <ul>
                <li><Link to={`${match.url}/react`}>React</Link></li>
                <li><Link to={`${match.url}/es6`}>ES6</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/react`}>
                    <ReactTopic />
                </Route>
                <Route path={`${match.path}/es6`}>
                    <Es6Topic />
                </Route>
                <Route path={`${match.path}/:topic`}>
                    <Topic />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default JavaScriptPage;