import React from 'react';
import SimpleMenu from "../components/menus/SimpleMenu.jsx";

function SimpleLayout({children}) {
  return (
      <>
        <SimpleMenu/>
        <main>
          {children}
        </main>
      </>
  );
}

export default SimpleLayout;