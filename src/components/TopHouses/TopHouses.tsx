import React from "react";
import {
  IonSlides,
  IonSlide,
  IonImg,
  IonNote,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./TopHouses.scss";

import imgSlide1 from "../../assets/img/Houses1.png";
import imgSlide2 from "../../assets/img/Houses2.png";
import imgSlide3 from "../../assets/img/Houses3.png";

const slideOpts = {
  initialSlide: 0,
  spaceBetween: 20,
  slidesPerView: 2.5,
};

const TopHouses: React.FC = () => (
  <div className="recommended-slides">
    <IonItem>
      <IonLabel>Top Houses</IonLabel>
      <a href='/Houses'>
        <IonNote slot="end">see all</IonNote>
      </a>
    </IonItem>
    <IonSlides options={slideOpts}>
      <IonSlide>
        <IonImg src={imgSlide1} />
      </IonSlide>
      <IonSlide>
        <IonImg src={imgSlide2} />
      </IonSlide>
      <IonSlide>
        <IonImg src={imgSlide3} />
      </IonSlide>
      <IonSlide>
        <IonImg src={imgSlide1} />
      </IonSlide>
      <IonSlide>
        <IonImg src={imgSlide2} />
      </IonSlide>
      <IonSlide>
        <IonImg src={imgSlide3} />
      </IonSlide>
    </IonSlides>
  </div>
);

export default TopHouses;
