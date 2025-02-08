import BASE_URL from "./base_url"
import { commonStructure } from "./commonStructure"

//Admin logic
export const adminLogic=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
}

export const addNewEmployee=async(body,headers)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/addemployee`,body,headers)
}

export const getAllEmployees=async(sdata)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-all-employees?search=${sdata}`,{})
}

export const getEmployee=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-employee/${id}`,{})
}

export const deleteEmployee=async(id)=>{
    return await commonStructure('DELETE',`${BASE_URL}/admin/delete-employee/${id}`,{})
}

export const updateEmployee=async(id,body,headers)=>{
    return await commonStructure('PUT',`${BASE_URL}/admin/update-employee/${id}`,body,headers)
}

export const filterStatus=async(data)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/filter?filterData=${data}`,{})
}