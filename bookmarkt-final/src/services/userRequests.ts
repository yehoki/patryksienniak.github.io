import axios from "axios";
const baseUrl = '/api/users';
import { userType
 } from "@/types/types";

const createUser = async (userDetails: userType) => {
    const res = await axios.post(baseUrl, userDetails);
    return res.data;
}

const getUsers = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const updateUser = async (userDetails: userType) => {
    const res = await axios.put(baseUrl, userDetails);
    return res.data;
}

export default {
    createUser: createUser,

};