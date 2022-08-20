import axios from 'axios'
import React, { Component } from 'react'
import Header from './components/Header'
import InForSong from './components/InForSong'
import ListSongs from './components/ListSongs'
import PlaySongs from './components/PlaySongs'


export default class App extends Component {
  state = {
    dataSongs: [],
    itemSong: {
      name: '',
      author: '',
      imgAuthor: '',
      imgSong: '',
      url:''
    },
    indexSongActive: 0
  }

  handleSelectSong = (id) => {
    let Song = this.state.dataSongs.find((item) => item.id === id);
    let itemSong = {
      name: Song.name,
      author: Song.author,
      imgSong: Song.links.images[1].url,
      imgAuthor: Song.links.images[0].url,
      url:Song.url
    }
    this.setState({
      itemSong: itemSong,
      indexSongActive: id
    },()=>{
      console.log(this.state.indexSongActive);
    });
  }
  render() {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-4">
            <InForSong itemSong={this.state.itemSong} />
          </div>
          <div className="col-8">
            <ListSongs
              dataSongs={this.state.dataSongs}
              handleSelectSong={this.handleSelectSong}
              indexSongActive={this.state.indexSongActive}
            />
          </div>
        </div>
        <PlaySongs itemSong={this.state.itemSong} />
      </>
    )
  }
  componentDidMount() {
    axios.get('https://63005c639350a1e548ecc7bc.mockapi.io/apiSong')
      .then((res) => {
        let data = res.data;
        let itemSong = {
          name: data[0].name,
          author: data[0].author,
          imgSong: data[0].links.images[1].url,
          imgAuthor: data[0].links.images[0].url,
          url: data[0].url
        }

        this.setState({
          dataSongs: res.data,
          itemSong: itemSong,
          indexSongActive: res.data[0].id
        }, () => {
          console.log(this.state.dataSongs);
          console.log(this.state.itemSong);
          console.log(this.state.indexSongActive);
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

