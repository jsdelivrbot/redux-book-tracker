import _ from 'Lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyDOZVmlJpsTZy9ioUo3yXILgvbPH7cO3d4';
const DEFAULT_TERM = 'Japan'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
     };

     this.videoSearch(DEFAULT_TERM);

  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    },
    videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar
          defaultValue={DEFAULT_TERM}
          onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
