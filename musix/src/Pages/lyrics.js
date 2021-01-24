import React, { useEffect, useState, useContext } from 'react'
import  { TrackIDContext } from '../contextprovider';
import {useHistory} from 'react-router-dom'


export default function Lyrics(props) {

    let [trackID,setTrackID]=useContext(TrackIDContext);
    let ID= trackID.track.track_id
    let [lyrics,setLyrics]=useState('Lyrics Will be displayed here, please wait...')
    const history= useHistory();

    useEffect(()=>{
        async function lyric(){
        const res = await fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ID}&apikey=68dff03e988544955143f0d8edaa3ad5`)
        const data= await res.json();
        setLyrics(data.message.body.lyrics.lyrics_body)
        }     
        lyric();
    })

    const redirectToSearch=()=>{
        history.push('/')  
    }
  

    return (<>  
        <button onClick={redirectToSearch}>Search for More Lyrics</button>
        <div className="lyrics-wrapper">
           <h4>Lyrics:{trackID.track.track_name}</h4>
           <p>
               <span>Artist:{trackID.track.artist_name}</span>
               <br/>
               <span>Album:{trackID.track.album_name}</span>
           </p>
           <br/>
           <br/>
           <pre>{lyrics}</pre>              
        </div>
     
   </> )
}
