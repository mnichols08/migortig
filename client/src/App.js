import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/'
import Spinner from './components/spinner'
import ErrorBoundary from './components/error-boundary'

import { GlobalStyle } from './global.styles'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

const HomePage = lazy(() => import('./pages/homepage/'))
const ShopPage = lazy(() => import('./pages/shop/'))
const AuthPage = lazy(() => import('./pages/auth/'))
const CheckoutPage = lazy(() => import('./pages/checkout'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />} >
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route
                exact
                path='/signin'
                render={() =>
                  currentUser ?
                  ( <Redirect to='/' /> ) : ( <AuthPage /> )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
