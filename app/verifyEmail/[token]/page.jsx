"use client"
import { verify } from "@/app/api/userApi";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const verifyEmail
 = () => {
    let token = useParams()?.token
    console.log(token)

    useEffect(()=>{

        verify()
        .then(data=>{
            if(data.error){
                // alert(data.error)
                Swal.fire('Error',data.error)
            }
            else{
                // alert(data.message)
                Swal.fire(data.message)
            }
        })
    },[token])

    return ( <>

    </> );
}
 
export default verifyEmail
;