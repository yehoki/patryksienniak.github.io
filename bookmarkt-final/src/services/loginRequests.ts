import axios from "axios";
const baseUrl = '/api/login';

type Credentials = {
    username: string;
    password: string;
}

const login = async (credentials: Credentials) => {
    const res = await axios.post(baseUrl, credentials);
    return res.data;
}

export default {
    login: login
};