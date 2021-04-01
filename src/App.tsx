
import { Link, Route } from 'react-router-dom';
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home/Home';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';
import { FiHeart, FiMic, FiSearch } from 'react-icons/fi';

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

/* Theme Global */
import './theme/global.css';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs >
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/DescriptionPage">
            <DescriptionPage />

          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" style={{ border: 'none' }}>
          <IonTabButton tab="tab1" href="/tab1">
            <FiHeart size="25" color="#fff" />
          </IonTabButton>
          <IonTabButton></IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <FiSearch size="25" color="#fff" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <IonFab vertical="bottom" horizontal="center" slot="fixed" className="botao-fab" style={{ transform: 'translateX(-50%)', boxShadow: 'none', bottom: '1rem'}}>
        <IonFabButton className={`menu-principal`} style={{height: '4rem', width: '4rem'}}>
          <Link to="/">
            <FiMic size="35" />
          </Link>
        </IonFabButton>
      </IonFab>
    </IonReactRouter>
  </IonApp >
);

export default App;
