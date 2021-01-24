import React, { useEffect, useState, useContext } from 'react'
import  { TrackIDContext } from '../contextprovider';
import {useHistory} from 'react-router-dom'
import './lyrics.css'

export default function Lyrics(props) {

    let [trackID]=useContext(TrackIDContext);
    let ID= trackID.track.track_id
    let [lyrics,setLyrics]=useState('Lyrics Will be displayed here, please wait...')
    const history= useHistory();

    useEffect(()=>{
        async function getLyrics(){
        const res = await fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ID}&apikey=68dff03e988544955143f0d8edaa3ad5`)
        const data= await res.json();
        setLyrics(data.message.body.lyrics.lyrics_body)
        }     
        getLyrics();
    })

    const redirectToSearch=()=>{
        history.push('/')  
    }
  

    return (<>  
        <button onClick={redirectToSearch}>Search for More Lyrics</button>
        <div className="lyrics-wrapper">
           <h4>Lyrics</h4>
               <p><strong>{trackID.track.track_name}</strong></p>
           <div>
               <span><strong>Artist: </strong>{trackID.track.artist_name}</span>
               <br/>
               <span><strong>Album: </strong>{trackID.track.album_name}</span>
           </div>
           <br/>
           <br/>
           <pre>{lyrics}</pre>              
        </div>
     
   </> )
}
