import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonToolbar,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonNote,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./RoseVilla.scss";

import imgSlide1 from "../../assets/slides/unsplash.png";
import img2 from "../../assets/img/stars.png";
import { callOutline, fastFoodOutline, peopleOutline } from "ionicons/icons";

const RoseVilla: React.FC = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (
    <IonPage className="RoseVillaPage">
      <IonContent fullscreen>
        <IonHeader
          className="ion-no-border RoseVillaPage-Header"
          collapse="condense"
        >
          <IonToolbar className="RoseVillaPage-Header-Toolbar">
            <IonButtons>
              <IonBackButton defaultHref="Recommend" text="" />
            </IonButtons>
          </IonToolbar>
          <IonSlides
            className="RoseVillaPage-Slider"
            pager={true}
            options={slideOpts}
          >
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
            <IonSlide>
              <IonImg src={imgSlide1} />
            </IonSlide>
          </IonSlides>
          <IonCard className="RoseVillaPage-Card">
            <IonCardHeader className="C-Header">
              <IonCardTitle className="title">Blue House</IonCardTitle>
              <IonCardSubtitle className="sub">
                Indiranagr, Banglore
              </IonCardSubtitle>
              <IonImg className="Star" src={img2} />
            </IonCardHeader>
            <IonCardContent>
              <IonToolbar>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonIcon className="icon" icon={peopleOutline}></IonIcon>
                      <IonNote>4 guest</IonNote>
                    </IonCol>
                    <IonCol>
                      <IonIcon
                        className="icon"
                        icon={fastFoodOutline}
                      ></IonIcon>
                      <IonNote>Breakfast</IonNote>
                    </IonCol>
                  </IonRow>
                  <IonCol>
                    <IonIcon className="icon" icon={callOutline}></IonIcon>
                    <IonNote>Doctor on call </IonNote>
                  </IonCol>
                  <IonCardTitle className="spec">Specification</IonCardTitle>
                  <IonList lines="none">
                    <IonItem>
                      <p>
                        Comfortable house with newly as Renovated kitchen and
                        bathroom.
                      </p>
                    </IonItem>
                    <IonItem>
                      <p>Highly modified stainless steel Appliances.</p>
                    </IonItem>
                    <IonItem>
                      <p>
                        The space fits four and centrally Located in quiet
                        street.
                      </p>
                    </IonItem>
                    <IonItem>
                      <p>
                        Comfortable house with exposed Bricks there is true city
                        feeling.
                      </p>
                    </IonItem>
                  </IonList>
                  <IonToolbar>
                    <IonLabel slot="start" className="price">
                      From Rs1500/ night
                    </IonLabel>
                    <IonButtons slot="end">
                      <IonButton
                        className="btn"
                        color="secondary-contrast"
                        expand="block"
                      >
                        Book now
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonGrid>
              </IonToolbar>
            </IonCardContent>
          </IonCard>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default RoseVilla;
