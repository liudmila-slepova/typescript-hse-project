import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export default class Api {
    private static AxiosInstance: AxiosInstance;

    static init() {
        this.AxiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL
        })
        this.addApiInterceptors();
    }

    private static addApiInterceptors() {
        this.AxiosInstance.interceptors.request.use()
    }

    static get<T>(url: string, config?: AxiosRequestConfig) {
        return this.AxiosInstance.get<T>(url);
    }
    static post(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.AxiosInstance.post(url, data, config);
    }
    static request<T>(config: AxiosRequestConfig) {
        return this.AxiosInstance.request<T>(config);
    }

    static delete(url: string, config?: AxiosRequestConfig) {
        return this.AxiosInstance.delete(url, config);
    }

    private constructor() { }
}
