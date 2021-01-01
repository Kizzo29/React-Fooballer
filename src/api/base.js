import axios from "axios";

const API = axios.create({
    baseURL: 'https://apiv2.apifootball.com',
    params: {
        APIkey: '537a7da1ec49a7bef798a3dbc707912d8dac144ea24ab86a5b92afd0c784013b'
    }
})

export default API;