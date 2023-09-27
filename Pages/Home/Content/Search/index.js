import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
        <div className="z-10 w-2/4 absolute top-8 h-7 pt-0.5 bg-white bg-opacity-90 rounded-sm left-1/4">
            <FontAwesomeIcon icon={faSearch} className="absolute left-2 mt-1 text-slate-800" />
            <input
                type="text"
                placeholder="Search songs, album,..."
                className=" w-5/6 h-6 absolute left-8 focus:outline-none resize-x bg-transparent font-Molengo"
            />
            <div className=" absolute w-0.5 bg-slate-600 top-1 h-5 right-7"></div>
            <FontAwesomeIcon icon={faMicrophone} className="absolute right-2 mt-1 text-slate-800 " />
        </div>
    );
}

export default Search;
