import axios from 'axios'
import React, { Component } from 'react'
import Header from './components/header/Header'
import InForSong from './components/main/InForSong'
import ListSongs from './components/main/ListSongs'
import PlaySongs from './components/footer/PlaySongs'
import Navbar from './components/header/Navbar'


export default class App extends Component {
  state = {
    dataSongs: [],
    itemSong: {
      name: '',
      author: '',
      imgAuthor: '',
      imgSong: '',
      url: ''
    },
    itemSongPrev: [],
    indexSongActive: 0
  }

  getItemSong = (Song) => {
    return {
      name: Song.name,
      author: Song.author,
      imgSong: Song.links.images[1].url,
      imgAuthor: Song.links.images[0].url,
      url: Song.url
    }
  }

  handleSelectSong = (id) => {
    let Song = this.state.dataSongs.find((item) => item.id === id);
    let itemSong = this.getItemSong(Song);
    let songPrev = this.state.itemSong;
    let songActive = this.state.indexSongActive;
    this.state.itemSongPrev.push({ songPrev, songActive });
    this.setState({
      itemSong: itemSong,
      indexSongActive: id
    }, () => {
      // console.log(this.state.indexSongActive);
    });
  }

  handlePrevSong = () => {
    let itemSong = this.state.itemSongPrev.pop();
    if (itemSong) {
      this.setState({
        itemSong: itemSong.songPrev,
        indexSongActive: itemSong.songActive
      })
    };
  }

  handleNextSong = () => {
    let songNext = this.state.indexSongActive + 1;
    let dataSong = this.state.dataSongs[songNext];
    let itemSong = this.getItemSong(dataSong);
    let songPrev = this.state.itemSong;
    let songActive = this.state.indexSongActive;
    this.state.itemSongPrev.push({ songPrev, songActive });
    this.setState({
      itemSong: itemSong,
      indexSongActive: songNext
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className="row  " style={{
          backgroundColor: '#111111'
        }}>
          <div className="col-2 bg-light pe-0">
            <Navbar />
          </div>
          <div className="col-4">
            <InForSong itemSong={this.state.itemSong} />
          </div>
          <div className="col-6">
            <ListSongs
              dataSongs={this.state.dataSongs}
              handleSelectSong={this.handleSelectSong}
              indexSongActive={this.state.indexSongActive}
            />
          </div>
        </div>
        <PlaySongs
          itemSong={this.state.itemSong}
          handlePrevSong={this.handlePrevSong}
          handleNextSong={this.handleNextSong}
        />
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
          // console.log(this.state.dataSongs);
          // console.log(this.state.itemSong);
          // console.log(this.state.indexSongActive);
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

