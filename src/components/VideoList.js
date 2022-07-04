import VideoItem from "./VideoItem";

const VideoList = (props) => {
    return props.videos.map((video) => {
        return(
            <div key={video.id.videoId} className='ui list'>
                <VideoItem video={video} preview={props.preview} />
            </div>
        );
    }); 
}

export default VideoList;