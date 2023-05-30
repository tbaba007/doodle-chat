import {API_URL,TOKEN as token} from '../Config'
import { FetchProps } from './types';

export const FetchData=async({method,data}:Partial<FetchProps>)=>{
    let response=null;
    try{
       switch(method){
        case 'POST':{
            response=await fetch(`${API_URL}`,{
                method:method,
                headers:{
                    'content-type':'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            });
            break;
        }
          
        default:{
            response=await fetch(`${API_URL}/?token=${token}`);
        }
           
       }
         
        const responseData=await response.json();
        return responseData;
    }
    catch(ex){
        if(ex instanceof Error){
            return ex.message
        }
    }
   
} 