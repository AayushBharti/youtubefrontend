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
          <div className="sidebarItem">Home</div>
          <div className="sidebarItem">Channels</div>
          <div className="sidebarItem">Videos</div>
          <div className="sidebarItem">Liked Videos</div>
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
