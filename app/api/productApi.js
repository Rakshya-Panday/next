let API = "http://localhost:5000/api"

export const getAllProducts = ()=>{
    return fetch(`${API}/getallproducts`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const addProduct = async (product)=>{
    try {
        const response = await fetch(`${API}/addnewproduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}
