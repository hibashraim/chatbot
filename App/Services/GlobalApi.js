import axios from "axios";

const BASE_URL = 'http://192.168.1.34:3000/api/bardapi';


const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}