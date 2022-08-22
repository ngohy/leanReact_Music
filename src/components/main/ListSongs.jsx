import React, { Component } from 'react';

class ListSongs extends Component {

    render() {
        const { dataSongs, handleSelectSong, indexSongActive } = this.props;
        return (
            <div>
                <div className="border-bottom">
                    <h3 className='text-light'>Playlists</h3>
                </div>
                <div className="bg-secondary listSongs w-100 ps-3" style={{ height: '540px'}}>
                    {dataSongs.map((itemSong) => {
                        let checked = (itemSong.id===indexSongActive ? true : false);
                        let imgAuthor = itemSong.links.images[0].url;
                        return <div className={checked ? 'activeSong row m-0 w-100 overflow-hidden itemSong align-items-center py-2 border-bottom ':'row m-0 w-100 overflow-hidden itemSong align-items-center py-2 border-bottom '}
                            key={itemSong.id}>
                            <div className="row col-11 d-flex align-items-center" onClick={() => {
                                handleSelectSong(itemSong.id)
                            }}>
                                <div className="col-2 rounded-circle p-0 mx-2"  style={{ width: '50px' ,height: '50px', overflow: 'hidden' }}>
                                    <img className="w-100" height={'100%'} src={imgAuthor} />
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