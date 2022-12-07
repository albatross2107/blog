import "./sidebar.css";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebartitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1616445403956-c66a6b11e3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebartitle">CATEGORIES</span>
           
           <ul className="sidebarList">
           <li className="sidebarListItem">Life</li>
           <li className="sidebarListItem">Music</li>
           <li className="sidebarListItem">Style</li>
           <li className="sidebarListItem">Sport</li>
           <li className="sidebarListItem">Tech</li>
           <li className="sidebarListItem">Cinema</li>
           </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sideBarIcon fa-brands fa-facebook"></i>
                <i className="sideBarIcon fa-brands fa-twitter"></i>
                <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                <i className="sideBarIcon fa-brands fa-pinterest"></i>
            </div>
            </div>
        </div>

    )
}