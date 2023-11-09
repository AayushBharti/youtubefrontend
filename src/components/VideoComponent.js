import { useParams } from "react-router-dom";
import HeaderComponent from "./Header";
import SuggestedVideo from "./SuggestedVideo";
import "./VideoComponent.css";
import videos from "./videos.json";
import { useState } from "react";
import chlogo from "./a.png"

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
                src={chlogo}
                className="channelImage"
              />
              <div className="channelInfo">
                <div>{video.channel}</div>
                <div>10M Subscribers</div>
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
          <div className="description">This is description <br/>  <br/>  <br/>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec. Sit amet facilisis magna etiam tempor. Feugiat nisl pretium fusce id velit. Arcu risus quis varius quam quisque id. Gravida quis blandit turpis cursus. Dui ut ornare lectus sit. Urna condimentum mattis pellentesque id. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Augue lacus viverra vitae congue eu consequat ac felis donec. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.

Augue eget arcu dictum varius duis at consectetur lorem donec. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Lacinia quis vel eros donec ac odio tempor orci. Quis risus sed vulputate odio. Pulvinar elementum integer enim neque volutpat ac. Pellentesque elit eget gravida cum sociis natoque penatibus et. Erat imperdiet sed euismod nisi porta lorem mollis. Aenean pharetra magna ac placerat vestibulum. Maecenas ultricies mi eget mauris pharetra et ultrices. Neque ornare aenean euismod elementum nisi quis eleifend quam. Sit amet consectetur adipiscing elit ut aliquam. At auctor urna nunc id. Dui vivamus arcu felis bibendum ut tristique et egestas. Venenatis tellus in metus vulputate eu. Rutrum quisque non tellus orci ac auctor augue.

Neque ornare aenean euismod elementum nisi quis. <br/>  Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. A scelerisque purus semper eget. At auctor urna nunc id. Etiam tempor orci eu lobortis. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin. At urna condimentum mattis pellentesque id. Eu consequat ac felis donec et odio. Nunc scelerisque viverra mauris in. Quam lacus suspendisse faucibus interdum.

Sapien pellentesque habitant morbi tristique. <br/>  Luctus accumsan tortor posuere ac ut consequat semper. Vitae sapien pellentesque habitant morbi tristique. Sed vulputate mi sit amet mauris. Cras fermentum odio eu feugiat pretium. Mattis rhoncus urna neque viverra justo. At risus viverra adipiscing at in tellus. Sed id semper risus in. Risus in hendrerit gravida rutrum quisque. Lectus sit amet est placerat in egestas. Dictum non consectetur a erat. Vitae semper quis lectus nulla at. Enim praesent elementum facilisis leo vel fringilla.

Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Massa massa ultricies mi quis hendrerit dolor. Et ligula ullamcorper malesuada proin libero. Nunc vel risus commodo viverra maecenas accumsan lacus. Turpis egestas sed tempus urna et pharetra pharetra. Facilisis magna etiam tempor orci. Non tellus orci ac auctor augue mauris augue neque. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Eu nisl nunc mi ipsum. Augue eget arcu dictum varius. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. In vitae turpis massa sed elementum tempus egestas sed. In hendrerit gravida rutrum quisque non tellus orci. Donec enim diam vulputate ut. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
          </div>
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
