let API = "http://localhost:5000/api"

export const getAllProducts = ()=>{
    return fetch(`${API}/getallproducts`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}