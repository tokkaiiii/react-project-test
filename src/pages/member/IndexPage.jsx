import React from 'react';
import {Outlet} from "react-router-dom";
import SimpleLayout from "../../layouts/SimpleLayout.jsx";

function IndexPage(props) {
  return (
      <SimpleLayout>
        <div>
          멤버 인덱스 페이지
        </div>
        <Outlet/>
      </SimpleLayout>
  );
}

export default IndexPage;