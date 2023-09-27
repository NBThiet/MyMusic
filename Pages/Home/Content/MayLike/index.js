import Title from '../../../../components/Title';
import SeeBtn from '../../../../components/SeeBtn';
import { useState, useEffect } from 'react';
import apiClient from '../../../../api/ApiSpotify';

function MayLike() {
    const [topArtist, setTopArtist] = useState();
    // // call api
    useEffect(() => {
        apiClient.get('playlists/37i9dQZF1E39ayhf3TBEak/tracks').then((response) => {
            // setCurrentTracks(response.data.items[0].tracks);
            setTopArtist(response.data.items);
        });
    }, []);
    const artistMaybeLike = topArtist?.slice(0, 7);
    // console.log(artistMaybeLike);

    return (
        <div className="relative w-full mt-14 ">
            <Title>You May Like </Title>
            <SeeBtn className="">See more</SeeBtn>
            <div className="flex flex-row justify-between">
                {/* {artistMaybeLike.track.artists[0].map((data, index) => (
                    <div key={index} className="w-17  mt-3 ">
                        <div className="h-16 text-center w-16 bg-white pt-0.5 pl-0.5 rounded-full border-2  bg-gradient-to-br from-orange_red via-red-600 to-orange-600">
                            <img
                                src={data.image}
                                alt="avatar"
                                className=" h-14 w-auto  rounded-full border-2 border-white"
                            />
                        </div>

                        <span className="text-center text-xs text-slate-50 font-Cabin">{data.name}</span>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default MayLike;
