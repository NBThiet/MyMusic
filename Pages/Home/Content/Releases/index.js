import React, { useRef, useState } from 'react';
import Title from '../../../../components/Title';
import SeeBtn from '../../../../components/SeeBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import apiClient from '../../../../api/ApiSpotify';
import './Releases.css';

function Releases() {
    const [release, setRelease] = useState();
    // call api
    useEffect(() => {
        apiClient.get('browse/new-releases').then((response) => {
            // setCurrentTracks(response.data.items[0].tracks);
            setRelease(response.data.albums.items);
        });
    }, []);
    console.log(release);

    const hideScrollBarStyle = {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    };
    const containerRef = useRef();
    const containerDom = document.querySelector('#container');

    const handleScrollRight = () => {
        const container = containerRef.current;

        const scrollDistance = 127;
        if (container) {
            console.log(containerRef.current.scrollLeft + containerRef.current.clientWidth);
            container.scrollLeft += scrollDistance;
        }
    };
    const handleScrollLeft = () => {
        const container = containerRef.current;

        const scrollDistance = 127;

        if (container) {
            container.scrollLeft -= scrollDistance;
        }
    };
    return (
        <div className="relative mt-7 w-full h-40 ">
            <Title>
                New Releases{' '}
                <FontAwesomeIcon
                    icon={faPlay}
                    className="bg-orange_red text-main_color w-2 h-2 p-2 mt-0.5 ml-3 rounded-full absolute"
                />
            </Title>
            <SeeBtn className="">See more</SeeBtn>
            <div
                className="  w-full h-full mt-2 pb-3 flex flex-row  overflow-x-auto overflow-y-hidden hide-scrollbar "
                style={hideScrollBarStyle}
                id="container"
                ref={containerRef}
            >
                <FontAwesomeIcon
                    id="arrLeft"
                    icon={faArrowLeft}
                    className={`bg-white h-4 rounded-full absolute z-10 p-2 left-1 top-2/4 cursor-pointer text-main_color bg-opacity-70 
                   ${containerDom && containerDom.scrollLeft === 0 ? 'hidden' : 'block'} `}
                    onClick={handleScrollLeft}
                />
                <FontAwesomeIcon
                    id="arrRight"
                    icon={faArrowRight}
                    className={`bg-white h-4 rounded-full absolute z-10 p-2 right-1 top-2/4 cursor-pointer text-main_color bg-opacity-70 `}
                    onClick={handleScrollRight}
                />

                {release?.map((data, index) => (
                    <div
                        className="relative min-w-fit flex flex-col cursor-pointer mr-4 "
                        key={data.id}
                        id={'item'.concat(index.toString())}
                    >
                        <img src={data.images[0].url} className="h-5/6 " alt="song banner" />

                        <span className="text-10 font-Karla  mt-3 text-white">{data.name}</span>
                        {data.artists.map((artist, index) => (
                            <span key={index} className="text-8 font-Montserrat  mt-1 text-white">
                                {artist.name + ' '}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Releases;
