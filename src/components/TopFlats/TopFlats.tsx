import React from "react";
import {
  IonSlides,
  IonSlide,
  IonImg,
  IonNote,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./TopFlats.scss";

import imgSlide1 from "../../assets/img/Flats1.png";
import imgSlide2 from "../../assets/img/Flats2.png";
import imgSlide3 from "../../assets/img/Flats3.png";

const slideOpts = {
  initialSlide: 0,
  spaceBetween: 20,
  slidesPerView: 2.5,
};

const TopFlats: React.FC = () => (
  <div className="recommended-slides">
    <IonItem>
      <IonLabel>Top Flats</IonLabel>
      <a href="/Flats">
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

export default TopFlats;
