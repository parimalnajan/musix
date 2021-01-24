import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {TrackIDProvider} from './contextprovider'
import Search from './Pages/search';
import Layout from './Components/layout'
import Lyrics from './Pages/lyrics';
import './App.css'



function App() {

  return (
    <Router>
      <Layout>
        <div className="App">
          <TrackIDProvider>
            <Switch>
              <Route exact path="/"><Search/></Route>
              <Route exact path="/lyrics"><Lyrics/></Route>
            </Switch>
          </TrackIDProvider>          
        </div>
      </Layout>
    </Router>
  );
}

export default App;


