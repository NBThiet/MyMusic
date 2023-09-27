import React, { useEffect, useState } from 'react';
import apiClient from '../../api/ApiSpotify';
import { useLocation } from 'react-router-dom';
import Song from '../../components/Song';
import '../Home/Content/Content.css';
function Library() {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTracks, setCurrentTracks] = useState({});
    const [indexTracks, setIndexTracks] = useState(0);
    const [playSong, setPlaySong] = useState();

    // playlists/' + location.state?.id + '/tracks
    useEffect(() => {
        apiClient.get('playlists/37i9dQZF1E4s2rxfOKtG1a/tracks').then((response) => {
            // setCurrentTracks(response.data.items[0].tracks);
            setTracks(response.data.items);
        });
    }, []);

    // console.log(tracks);

    return (
        <div className="overflow-y-auto h-screen scroll-bar-none">
            <div className=" ">
                {tracks?.map((track, index) => (
                    <Song
                        list={index}
                        key={index}
                        data={track.track}
                        handleClick={() => {
                            setPlaySong(track.track.id);
                        }}
                        clickSong={playSong}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
