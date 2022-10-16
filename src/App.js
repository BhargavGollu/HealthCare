import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Appointment from './components/Appointment'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/appointment" component={Appointment} />
    </Switch>
  </BrowserRouter>
)

export default App
