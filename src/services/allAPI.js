import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


//api call for add details
export const addEmployeeAPI=async(emp)=>{
   return await commonAPI("POST",`${server_url}/history`,emp)
}

// api call to get employee details

export const getEmployeeAPI=async()=>{
 return await commonAPI('GET',`${server_url}/history`,'')
}
//api call to delete history
export const deleteHistoryAPI=async(id)=>{
   return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}
