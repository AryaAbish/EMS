import axios from "axios";

export const commonStructure=async(method,url,body,header)=>{
    let config={
        method,
        url,
        headers:header?header:"application/json",   //if data doesnot contain file type use header application/json else pass multipart/form-data inheader
        data:body
    }
    return await axios(config).then(response=>{
        return response
    }).catch(response=>{
        return response
    })
}