import { Link } from "react-router-dom";
function VideoPreviewComponent(props) {
  const title = props.title;
  const description = props.description;
  const url = props.url;
  const views = props.views;
  const channel = props.channel;
  const uploadedAt = props.uploadedAt;
  const id = props.id;
  return (
    <div className="video">
      <div className="thumbnail">
        <Link to={"/video/" + id}>
          <img alt="thumbnail" src={url} className="thumbnailImage" />
        </Link>
      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img
            alt="channelImage"
            src={
              "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
            }
            className="channelImage"
          />
        </div>
        <div className="title">
          {title}
          <div className="channel">{channel}</div>
          <div className="views">
            {views} Views . {uploadedAt}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPreviewComponent;
