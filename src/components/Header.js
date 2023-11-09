import logo from "./youtubelogo.jpg";

const HeaderComponent = () => {

  function onSignIN(){
    window.location.href = "./login";
  }

  return (
    <div className="header">
      <div className="logo">
      <div className="lines"> </div>
        <img className="logoimage" src={logo} />
      </div>
      <div className="search">
        <input type="text" className="searchInput" placeholder="Search"/>
        <button className="searchButton">Search</button>
        <div className="mic">  </div>
      </div>
      <div className="signin">
        <button className="signInButton" onClick={onSignIN}></button>
      </div>
    </div>
  );
};

export default HeaderComponent;
