import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class PlaySongs extends Component {

    render() {
        let { itemSong,handlePrevSong,handleNextSong } = this.props;
        return (
            <div>
                <AudioPlayer className="bg-light" 
                    src={itemSong.url}
                    showSkipControls={true}
                    showJumpControls={false}
                    autoPlay={false}
                    volume={0.2}
                    layout="horizontal-reverse"
                    onClickPrevious={() =>{
                        handlePrevSong()
                    }}
                    onClickNext={() =>{
                        handleNextSong()
                    }}

                    
                />
            </div>
        )
    }
}
