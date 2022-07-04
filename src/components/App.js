import react, { createRef } from "react";
import SearchBar from './SearchBar';
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends react.Component {
    state = {videos: [], previweVid: null }
    myRef = createRef();

    componentDidMount() {
        this.makeRequest('hello');
    }
    
    makeRequest = (searchTerm) => {
        youtube.get('/search',{
            params: {
                 q: searchTerm
            }
        }).then((res)=>{this.setState({videos: res.data.items, previweVid: res.data.items[0]})});
    }

    preview = (video) => {
        this.setState({previweVid: video})
    }

    render() {
        return(
            <div className='ui container'>
                <SearchBar searchTerm={this.makeRequest}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.previweVid}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} preview={this.preview}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;