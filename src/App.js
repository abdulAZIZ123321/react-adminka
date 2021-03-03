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
import Overwiev from './pages/Owerview/Overwiev'


import '../src/assests/styles/main.scss'


function App() {
  return (
   <Router>
     <div className="App">


      <Sidebar/>



      <div className="content">
        


        
        <Switch>
          <Route path="/Ticket" component={Ticket}/>
            
         
          <Route path="/Overwiev" component={Overwiev}/>

          <Route path="/Ideas" component={Ideas}/>
          
        </Switch>
      </div>

   </div>
   </Router>
  );
}

export default App;
