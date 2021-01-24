import React , {useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
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


// useEffect(() => {
//   const testFetch = async() =>{
//     const res = await fetch(`http://api.musixmatch.com/ws/1.1/track.search?q=${query}&page_size=5&page=1&s_track_rating=desc&apikey=68dff03e988544955143f0d8edaa3ad5`)
//     console.log(res)
//     const data= await res.json();
//     console.log(data.message.body.track_list)
//     setResponseArray(data.message.body.track_list)
    
   
//   }
//   testFetch();
// }, [])
