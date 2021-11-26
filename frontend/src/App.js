import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
//import Signup from './views/signup/signup'
import Info from './views/info/info'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Info />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
