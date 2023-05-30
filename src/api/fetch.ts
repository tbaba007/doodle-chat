import {API_URL,TOKEN as token} from '../Config'
import { FetchProps } from './types';


export const FetchData=async({path,method,data}:Partial<FetchProps>)=>{
    try{
        const response=await fetch(`${API_URL}/${path}?token=${token}`,{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const responseData=await response.json();
        return responseData;
    }
    catch(ex){
        if(ex instanceof Error){
            return ex.message
        }
    }
   
} 