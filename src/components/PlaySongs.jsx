import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class PlaySongs extends Component {

    render() {
        let { itemSong } = this.props;
        return (
            <div>
                <AudioPlayer className="w-100 bg-light"
                    src={itemSong.url}
                    showSkipControls={true}
                    showJumpControls={false}
                    showDownloadProgress={true}
                    volume={0.2}
                    layout="horizontal-reverse"
                />
            </div>
        )
    }
}
