import axios from 'axios';

import {User} from '../interfaces';

const NEXT_URL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';

export const getUserService= ()=>{
    return axios.get<User>(`${NEXT_URL}/api/user`).then(response=>response.data);
}