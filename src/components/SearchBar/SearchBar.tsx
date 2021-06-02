import { IonSearchbar, IonToolbar } from "@ionic/react";
import { useState } from "react";

import "./SearchBar.scss";

interface ContainerProps {}

const SearchBar: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <IonToolbar color="primary">
        <h3>Find Residencies</h3>
      </IonToolbar>
      <IonToolbar color="primary">
        <IonSearchbar
          mode="md"
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
      </IonToolbar>
    </>
  );
};

export default SearchBar;
