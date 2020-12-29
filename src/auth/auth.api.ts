import Axios, { AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: "POST",
        url: process.env.REACT_APP_API_BASE_URL + '/login',
        data
    }
    try {
        const {data: response} = await Axios.request(requestConfig);
    } catch (e) {
        console.error(e);
        return {error: e.respose.data.message};
    }
}


export const onRegister = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: "POST",
        url: process.env.REACT_APP_API_BASE_URL + '/register',
        data
    }
    try {
        const {data: respose} = await Axios.request(requestConfig);
    } catch (e) {
        console.log(e.respose);
        return {error: e.respose.data.message}
    }

}
