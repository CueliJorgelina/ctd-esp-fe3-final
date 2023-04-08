import axios from "axios"

const odontoApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export default odontoApi;