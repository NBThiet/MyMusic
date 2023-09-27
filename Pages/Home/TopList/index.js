import TopSong from './TopSong';
import Category from './Category';

function TopList() {
    return (
        <div className=" w-1/3  ml-8 relative overflow-y-auto scroll-bar-none">
            <TopSong />
            <Category />
        </div>
    );
}

export default TopList;
