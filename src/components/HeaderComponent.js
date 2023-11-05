// import {useState} from "react";

const Header = ()=>{


    return(
        <div className="youtube-header">
        <div className="youtube-header__logo">
          <img src="https://www.youtube.com/img/branding/youtubelogo/1x/youtubelogo.png" alt="YouTube Logo" />
        </div>
        <div className="youtube-header__search">
          <input type="text" placeholder="Search" />
          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="youtube-header__profile">
          <img src="https://via.placeholder.com/48" alt="User Profile" />
          <span>Username</span>
        </div>
      </div>
    //     <div className="nav">
    //     <div className="logo">
    //         {/* <div className="icon"></div>
    //         <div className="name">YOUTUBE</div> */}
    //     </div>
    //     <div className="search">
    //         <div className="barr">
    //             <input type='text' id="bar"></input>
    //         </div>
    //         <div className="s"></div>
    //     </div>
    //     <div className="sign"></div>
    // </div>
    );
};



export default Header;



