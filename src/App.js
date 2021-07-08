import './App.scss';
import Header from './components/Header'
import Main from './components/Main'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
      <Header />
      <Main anchorId="tabs" />
      <Tabs anchorId="tabs" />
    </div>
  );
}

export default App;
