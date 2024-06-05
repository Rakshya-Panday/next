const API = "http://localhost:5000/api"

export const register = async (user)=>{
    try {
        const response = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-type": "applications/json"
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}

export const verify = async(token)=>{

    return fetch(`${API}/verifyemail/${token}`)
    .then(response=>response.json())
    .catch(error=>console.log(error))

}