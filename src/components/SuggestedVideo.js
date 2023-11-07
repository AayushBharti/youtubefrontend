function SuggestedVideo(props) {
  const title = props.title;
  const description = props.description;
  const url = props.url;
  const views = props.views;
  const channel = props.channel;
  const uploadedAt = props.uploadedAt;
  return (
    <>
      <div className="suggested-video">
        <div className="suggestion-image">
          <img src={url} width={"230px"} />
        </div>
        <div className="suggestion-content">
          <div class="video-info">
            <p class="video-sug-title">{title}</p>
            <p class="margin-0 smaller-fontsize">{channel}</p>
            <p class="margin-0 smaller-fontsize">
              {views} views . {uploadedAt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuggestedVideo;
