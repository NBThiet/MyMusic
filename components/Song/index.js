import IconHeart from '../IconHeart';
import { faBars, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../../redux2/actions';
function Song({ ...props }) {
    const SongStyle = 'flex flex-row w-full   justify-between items-center h-12  mb-2 text-sm  ';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dispatch = useDispatch();
    const token = useSelector((state) => state.getToken);

    //get token
    // useEffect(() => {
    //     console.log(typeof token);
    // });
    // handle click song
    useEffect(() => {
        document.cookie = 'myCookie=myValue; SameSite=Lax';
        if (props.clickSong === props.data.id) {
            dispatch(playSong(props.data));
        }
    }, [dispatch, props.clickSong, props.data]);
    // console.log(props.list);
    return (
        <div
            key={props.list}
            className={
                props.clickSong === props.data.id
                    ? SongStyle.concat('font-Karla text-orange_red')
                    : SongStyle.concat('font-Montserrat text-slate-400 cursor-pointer')
            }
            onClick={props.handleClick}
        >
            {/* the song */}
            <div className="flex flex-row w-1/3  items-center ">
                {props.clickSong === props.data.id ? (
                    <FontAwesomeIcon
                        icon={faPause}
                        className=" p-0.5 mr-1.5  ml-1.5 w-3 border-orange_red rounded-full border-2"
                    />
                ) : (
                    <span className="mr-2  ml-2 w-4">{props.list + 1}</span>
                )}
                <img src={props.data.album.images[0].url} alt="singer avatar" className="h-11 mr-2 rounded-sm" />
                <span className="font-Karla">{props.data.name}</span>
            </div>
            <div className=" w-1/5">
                {props.data.artists.map((artist, index) => (
                    <span key={index} className=" mr-2 ">
                        {artist.name}
                    </span>
                ))}
            </div>

            <span className="w-1/5 ">{props.data.album.name}</span>
            <div className="w-1/6  flex flex-row justify-between">
                <span>{props.data.time}</span>
                <IconHeart className="h-5" />
                <FontAwesomeIcon icon={faBars} className="" />
            </div>
        </div>
    );
}

export default Song;
