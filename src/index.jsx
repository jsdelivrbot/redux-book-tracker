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
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
