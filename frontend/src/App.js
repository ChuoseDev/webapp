import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './views/signup/home'
import Info from './views/info/info'
import Signup from './views/signup/signup'
import Loading from './views/signup/loading'
import Feeling from './views/questionnaire/feeling'
import Startup from 'views/startup/startup'
import Information from 'views/information/information'
import WhiteScreen from 'views/whiteScreen/whiteScreen'
import { Scene04 } from 'views/scene04/scene04'
import { Scene03 } from 'views/scene03/scene03'
import BlackPart01 from 'views/black-part/black-part01'
import BlackPart02 from 'views/black-part/black-part02'
import BlackPart03 from 'views/black-part/black-part03'
import Scene01 from 'views/scene01/scene01'
import Scene02 from 'views/scene02/scene02'
import WhiteScreen from 'views/whiteScreen/whiteScreen'
import Scene04 from 'views/scene04/scene04'
import Scene01 from 'views/scene01/scene01'
import Scene03 from 'views/scene03/scene03'

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
          <Route exact path="/scene01" element={<Scene01 />}></Route>
          <Route exact path="/scene02" element={<Scene02 />}></Route>
          <Route exact path="/scene03" element={<Scene03 />}></Route>
          <Route exact path="/scene04" element={<Scene04 />}></Route>
          <Route exact path="/blackpart01" element={<BlackPart01 />}></Route>
          <Route exact path="/blackpart02" element={<BlackPart02 />}></Route>
          <Route exact path="/blackpart03" element={<BlackPart03 />}></Route>
          <Route exact path="/scene05" element={<WhiteScreen />}></Route>
          <Route exact path="/scene06" element={<WhiteScreen />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
