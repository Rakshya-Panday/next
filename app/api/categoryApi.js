let API = "http://localhost:5000/api"

export const getAllCategories = ()=>{
    return fetch(`${API}/getallcategories`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const addCategory = (category,token)=>{
    return fetch(`${API}/addcategory`,{
        method : 'POST',
        headers :{
            "Content-Type":"application/json",
            Authorization : `Bearer ${token}` 
        },
        body: JSON.stringify(category)
     
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const updateCategory = (id,category,token)=>{
    return fetch(`${API}/updatecategory/${id}`,{
        method : 'PUT',
        headers :{
            "Content-Type":"application/json",
            Authorization : `Bearer ${token}` 
        },
        body: JSON.stringify(category)
     
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const getCategoryDetails  = id =>{
    return fetch(`${API}/categorydetails/${id}`)
    .then(response=>response.json())
    .catch(error=>console.log(error))

}


export const deleteCategory = ()=>{
    return fetch(`${API}/deleteCategory/${id},`,{
        method : 'DELETE',
        headers :{
            "Content Type":"application/json",
            Authorization : `Bearer ${token}` 
        },
        })
    .then(response=>response.json())
    .catch(error=>console.log(error))

}