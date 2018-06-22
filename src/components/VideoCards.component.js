import React, { Component } from 'react';

class VideoCard extends Component {
    
    render() {

        if (!this.props.videos) {
            return (
                <h1>Loading</h1>
            )
        }

        if (!this.props.videos) {
            return (
                <h1>Loading</h1>
            )
        }
        this.selectVideo = (video) => {
            this.props.selectVideo(video)
        }

        const list = this.props.videos.map((video) => {
            return (
                <li className='list-group' key={video.id.videoId} onClick={() => this.selectVideo(video)}>

                    <div className='video-list media'>

                        <div className="row">
                            <div className="col col-md-5">
                                <div className='media-left'>
                                    <img className='media-object img-fluid' src={video.snippet.thumbnails.default.url} />
                                </div>
                            </div>
                            <div className="col col-md-7">
                                <div className='media-body'>
                                    <div className='media-heading'>
                                        {video.snippet.title}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                </li>
            )
        })

        return (
            <ul className='col-md-3 list-group'>
                {list}
            </ul>
        );
    }
    
}

export default VideoCard;