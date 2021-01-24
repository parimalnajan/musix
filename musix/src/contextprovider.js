import React, {useState, createContext} from 'react'

export const TrackIDContext = createContext();



export const TrackIDProvider=(props) => {
    let [trackID,setTrackID]=useState('86089601');


    return (
        <TrackIDContext.Provider value={[trackID,setTrackID]}>
            {props.children}
        </TrackIDContext.Provider>                    
    )
}
