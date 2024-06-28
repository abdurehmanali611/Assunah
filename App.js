import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Constants/Home";
import AboutUs from "./Constants/AboutUs";
import Contacts from "./Constants/Contacts";
import Qiratcenter from "./Constants/Qiratcenter";
import AdminPage from "./Additional/AdminPage";
import Uploading from "./Additional/Uploading";
import Adhan from "./Additional/Adhan";
import Quran from "./Additional/Quran";
import QuranSurahs from "./Additional/QuranSurahs";
import { AppRegistry } from "react-native";
import { name as Assunah } from "./app.json"

const stack = createStackNavigator();

const App = () => {

  AppRegistry.registerComponent(Assunah, () => App)

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" >
         <stack.Screen name="Home" component={Home} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Qirat" component={Qiratcenter} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="About" component={AboutUs} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Contact" component={Contacts} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="admin" component={AdminPage} options={{title: 'Assunah TV'}} />
         <stack.Screen name="upload" component={Uploading} options={{title: 'Assunah TV'}} />
         <stack.Screen name="adhan" component={Adhan} options={{title: 'Assunah TV'}} />
         <stack.Screen name="quran" component={Quran} options={{title: 'Assunah TV'}} />
         <stack.Screen name="surah" component={QuranSurahs} options={{title: 'Assunah TV'}} />
       </stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;