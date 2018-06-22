import React, { Component } from 'react';

import '../App.css';

import Navbar from './navbar.component';
import VideoPlayer from './videoPlayer.component';
import VideoCard from './VideoCards.component';
import YTSearch from 'youtube-api-search';

const API_KEY = 'xxxxxxxxxxxxxx';

class Container extends Component {

    constructor(props) {

        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('World news')

    }

    videoSearch(term) {

        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // console.log(this.state)
            // this.setState({ videos : videos });
        })

    }

    selectVideo = ((video) => {
        this.setState({
            selectedVideo: video
        });
    })

    searchVideo = ((searchTerm) => {
        this.videoSearch(searchTerm)
    })

    render() {
        return (
            <div className="container-fluid">
                <Navbar searchVideo={this.searchVideo} />
                <div className="row margin-top-40">
                    <VideoPlayer video={this.state.selectedVideo} />
                    <VideoCard videos={this.state.videos} selectVideo={this.selectVideo} />
                </div>
            </div>
        )
    }
}

export default Container;