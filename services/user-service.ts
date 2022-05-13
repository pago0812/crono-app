import axios from 'axios';

import {User} from '../interfaces';

export const getUserService= ()=>{
    return axios.get<User>('http://localhost:3000/api/user').then(response=>response.data);
}