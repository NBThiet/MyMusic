import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../components/Button';
import IconHeart from '../../../../components/IconHeart';
import IconSetting from '../../../../components/IconSetting';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import apiClient from '../../../../api/ApiSpotify';
import { useRef, useState, useEffect } from 'react';
import './TopSong.css';

function TopSong() {
    const [topSong, setTopSong] = useState();
    const ElmTopList = useRef(null);
    const [showTop, setShowTop] = useState(true);

    // // call api
    useEffect(() => {
        apiClient.get('playlists/3dm0Fz3xEyS8dbK9MIQYPt/tracks').then((response) => {
            // setCurrentTracks(response.data.items[0].tracks);
            setTopSong(response.data.items);
        });
    }, []);
    const TopTen = topSong?.slice(0, 10);
    // console.log(TopTen);
    const handleExpand = () => {
        setShowTop(!showTop);
        if (ElmTopList.current) {
            console.log(ElmTopList.current.innerHeight);
            if (showTop === true) {
                ElmTopList.current.style.height = '657px';
            } else {
                ElmTopList.current.style.height = '490px';
            }
        }
    };
    const getSongTime = (time) => {
        // Chuyển đổi thời lượng sang định dạng phút và giây
        const durationMinutes = Math.floor(time / 60000);
        const durationSeconds = ((time % 60000) / 1000).toFixed(0);
        const songTime = durationMinutes + ':' + durationSeconds;
        return songTime;
    };
    return (
        <div ref={ElmTopList} className="h-3/4 w-11/12 mt-5 pb-7 bg-topList_color relative rounded-2xl">
            <div className="flex flex-row justify-between mt-4 absolute w-11/12 ml-4">
                <span className="text-lg font-Karla text-white  ">Top Streams Real-time</span>
                <div className="flex flex-row w-1/3 relative bg-btn_Top_color justify-between items-center border-x-4 rounded-sm border-btn_Top_color">
                    <Button className="h-5 w-1/2  bg-orange_red text-sm">Local</Button>
                    <Button className="h-5 w-1/2 text-sm">Global</Button>
                </div>
            </div>
            <div className=" absolute w-11/12 ml-4 top-16  h-5/6 overflow-y-auto scroll-bar-none">
                {TopTen?.map((data, index) => (
                    <div className="flex flex-row cursor-pointer items-center mt-2" key={index}>
                        <span className="w-6  pr-1 font-Montserrat text-white text-sm">{index + 1}</span>
                        <div>
                            <div className="flex flex-row justify-between w-full ">
                                <div className="flex flex-row w-48 ">
                                    <img src={data.track.album.images[0].url} alt="" className="h-11 rounded-sm" />
                                    <div className="flex flex-col ml-1 items-center">
                                        <span className="w-full text-white font-Karla text-12">{data.track.name}</span>
                                        <span className="w-full text-10 text-white font-Montserrat">
                                            {data.track.artists[0].name}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row  items-center">
                                    <span className="text-white text-12">{getSongTime(data.track.duration_ms)}</span>
                                    <IconHeart className="ml-2" />
                                    <IconSetting className="ml-2" />
                                </div>
                            </div>
                            <hr className="w-full mt-2 right-0 border-btn_Top_color "></hr>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="absolute bg-topList_color text-white font-Montserrat text-sm bottom-1 items-center flex flex-row justify-center w-11/12 ml-4 h-6 cursor-pointer"
                onClick={handleExpand}
            >
                <span className="mr-1">Expand</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-2.5" />
            </div>
        </div>
    );
}

export default TopSong;
