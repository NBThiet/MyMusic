import Title from '../../../../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Song from '../../../../components/Song';
import { useState, useEffect } from 'react';
import apiClient from '../../../../api/ApiSpotify';

function RecentlyPlayed() {
    const [recentlySong, setRecentlySong] = useState();
    const testPlaylist = {
        name: 'hummm',
        id: 'hhh',
    };

    useEffect(() => {
        apiClient
            .post('users/smedjan/playlists', testPlaylist)
            .then((response) => {
                setRecentlySong(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="mt-10 pb-20 ">
            <Title>
                Recently Played{' '}
                <FontAwesomeIcon
                    icon={faPause}
                    className="bg-orange_red text-main_color w-2 h-2 p-2 mt-0.5 ml-3 rounded-full absolute"
                />
            </Title>
            <div className="mt-4">
                {/* {data.map((data, index) => (
                    <Song
                        key={index}
                        data={data}
                        handleClick={() => {
                            setPlaySong(data.id);
                        }}
                        clickSong={playSong}
                    />
                ))} */}
            </div>
        </div>
    );
}

export default RecentlyPlayed;
