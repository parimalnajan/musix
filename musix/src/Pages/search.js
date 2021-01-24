import React, {useState,useEffect,useContext} from 'react';

import Searchresult from '../Components/searchresult';
import './search.css';



export default function Search(props) {

    let [query,Setquery]=useState();
    let [responseArray,setResponseArray]=useState([]); 

    
    const testFetch = async() =>{
        const res = await fetch(`http://api.musixmatch.com/ws/1.1/track.search?q=${query}&page_size=5&page=1&s_track_rating=desc&apikey=68dff03e988544955143f0d8edaa3ad5`)
        const data= await res.json();            
        setResponseArray(data.message.body.track_list)                
    }  

    const inputChangeHandler = (event) =>{
        Setquery(event.target.value)
        //clear results if box empty
        event.target.value||setResponseArray([]);
    }

    useEffect(() =>{  
    //call api only if no input recorded for 300ms
    let efficientTimeout = setTimeout(()=>{
        //only render if text present
        query && testFetch()
    },300);  
    return () => clearTimeout(efficientTimeout);   
    },[query])


    return (
    <div className="App">        

    
    <h4>Find lyrics of any song </h4>
    <input className="search-box" onChange={(event)=>{inputChangeHandler(event)}} placeholder=" Start typing"></input>
    <Searchresult responseArray={responseArray}/>
    </div>
    );
}




