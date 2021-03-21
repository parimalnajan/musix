import React ,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {TrackIDContext} from '../contextprovider';

import './searchresult.css'


export default function Searchresult(props) {

    const history= useHistory();
    let [trackID,setTrackID]=useContext(TrackIDContext);

    function setIDAndRedirect(id){
        console.log(props.responseArray[1])
        setTrackID(props.responseArray[id]);      //pass entire track object instead of just ID
        
        history.push('/lyrics')             
    }

    

    return (
        <> {
            props.responseArray.map((item,index) => (
            <div id="track-wrapper" 
                onClick={()=>{
                //setIDAndRedirect(item.track.track_id)  //passes only id
                setIDAndRedirect(index)
                }}>
           
                <h4>{item.track.track_name}</h4>
                <p>Artist: {item.track.artist_name}</p>
                <p>Album: {item.track.album_name}</p>
            </div>
            ))
          }         
        </>
    )
}
