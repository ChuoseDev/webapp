import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './views/signup/home'
import Info from './views/info/info'
import Signup from './views/signup/signup'
import Loading from './views/signup/loading'
import Feeling from './views/questionnaire/feeling'
import Startup from 'views/startup/startup'
import Information from 'views/information/information'
import Blackpart from 'views/black-part/black-part01'
import Grey from 'views/grey/grey'
import WhiteScreen from 'views/whiteScreen/whiteScreen'
import { Scene04_05 } from 'views/scene03/scene04_05'
import { Scene03 } from 'views/scene03/scene03'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Info />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/loading" element={<Loading />}></Route>
          <Route exact path="/feeling" element={<Feeling />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/startup" element={<Startup />}></Route>
          <Route exact path="/information" element={<Information />}></Route>
          <Route exact path="/scene01" element={<Grey />}></Route>
          <Route exact path="/scene02" element={<Blackpart />}></Route>
          <Route exact path="/scene03" element={<Scene03 />}></Route>
          <Route exact path="/scene04" element={<Scene04_05 />}></Route>
          <Route exact path="/scene05" element={<WhiteScreen />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
