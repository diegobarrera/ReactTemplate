import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import App from '../components/App/App'
import List from '../components/List/List'
import Form from '../components/Form/Form'
import store from "../store";


class Root extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={App}/>
                        <Route path="/list" component={List} />
                        <Route path="/form" component={Form} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default Root;