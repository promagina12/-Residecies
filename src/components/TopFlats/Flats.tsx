import React from "react";
import {
  IonCol,
  IonContent,
  IonRow,
  IonImg,
  IonItem,
  IonList,
  IonGrid,
  IonNote,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
  IonPage,
} from "@ionic/react";

import "./TopFlats.scss";

import img1 from "../../assets/img/House1.png";
import img2 from "../../assets/img/Houses1.png";
import img3 from "../../assets/img/House3.png";
import img4 from "../../assets/img/Flats1.png";
import img5 from "../../assets/img/Flats2.png";
import img6 from "../../assets/img/Mansion1.png";
import star from "../../assets/img/stars.png"
import {
  chatbox,
  chevronBack,
  filter,
  heart,
} from "ionicons/icons";

const Flats: React.FC = () => {
  return (
    <IonPage className="Flats">
      <IonContent>
        <IonHeader>
          <IonToolbar mode="md" color="primary">
            <IonButtons slot="start">
              <IonBackButton
                color="light"
                mode="md"
                defaultHref="home"
                text="Top Flats"
                icon={chevronBack}
              />
            </IonButtons>
            <IonButtons slot="end" color="light">
              <IonButton color="secondary">
                <IonIcon slot="icon-only" icon={filter} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonList mode="md">
          <IonItem>
            <IonGrid>
              <a href="/Rose-Villa">
                <IonRow>
                  <IonCol>
                    <IonImg src={img1} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Rose Villa</h6>
                      <IonNote className="place">Koramangala,Banglore</IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">8k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">990</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid>
              <a href="/Blue-House">
                <IonRow>
                  <IonCol>
                    <IonImg src={img2} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Blue House</h6>
                      <IonNote className="place">Indiranagar,Banglore</IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">11k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">470</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid>
              <a href="/Ocean-Villa">
                <IonRow>
                  <IonCol>
                    <IonImg src={img3} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Ocean Villa</h6>
                      <IonNote className="place">M.G. Road,Banglore</IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">6k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">470</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid>
              <a href="/Calp-Flat">
                <IonRow>
                  <IonCol>
                    <IonImg src={img4} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Calp Flat</h6>
                      <IonNote className="place">HSR Layout,Banglore</IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">12k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">580</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid>
              <a href="/Radison-Room">
                <IonRow>
                  <IonCol>
                    <IonImg src={img5} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Radison Room</h6>
                      <IonNote className="place">
                        Richmond Town,Banglore
                      </IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">11k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">990</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid>
              <a href="/Dexico-House">
                <IonRow>
                  <IonCol>
                    <IonImg src={img6} />
                  </IonCol>
                  <IonCol>
                    <div className="cont">
                      <h6>Dexico House</h6>
                      <IonNote className="place">Jayanagar,Bnaglore</IonNote>
                      <div className="stars">
                        <IonImg className="Star" src={star} />
                        <IonNote className="rate">(120)</IonNote>
                      </div>
                      <div className="comments">
                        <IonIcon icon={heart} className="heart" />
                        <IonNote className="number">11k</IonNote>
                        <IonIcon icon={chatbox} className="chatbox" />
                        <IonNote className="number">990</IonNote>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </a>
            </IonGrid>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Flats;
