import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '432baa561bac4c63a63907902a759e83'
    }
})