import React, {Component} from 'react';
import BladeList from './BladeList';
import Blade from './Blade';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class BladeApp extends Component {

    render() {
        return (
            <Router>
                <>
                <h1>Blades</h1>
                {/* <BladeList/>    */}
                <Switch>
                        <Route path="/" exact component={BladeList} />
                        <Route path="/blades" exact component={BladeList} />
                        <Route path="/blades/:id" component={Blade} />
                </Switch>
                </> 
            </Router>
        )
    }
}

export default BladeApp;;