import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = 'https://localhost:7001/api/';
const responseBody = (response: AxiosResponse) => response.data 
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

axios.interceptors.response.use(
   async  response => {
        await sleep();
        return response
    }, (error: AxiosError) => {
        console.log('cought by axios') 
        const { data, status } = error.response as AxiosResponse;
        switch (status) {
            case 400:
              case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
            case 401:
                toast.error(data.title)
                break;
            case 404:
                toast.error(data.title)
                break;
              case 500:
            router.navigate('/server-error', {state: {error: data}});
            break;
          
        }
        
        return Promise.reject(error.response)
    })

function responseBodyFn(reponse: AxiosResponse)
{
    return reponse.data;
}

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string,body:{}) => axios.post(url,body).then(responseBody),
    put: (url: string,body:{}) => axios.put(url,body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)    
}
const Catalog = {
    list: () => requests.get('products'),
    details:(id:number) => requests.get(`products\${id}`)   
}
const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
       
}
const agent = {
    Catalog,
    TestErrors
}
export default agent;