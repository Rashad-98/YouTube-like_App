import axios from 'axios';

const KEY = 'AIzaSyAro5OcCSHOaeta-N1iHFwiedHulDUePwM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY
    }
});