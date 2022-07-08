import React from 'react';
import VideoItem from './videoItem';

const ViedoList = ({ videos, onVideoSelect }) => {
  //console.log(videos);
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ViedoList;
