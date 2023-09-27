function Sidebar({ children }) {
    return (
        <nav className="h-screen w-1/6 relative bg-bgr_menu flex border-r-2 border-btn_Top_color justify-center">
            {children}
        </nav>
    );
}

export default Sidebar;
