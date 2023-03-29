import axios from "axios";


// Axios used to route the requests to the correct API - essentially sending the API requests and returning the data

// NOTE: change this later - this is very general - will need to look for specific book and user API requests separately

// Alternatively can change the url each time
const baseUrl = 'http://localhost:3000/api/books';


// Get all books
const getAll = async () => {
    return await axios.get(baseUrl);
}
// Get a book by ID
const getOne = async(id:string) => {
    return await axios.get(`${baseUrl}/${id}`);
}
// Create a new book
const create = async (newObject:any) => {
    return await axios.post(baseUrl, newObject);
}

// Delete a book based on its ID
const dropBook = async (id:string) => {
    return await axios.delete(`${baseUrl}/${id}`);
}

export default {
    getAll: getAll,
    create: create,
    getOne: getOne,
    dropBook: dropBook
}