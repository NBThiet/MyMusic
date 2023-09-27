import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeadphones, faHeart, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import routes from '../../../config/routes';
import { useState } from 'react';

const data = [
    {
        id: 1,
        title: 'Home',
        icon: faHome,
        to: routes.home,
    },
    {
        id: 2,
        title: 'Browse',
        icon: faWindowRestore,
        to: routes.browse,
    },
    {
        id: 3,
        title: 'Favorite',
        icon: faHeart,
        to: routes.favorite,
    },
    {
        id: 4,
        title: 'Library',
        icon: faHeadphones,
        to: routes.library,
    },
];

function Menu() {
    const [type, setType] = useState(1);
    // const [showPage, setShowPage] = useState([]);

    // useEffect(() => {
    //     setShowPage(data[type]);
    //     console.log(data[type]);
    // }, [type]);
    return (
        <div className="w-4/5 h-28 absolute top-28 ">
            {data.map((data, index) => {
                return (
                    <NavLink
                        to={data.to}
                        key={index}
                        className={
                            type === data.id
                                ? ' h-9 pt-1.5 w-full mt-3 bg-orange_red text-white  rounded-md text-center flex flex-row '
                                : ' h-9 pt-1.5 w-full mt-3  text-white  rounded-md text-center flex flex-row cursor-pointer'
                        }
                        onClick={() => setType(data.id)}
                    >
                        <FontAwesomeIcon icon={data.icon} className="ml-2 pt-1 " />
                        <h3 className="text-base ml-2 font-Cabin">{data.title}</h3>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Menu;
