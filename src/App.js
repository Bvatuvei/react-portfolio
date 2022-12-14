import React, { useState } from "react";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'A list of a majority of my projects that I have made and participated in so far.',
    },
    { name: 'resume', description: 'My resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          {currentCategory.name === 'resume' ? <Resume /> : <Project currentCategory={currentCategory} /> }
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
          )}
          <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
