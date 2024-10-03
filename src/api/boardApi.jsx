import {BOARD} from "./config.js";
import axios from "axios";

export const postAdd = async (addParam) => {
    const header = {headers: {'Content-Type': 'multipart/form-data'}}
    const res = await axios.post(`${BOARD}`, addParam, header)

    return res.data
}
