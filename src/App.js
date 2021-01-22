import React from 'react';
import { View ,Text} from 'react-native';
import Program from './components/Program';
 import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ProgramDetail from './components/ProgramDetail';

// import{
//   NativeRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-native';

const App = () => {
  return (
    <View style={{backgroundColor:'lightgreen'}} >
    <Router>
      <Switch>
      <Route path="/home">
<Program />
</Route>
      <Route path="/programDetail/:programId">
<ProgramDetail/>
     </Route>
<Route exact path="/">
<Program />
</Route>
      </Switch>
    </Router>
       
         
          
    
    </View>
  );
};

export default App;
   
      
      
   
