import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListOfTeachers from './Components/ListOfTeachers'
import GiveData from './Components/GiveData'
import firebase from 'firebase'
import Admin from './Components/Admin';
import FormTable from './Components/FormTable';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ListOfTeachers}/>
          <Route path="/GiveData/:slug" component={GiveData}/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/FormTable" component={FormTable}/>
        </Switch>
      </div>
    </Router>
  );
}

export const firebaseConfig = {
  apiKey: "AIzaSyA-Vy9rzDxTsaMO-wNJ-c9-c6_2XgoYNSI",
  authDomain: "subjectallocation-preferences.firebaseapp.com",
  databaseURL: "https://subjectallocation-preferences.firebaseio.com",
  projectId: "subjectallocation-preferences",
  storageBucket: "subjectallocation-preferences.appspot.com",
  messagingSenderId: "1081381645382",
  appId: "1:1081381645382:web:949f5d3a6527bd2c626e47",
  measurementId: "G-29TWZE28YE"
}

export const fbref = firebase.initializeApp(firebaseConfig)

export default App;
