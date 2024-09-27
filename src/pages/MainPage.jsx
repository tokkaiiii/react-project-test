import React from 'react';
import SimpleLayout from "../layouts/SimpleLayout.jsx";
import MainComponent from "../components/main/MainComponent.jsx";

function MainPage(props) {
  return (
      <SimpleLayout>
        <MainComponent/>
      </SimpleLayout>
  );
}

export default MainPage;