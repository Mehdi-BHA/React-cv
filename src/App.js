import Header from './components/Header';
import Knowledges from './components/Knowledges';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Knowledges></Knowledges>
      <div className="seperator"></div>
      <Experience></Experience>
      <div className="seperator"></div>
      <Portfolio></Portfolio>
      <div className="seperator"></div>
      <Contact></Contact>

    </div>
  );
}

export default App;
