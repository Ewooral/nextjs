
// gRPC client generated files
import {AuthServiceClient} from "@/proto/generated/BankServiceClientPb"
import {RegisterRequest} from "@/proto/generated/bank_pb"
import { BasicUserSchema } from "@/types/BasicUserSchema";
import { request } from "http";
import { useState } from "react"
import { z} from 'zod'
type BasicUserType = z.infer<typeof BasicUserSchema>;

const useRegister = (url: string) => {
    const client = new AuthServiceClient(url, null, null)
    const [errMSG, setErrorMSG]  = useState<any>({})
    const [obj, setObj] = useState<any>({})


    const setRegister = (data: BasicUserType) => {
        console.log("Data from RegisterForm", data)
        const request = new RegisterRequest()
        request.setEmail(data.email)
        request.setPassword(data.password)
        request.setUsername(data.username)
        request.setRole(0)

        const metadata = {"content-type": "application/grpc-web"};

    client.register(
        request, 
        metadata, 
        (err: {message: any}, response: {toObject: () => any}) =>{
        if(err){
            console.error("gRPC Server Error: ", err.message)
            return
        }
        const obj = response.toObject()
        setObj(obj)
       console.log("Response message", obj)
    })

    }
    return [obj, setRegister]

}

export default useRegister