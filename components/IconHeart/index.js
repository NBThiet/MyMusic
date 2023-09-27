import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function IconHeart({ ...prop }) {
    const styleItem = prop.className;
    const style = '  cursor-pointer   '.concat(styleItem);
    const [heart, setHeart] = useState(true);
    const [showHeart, setShowHeart] = useState(solidHeart);

    useEffect(() => {
        heart ? setShowHeart(regularHeart) : setShowHeart(solidHeart);
    }, [heart]);

    return (
        <FontAwesomeIcon
            icon={showHeart}
            onClick={() => setHeart(!heart)}
            className={heart ? style.concat(' text-slate-300 ') : style.concat(' text-rose-600 ')}
        />
    );
}

export default IconHeart;
