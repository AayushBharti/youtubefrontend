import logo from "./youtubelogo.jpg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logoimage" src={logo} />
      </div>
      <div className="search">
        <input type="text" className="searchInput" />
        <button className="searchButton">Search</button>
      </div>
      <div className="signin">
        <button className="signInButton">SignIn</button>
      </div>
    </div>
  );
};

export default HeaderComponent;
