import axios from "axios";

// Functions used to route to the request - will have to reuse them for changing user
// data later on

const baseUrl = 'http://localhost:8080/api/books';

const getAll = async () => {
    return await axios.get(baseUrl);
}

const getOne = async(id:string) => {
    return await axios.get(`${baseUrl}/${id}`);
}

const create = async (newObject:any) => {
    return await axios.post(baseUrl, newObject);
}

// Axios sends a DELETE request, to the url with the relevant ID
const dropBook = async (id:string) => {
    return await axios.delete(`${baseUrl}/${id}`);
}

export default {
    getAll: getAll,
    create: create,
    getOne: getOne,
    dropBook: dropBook
}