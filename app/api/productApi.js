let API = "http://localhost:5000/api"

export const getAllProducts = async ()=>{
    try {
        const response = await fetch(`${API}/getallproducts`)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}

export const getProducts = async (id)=>{
    try {
        const response = await fetch(`${API}/getproductdetails/${id}`)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}
export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


       

export const addProduct = async (product, token) => {
    try {
        const response = await fetch(`${API}/addnewproduct`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: product
        })
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}
export const updateProduct = async (id,product, token) => {
    try {
        const response = await fetch(`${API}/updateproduct/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: product
        })
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}
