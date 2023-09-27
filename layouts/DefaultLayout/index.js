import Menu from '../Components/Menu';
import Sidebar from '../Components/SideBar';
import PlaySongLayOut from '../Components/PlaySongLayOut';
import { useState } from 'react';
import Page from '../../Pages';
function DefaultLayout({ children }) {
    const [playSong, showPlaySong] = useState();

    return (
        <div className="flex flex-row bg-main_color">
            <Sidebar>
                <Menu />
            </Sidebar>
            <Page>{children}</Page>
            <PlaySongLayOut />
        </div>
    );
}

export default DefaultLayout;
