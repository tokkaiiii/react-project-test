import React from 'react';
import SimpleLayout from "../../layouts/SimpleLayout.jsx";
import {Outlet} from "react-router-dom";

function IndexPage(props) {
  return (
      <SimpleLayout>
        <div>
          보드 인덱스
        </div>
        <div>
          <Outlet/>
        </div>

      </SimpleLayout>
  );
}

export default IndexPage;