import React from "react";
import Create from './content/Create';
import Header from "./header/Header";
import Notes from "./content/Notes";
import Footer from "./footer/Footer";

function App() {
   return (
      <div>
         <Header />
         <Create />
         <Notes />
         <Footer />
      </div>
   );
}

export default App;
