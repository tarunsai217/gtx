import './App.css';
import {Provider} from "react-redux"
import store from "./redux/store"
import {BrowserRouter as Router,Routes as Switch,Route} from "react-router-dom" 
import Home from "./pages/Home/Home"
import ResidentList from "./pages/Residentlist/ResidentList"



function App() {
  return <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/" element={<Home/>}/>  
      <Route path="/:propertyname"  element={<ResidentList/>}/>  
    </Switch>
    </Router>
    </Provider>
}

export default App;
