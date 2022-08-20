import React, { Component } from 'react';

class ListSongs extends Component {

    render() {
        const { dataSongs, handleSelectSong, indexSongActive } = this.props;
        return (
            <div>
                <div className="border-bottom">
                    <h3>Playlists</h3>
                </div>
                <div className="bg-secondary  w-100 ps-4 overflow-auto over" style={{ height: '515px' }}>
                    {dataSongs.map((itemSong) => {
                        let imgAuthor = itemSong.links.images[0].url;
                        return <div className="row w-100 overflow-hidden itemSong align-items-center py-2 border-bottom"
                            key={itemSong.id}>
                            <div className="row col-11" onClick={() => {
                                handleSelectSong(itemSong.id)
                            }}>
                                <div className="col-2" style={{ width: '50px' }} >
                                    <img className="w-100 rounded-circle" src={imgAuthor} />
                                </div>
                                <p className="col-5 m-0">{itemSong.name}</p>
                                <p className="col-3 m-0">{itemSong.author}</p>
                            </div>
                            <div className="col-1" style={{ width: '50px' }}>
                                <a href={itemSong.url} className="text-dark ">
                                    <i class="fas fa-download text-dark"></i>
                                </a>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default ListSongs;