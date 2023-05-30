import moment from 'moment';

export const convertTimeStampToDate=(timestamp:string)=>{
   const date = new Date( timestamp );
   const formattedDate = moment(date).format('DD MMM YYYY HH:mm');
    return formattedDate.toString(); 
}
