import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Scene01 from 'views/scene01/scene01'
import Scene02 from 'views/scene02/scene02'
import Scene03 from 'views/scene03/scene03'
import Scene04 from 'views/scene04/scene04'
import Scene05 from 'views/scene05/scene05'
import Scene06 from 'views/scene06/scene06'
import Scene07 from 'views/scene07/scene07'
import Scene08 from 'views/scene08/scene08'
import Scene09 from 'views/scene09/scene09'
import Scene10 from 'views/scene10/scene10'
import Scene11 from 'views/scene11/scene11'
import Scene12 from 'views/scene12/scene12'
import Scene13 from 'views/scene13/scene13'
import Scene14 from 'views/scene14/scene14'
import Scene15 from 'views/scene15/scene15'
import Scene16 from 'views/scene16/scene16'
import Level from 'views/level/level'
import SceneWrapper from 'views/sceneWrapper/sceneWrapper'
import EndPage from 'views/endPage/endPage'
import EmergencyContact from 'views/emergencyContact/emergencyContact'
import Analyse from 'views/analyse/analyse'
import Startup from 'views/startup/startup'
import Consent from 'views/consent/consent'
import Random from 'views/random/random'
import Hospital from 'views/้hospitalInfo/hospitalDistrict'
import HospitalInfo from 'views/้hospitalInfo/hostpitalInfo'
import EmergencyCall from 'views/emergencyCall/emergencyCall'

const App = () => {
  return (
    <div className="App">
      <audio loop id="backgroundtrack">
        <source
          src="https://chuose-bucket.s3.ap-southeast-1.amazonaws.com/static/media/backgroundtrack.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Startup />}></Route>
          <Route exact path="/consent" element={<Consent />}></Route>
          <Route exact path="/emergency" element={<EmergencyCall />}></Route>
          <Route
            exact
            path="/emergency-contact"
            element={<EmergencyContact />}
          ></Route>
          <Route exact path="/ending" element={<EndPage />}></Route>
          <Route exact path="/hospital" element={<Hospital />}></Route>
          <Route
            exact
            path="/HospitalInfo/:id"
            element={<HospitalInfo />}
          ></Route>
          <Route
            exact
            path="/scene01"
            element={
              <SceneWrapper>
                <Scene01 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene02"
            element={
              <SceneWrapper>
                <Scene02 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene03"
            element={
              <SceneWrapper>
                <Scene03 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene04"
            element={
              <SceneWrapper>
                <Scene04 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene05"
            element={
              <SceneWrapper>
                <Scene05 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene06"
            element={
              <SceneWrapper>
                <Scene06 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene07"
            element={
              <SceneWrapper>
                <Scene07 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene08"
            element={
              <SceneWrapper>
                <Scene08 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene09"
            element={
              <SceneWrapper>
                <Scene09 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene10"
            element={
              <SceneWrapper>
                <Scene10 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene11"
            element={
              <SceneWrapper>
                <Scene11 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene12"
            element={
              <SceneWrapper>
                <Scene12 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene13"
            element={
              <SceneWrapper>
                <Scene13 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene14"
            element={
              <SceneWrapper>
                <Scene14 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene15"
            element={
              <SceneWrapper>
                <Scene15 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/scene16"
            element={
              <SceneWrapper>
                <Scene16 />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/analyse"
            element={
              <SceneWrapper>
                <Analyse />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/level"
            element={
              <SceneWrapper>
                <Level />
              </SceneWrapper>
            }
          ></Route>
          <Route
            exact
            path="/random"
            element={
              <SceneWrapper>
                <Random />
              </SceneWrapper>
            }
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
