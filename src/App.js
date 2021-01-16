import React from 'react';
import { View ,Text} from 'react-native';
import Program from './components/Program';
//  import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
import{
  NativeRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-native';

const App = () => {
  return (
    <View>
    <NativeRouter>
      <Switch>
<Route path="/">
<Program/>
</Route>
      </Switch>
    </NativeRouter>
       
         
          
    
    </View>
  );
};

export default App;
   
      
      
   
