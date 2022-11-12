import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music Recs</li>
          <li className="sidebarListItem">Fits</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Movie/Shows</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">REDIRECTS/SOCIALS</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-youtube"></i>
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
          <i className="sidebarIcon fa-brands fa-discord"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}
