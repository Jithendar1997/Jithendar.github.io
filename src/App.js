import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AboutUs from './component/pages/AboutUs';
import ContactUs from './component/pages/ContactUs';
import Homepage from "./component/pages/HomePage";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import Volleyball from "./component/Games/VolleyBall";
import Badmintion from "./component/Games/Badmintion";
import Cricket from "./component/Games/Cricket";
import Carromboard from "./component/Games/CarromBoard";
import Musicalchair from "./component/Games/MusicalChair";
import Lemonspoon from "./component/Games/LemonSpoon";
import Employeelist from "./component/pages/EmployeeList";
import Organizerscontact from "./component/pages/OrganizersContact";

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <div style={{backgroundColor:'#5276cc',height:'3em'}}>
      <Navbar />
      </div>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/EmployeeList" component={Employeelist} />
          <Route exact path="/OrganizersContact" component={Organizerscontact} />
          <Route exact path="/sports/VolleyBall" component={Volleyball} />
          <Route exact path="/sports/Cricket" component={Cricket} />
          <Route exact path="/sports/CarromBoard" component={Carromboard} />
          <Route exact path="/sports/MusicalChair" component={Musicalchair} />
          <Route exact path="/sports/Badmintion" component={Badmintion} />
          <Route exact path="/sports/LemonSpoon" component={Lemonspoon} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
