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
      <div className="App">
        <Layout>
          <TrackIDProvider>
            <Switch>
              <Route exact path="/"><Search/></Route>
              <Route exact path="/lyrics"><Lyrics/></Route>
            </Switch>
          </TrackIDProvider>
        </Layout>
      </div>
    </Router>
  );
}

export default App;


