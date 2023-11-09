import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import HeaderComponent from "./Header";
import videos from "./videos.json";

function HomeComponent() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">


        <div className="sidebar">
          <div className="home"></div>
          {/* <div className="sidebarItem">Shorts</div>
          <div className="sidebarItem">Subscriptions</div> */}
          <div className="empty" >  </div>
          <div className="you"></div>
          <div className="empty"></div>

          <div className="subs"></div>
          
          <div className="empty"></div>



          <div className="sidebarItem" id="aayush">Made with ❤️ <br/> by Aayush Bharti</div>
          {/* <div className="sidebarItem">Liked Videos</div>
          <div className="sidebarItem">Liked Videos</div> */}
        </div>
          

        <div className="videos">
          {videos.map(function (video) {
            return (
              <VideoPreviewComponent
                title={video.title}
                description={video.description}
                url={video.thumbnail.url}
                views={video.views}
                channel={video.channelName}
                uploadedAt={video.uploadedAt}
                id={video.id}
              />
            );
          })}
          <VideoPreviewComponent title="This is first video 1" />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
