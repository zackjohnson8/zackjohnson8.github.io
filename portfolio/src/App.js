import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
}

export default App;
