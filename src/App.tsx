import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Recommend from "./components/Recommended/Recommend";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import Flats from './components/TopFlats/Flats';
import Houses from './components/TopHouses/Houses';
import RoseVilla from './components/Villas/RoseVilla';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/Recommend">
          <Recommend />
        </Route>
        <Route path="/Flats">
          <Flats />
        </Route>
        <Route path="/Houses">
          <Houses />
        </Route>
        <Route path="/Rose-Villa">
          <RoseVilla />
        </Route>
        <Route path="/Blue-House">
          <RoseVilla />
        </Route>
        <Route path="/Ocean-Villa">
          <RoseVilla />
        </Route>
        <Route path="/Calp-Flat">
          <RoseVilla />
        </Route>
        <Route path="/Radison-Room">
          <RoseVilla />
        </Route>
        <Route path="/Dexico-House">
          <RoseVilla />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
