import { IonContent, IonHeader, IonList, IonPage } from "@ionic/react";
import FrontHead from "../components/FrontHead/FrontHead";
import Recommended from "../components/Recommended/Recommended";
import ResidentThumbnail from "../components/ResidentThumbnail/ResidentThumbnail";
import TopFlats from "../components/TopFlats/TopFlats";
import TopHouses from "../components/TopHouses/TopHouses";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage className="home-page">
      <IonHeader className="home-page-header">
        <FrontHead />
        <ResidentThumbnail />
      </IonHeader>
      <IonContent fullscreen className="home-page-content">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonList lines="none">
          <div className="ion-padding">
            <Recommended />
          </div>
          <div className="ion-padding">
            <TopFlats />
          </div>
          <div className="ion-padding">
            <TopHouses />
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
