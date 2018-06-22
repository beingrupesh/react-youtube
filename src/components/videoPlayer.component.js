import React, { Component } from 'react';

class VideoPlayer extends Component {
    render() {

        if (!this.props.video) {
            return (
                <div className="embed-responsive embed-responsive-16by9">
                    <h1>LOADING....</h1>
                </div>
            )
        }

        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        const title = this.props.video.snippet.title;

        return (
            <div className="col col-md-6 offset-md-1">

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className='embed-responsive-item' src={url}>
                    </iframe>
                </div>

                <p className='video-card-title'>
                    {title}
                </p>

            </div>
        )
    }
}

export default VideoPlayer;