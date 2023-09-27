import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function IconSetting({ ...prop }) {
    const styleItem = prop.className;
    const style = 'text-slate-300 cursor-pointer  ';
    return <FontAwesomeIcon icon={faEllipsis} className={style.concat(styleItem)} />;
}

export default IconSetting;
