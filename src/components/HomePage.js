
import './HomePage.css';
// import VideoComponent from './VideoComponent';
import VideoComponent from './VideoComponent';
import HeaderComponent from './HeaderComponent'

const HomePage = () => {
    return <div>
    
    <div className="wrapper">
       <HeaderComponent></HeaderComponent>
        <div className="body">
            <div className="youtube-sidebar">
                <div className="youtube-sidebar__section">
                    <h2>Navigation</h2>
                    <ul>
                    <li>Home</li>
                    <li>Trending</li>
                    <li>Subscriptions</li>
                    </ul>
                </div>
                <div className="youtube-sidebar__section">
                    <h2>Library</h2>
                    <ul>
                    <li>History</li>
                    <li>Watch later</li>
                    <li>Liked videos</li>
                    </ul>
                </div>
            </div>
            <div className="main">
                
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>
                   <VideoComponent></VideoComponent>


            </div>
        </div>
    </div>
</div>
    
    
    
    
  
};

export default HomePage;