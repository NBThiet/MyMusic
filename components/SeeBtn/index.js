function SeeBtn({ children, ...prop }) {
    const style = 'text-orange_red text-base absolute right-0 font-Cabin cursor-pointer ';
    return <span className={style.concat(...prop.className)}>{children}</span>;
}

export default SeeBtn;
