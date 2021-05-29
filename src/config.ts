// set up axios
import Axios from 'axios';


let url = ''
let devUrl = 'localhost:5000/';
let prodUrl = '';

switch (process.env.NODE_ENV) {
    case 'development':
        url = `http://${devUrl}`
        break;
    case 'production':
        url = `https://${prodUrl}`
        break;
    default:
        break;
}

const CSApi = Axios.create({
    baseURL: url
});

export { CSApi };