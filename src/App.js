import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import {Fragment} from 'react';
import Ticket from './pages/Ticket/Ticket'
import Sidebar from './containers/Sidebar/Sidebar'
import Ideas from './pages/Ideas/Ideas';

import Second from './pages/Second/Second'


import '../src/assests/styles/main.scss'


function App() {
  return (
   <Router>
     <div className="App">


      <Sidebar/>



      <div className="content">
        


        
        <Switch>
          <Route path="/Ticket" component={Ticket}/>
            
         
          <Route path="/Second" component={Second}/>

          <Route path="/Ideas" component={Ideas}/>
          
        </Switch>

        <Second/>
      </div>

   </div>
   </Router>
  );
}

export default App;
