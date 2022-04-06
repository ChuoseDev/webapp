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
import Scene04B from 'views/scene04-black/scene04b'
import Scene04 from 'views/scene04/scene04'
import Scene01 from 'views/scene01/scene01'
import Scene03 from 'views/scene03/scene03'
import Scene05 from 'views/scene05/scene05'
import Scene06 from 'views/scene06/scene06'
import Scene07 from 'views/scene07/scene07'

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
          <Route exact path="/sscene01" element={<Scene01 />}></Route>
          <Route exact path="/scene01" element={<Grey />}></Route>
          <Route exact path="/scene02" element={<Blackpart />}></Route>
          <Route exact path="/scene03" element={<Scene03 />}></Route>
          <Route exact path="/scene041" element={<Scene04B />}></Route>
          <Route exact path="/scene04" element={<Scene04 />}></Route>
          <Route exact path="/scene05" element={<Scene05 />}></Route>
          <Route exact path="/scene06" element={<Scene06 />}></Route>
          <Route exact path="/scene07" element={<Scene07 />}></Route>
          {/* <Route exact path="/scene07" element={<WhiteScreen />}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
