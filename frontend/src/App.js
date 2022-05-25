import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './views/signup/home'
import Info from './views/info/info'
import Signup from './views/signup/signup'
import Loading from './views/signup/loading'
import Feeling from './views/questionnaire/feeling'
import Startup from 'views/startup/startup'
import Information from 'views/information/information'
import Scene01 from 'views/scene01/scene01'
import Scene02 from 'views/scene02/scene02'
import Scene03 from 'views/scene03/scene03'
import Scene04 from 'views/scene04/scene04'
import Scene05 from 'views/scene05/scene05'
import Scene06 from 'views/scene06/scene06'
import Scene07 from 'views/scene07/scene07'
import Scene08 from 'views/scene08/scene08'
import Scene10 from 'views/scene10/scene10'
import Scene11 from 'views/scene11/scene11'
import Scene12 from 'views/scene12/scene12'
import Scene13 from 'views/scene13/scene13'
import Scene14 from 'views/scene14/scene14'
import Scene15 from 'views/scene15/scene15'
import TestCard from 'views/scene10/testCard'

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
          <Route exact path="/scene05" element={<Scene05 />}></Route>
          <Route exact path="/scene06" element={<Scene06 />}></Route>
          <Route exact path="/scene07" element={<Scene07 />}></Route>
          <Route exact path="/scene08" element={<Scene08 />}></Route>
          <Route exact path="/scene10" element={<Scene10 />}></Route>
          <Route exact path="/scene11" element={<Scene11 />}></Route>
          <Route exact path="/scene12" element={<Scene12 />}></Route>
          <Route exact path="/scene13" element={<Scene13 />}></Route>
          <Route exact path="/scene14" element={<Scene14 />}></Route>
          <Route exact path="/scene15" element={<Scene15 />}></Route>
          <Route exact path="/testCard" element={<TestCard />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
