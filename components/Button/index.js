function Button({ children, ...prop }) {
    const styleItem = prop.className;
    const style = ' text-white rounded  cursor-pointer text-center  font-Cabin ';

    return <div className={style.concat(styleItem)}>{children}</div>;
}

export default Button;
