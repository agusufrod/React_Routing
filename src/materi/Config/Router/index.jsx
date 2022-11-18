import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Styling';
import Navigation from '../../Navigation';
import Lifecycle from '../../Pages/Lifecycle';
import Komponen from '../../Pages/Komponen';
import Form from '../../Pages/Form';
// import { Route } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/komponen" element={<Komponen />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        {/* <Route path="/post" children={() => <Post />} /> */}
        {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="client">
            <Client />
          </Route>
          <Route path="contact">
            <Contact />
          </Route> */}
      </Routes>
    </div>
  );
};

export default Router;
