import Banner from './Banner';
import Search from './Search';
import Releases from './Releases';
import MayLike from './MayLike';
import RecentlyPlayed from './RecentlyPlayed';
import apiClient from '../../../api/ApiSpotify';
import { useEffect } from 'react';
import './Content.css';

function Content() {
    // useEffect(() => {
    //     apiClient.get('albums/4aawyAB9vmqN3uQ7FjRGTy').then((response) => {
    //         console.log(response.data);
    //     });
    // }, []);
    return (
        <div className="w-3/5  ml-8 relative overflow-y-auto scroll-bar-none">
            <Search />
            <Banner />
            <Releases />
            <MayLike />
            <RecentlyPlayed />
        </div>
    );
}

export default Content;
