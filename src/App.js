import Router from './materi/Config/Router';
import { BrowserRouter } from 'react-router-dom';
// import Lifecycle from './materi/Config/Router/pages/Lifecycle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
