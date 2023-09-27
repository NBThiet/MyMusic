import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCirclePause,
    faCirclePlay,
    faForwardStep,
    faBackwardStep,
    faShuffle,
    faRepeat,
    faVolumeHigh,
    faSliders,
} from '@fortawesome/free-solid-svg-icons';
import IconHeart from '../../../components/IconHeart';
import IconSetting from '../../../components/IconSetting';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Song from '../../../components/Song';
// import SpotifyPlayer from 'react-spotify-web-playback';

function PlaySongLayOut() {
    // const token = useSelector((state) => state.getToken);
    const SongPlaying = useSelector((state) => state.songData);
    const [showPlay, setShowPlay] = useState(false);
    const [icon, setIcon] = useState(faCirclePause);
    // const uris = ['spotify:track:59u8Iu6cAugFqtA1avGFRT'];

    // console.log(SongPlaying);
    useEffect(() => {
        showPlay ? setIcon(faCirclePlay) : setIcon(faCirclePause);
    }, [showPlay]);
    return (
        <div
            className={`flex flex-row bg-bgr_menu w-full h-16 absolute z-20 bottom-0 border-t-2 border-btn_Top_color ${
                SongPlaying ? '' : 'hidden'
            } `}
        >
            {/* <SpotifyPlayer token={token} uris={uris} autoPlay={true} /> */}
            <div className="flex flex-row w-1/6 justify-end text-white items-center h-full ">
                <FontAwesomeIcon icon={faShuffle} className="h-5 ml-5" />
                <FontAwesomeIcon icon={faBackwardStep} className="h-5 ml-5" />
                <FontAwesomeIcon icon={icon} className="h-7 ml-5" onClick={() => setShowPlay(!showPlay)} />
                <FontAwesomeIcon icon={faForwardStep} className="h-5 ml-5" />
                <FontAwesomeIcon icon={faRepeat} className="h-5 ml-5" />
            </div>
            <div className=" w-3/5 flex flex-row items-center justify-center h-full border-r-2 border-btn_Top_color">
                <img src="" alt="" className="h-11 mr-2 rounded-sm " />
                <div className="flex flex-col w-3/4 ml-10  h-full">
                    <div className="flex flex-row justify-center items-center align-middle h-1/2 text-white">
                        <span className="font-Karla text-lg mr-2">{SongPlaying ? SongPlaying.name : ''} </span>
                        <span className="  text-3xl mb-5"> . </span>
                        <div>
                            {SongPlaying?.artists.map((artist, index) => (
                                <span key={index} className="font-Montserrat text-sm ml-2">
                                    {' '}
                                    {SongPlaying ? artist.name : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row w-full  justify-between items-center text-white font-Montserrat text-xs">
                        <span className="">00:00</span>
                        <div className="w-10/12 h-1 bg-white rounded-sm"></div>
                        <span className="">{SongPlaying ? SongPlaying.time : ''}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center text-white w-3/12 ">
                <FontAwesomeIcon icon={faSliders} className="ml-5 h-5" />
                <IconHeart className="ml-5 h-5" />
                <IconSetting className="ml-5 h-5" />
                <FontAwesomeIcon icon={faVolumeHigh} className="ml-5 h-5" />
            </div>
        </div>
    );
}

export default PlaySongLayOut;
