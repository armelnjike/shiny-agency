import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer/'
import GlobalStyle from './utils/style/GlobamStyle'
import { ContextProvider, SurveyProvider } from './utils/context'


ReactDOM.render(
  <React.StrictMode>
    <Router
      basename={"/REACT"}>
      <ContextProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey/:questionNumber">
              <Survey />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
