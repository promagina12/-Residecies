import { IonCol, IonGrid, IonLabel, IonRow, IonThumbnail } from "@ionic/react";
import './ResidentThumbnail.scss'


import img1 from "../../assets/img/Flats1.png";
import img2 from "../../assets/img/Houses2.png";
import img3 from "../../assets/img/Flats2.png";
import img4 from "../../assets/img/House1.png";

interface ContainerProps {}
const ResidentThumbnail: React.FC<ContainerProps> = () => {
    return (
      <div className="residence-class">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <div className="residence-class-col">
                <IonThumbnail>
                  <img src={img1} />
                </IonThumbnail>
                <IonLabel>Flat</IonLabel>
              </div>
            </IonCol>
            <IonCol>
              <div className="residence-class-col">
                <IonThumbnail>
                  <img src={img2} />
                </IonThumbnail>
                <IonLabel>House</IonLabel>
              </div>
            </IonCol>
            <IonCol>
              <div className="residence-class-col">
                <IonThumbnail>
                  <img src={img3} />
                </IonThumbnail>
                <IonLabel>Room</IonLabel>
              </div>
            </IonCol>
            <IonCol>
              <div className="residence-class-col">
                <IonThumbnail>
                  <img src={img4} />
                </IonThumbnail>
                <IonLabel>Villa</IonLabel>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    );
};

export default ResidentThumbnail;
