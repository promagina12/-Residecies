import { useState } from "react";
import "./FrontHead.scss";
import {
  IonButton,
  IonAvatar,
  IonToolbar,
  IonButtons,
  IonHeader,
  IonTitle,
  IonSearchbar,
  IonFooter,
  IonIcon,
} from "@ionic/react";
import { location } from "ionicons/icons";
import SearchBar from "../SearchBar/SearchBar";

import img1 from "../../assets/img/Avatar.png";

interface ContainerProps {}

const FrontHead: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonToolbar color="primary" className="Head">
      <IonToolbar color="primary" className="nav">
        <IonButtons slot="start">
          <IonButton shape="round" fill="outline" className="location">
            <IonIcon icon={location} className="icon"></IonIcon>
            <p>Bangalore</p>
          </IonButton>
        </IonButtons>
        <div slot="end">
          <IonAvatar className="avatar">
            <img src={img1} />
          </IonAvatar>
        </div>
      </IonToolbar>
      <SearchBar />
    </IonToolbar>
  );
};

export default FrontHead;
