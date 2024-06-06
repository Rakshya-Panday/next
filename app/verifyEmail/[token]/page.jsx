"use client"
import { verify } from "@/app/api/userApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const verifyEmail = () => {
    let token = useParams()?.token
    let[success,setSuccess] = useState('')
    let[error,setError] = useState('')
    let router = useRouter()
    console.log(token)

    useEffect(()=>{

        if(token){
            verify(token)
            .then(data=>{
                if(data.error){
                    setError(data.error)
                }
                else{
                    setSuccess( data.message)
                }
            })
            
        }
    },[token])

    const showError = ()=>{
        if(error){
            console.log(error)
            Swal.fire({
                title:"Error",
                text:error,
                icon:"error"
            })

        }
    }

    const showSuccess = ()=>{
        if(success){
            console.log(success)
            Swal.fire('Congrats!',success,'success')
        }
    }

    return (
         <>
           {showError()}
           {showSuccess()}

        </>
     );
}
 
export default verifyEmail;