import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { WhatsAppContact } from "./components/Contact/WhatsAppContact";
import { Footer } from "./components/Footer/Footer";

function App() {

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div className="App">
      <NavBar language={language} handleLanguageChange={handleLanguageChange}/>
      <Banner language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <WhatsAppContact/>
    </div>
  );
}

export default App;
