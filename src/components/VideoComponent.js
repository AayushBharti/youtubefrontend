import { useParams } from "react-router-dom";
import HeaderComponent from "./Header";
import SuggestedVideo from "./SuggestedVideo";
import "./VideoComponent.css";
import videos from "./videos.json";
import { useState } from "react";

const VideoPage = () => {
  const params = useParams();
  const id = params.id;
  function finderFunction(video) {
    return video.id == id;
  }

  const [like, setLikes] = useState(100);

  function onLiked() {
    setLikes(like + 1);
  }

  const video = videos.find(finderFunction);
  return (
    <div className="wrapper-video">
      <HeaderComponent />
      <div className="main-video">
        <div className="videoWrapper">
          <iframe
            src={
              "https://www.youtube.com/embed/" + id + "?rel=0&mute=1&autoplay=1"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
          <div className="title-video">{video.title}</div>
          <div className="channelWrapper">
            <div className="channel-video">
              <img
                src={
                  "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
              <div className="channelInfo">
                <div>{video.channel}</div>
                <div>2.3M Subscribers</div>
              </div>
              <button className="channelButton">Subscribe</button>
            </div>
            <div className="likesWrappper">
              <button className="channelButtonLite" onClick={onLiked}>
                {like} Likes
              </button>
              <button className="channelButtonLite">Dislike</button>
              <button className="channelButtonLite">Share</button>
            </div>
          </div>
          <div className="description">This is description</div>
        </div>
        <div className="suggestions">
          {videos.map((video) => {
            return (
              <SuggestedVideo
                title={video.title}
                description={video.description}
                url={video.thumbnail.url}
                views={video.views}
                channel={video.channelName}
                uploadedAt={video.uploadedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
