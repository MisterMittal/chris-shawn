import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import { Home } from './pages'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}
const RoutedScroll = withRouter(ScrollToTop)
export default class App extends Component {
  render() {
    return (
      <Router>
        <RoutedScroll>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </RoutedScroll>
      </Router>
    )
  }
}
