const API = "http://localhost:5000/api"

export const register = async (user)=>{
    try {
        const response = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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

export const login= (user)=>{
    return fetch(`${API}/login`,{
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response=>response.json())
    .catch(error=>console.log(error))

}

export const authenticate = (data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}

export const isAuthenticated = async ()=>{
    if(typeof window!=="undefined")
    return localStorage.getItem('jwt')? await JSON.parse(localStorage.getItem('jwt')):false
}