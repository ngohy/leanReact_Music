import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        let {itemSong}= this.props;
        return (
            <div className='container d-flex flex-column align-items-center'>
                <div className="mb-4 mt-4 rounded-circle" style={{ width: '250px', height: '250px' }}>
                    <img src={itemSong.imgSong} className="w-100 rounded-circle " style={{animation:'rotation 10s infinite linear'}}></img>
                </div>
                <div className="">
                    <div className=" text-light">
                        <h5>{itemSong.name}</h5>
                        <p className=" text-secondary">{itemSong.author}</p>
                    </div>
                    <div className="" style={{ width: '100px', height: '100px' }}>
                        <img className="w-50 rounded-circle" src={itemSong.imgAuthor} />
                    </div>
                </div>
            </div>
        )
    }
}
