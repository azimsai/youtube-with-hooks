import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import ViedoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  componentDidMount() {
    this.onTermSubmit('react');
  }

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App ui container">
        <h1> Youtube Video App</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {' '}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <ViedoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
