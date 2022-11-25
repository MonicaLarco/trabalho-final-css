import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content layout">
        <Home />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
