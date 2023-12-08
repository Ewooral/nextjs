import { API_URL } from "@/constant";
import {CustomerTempOTRequestMessage} from "@/proto/generated/Customer_pb";
import {CustomerAccountClient} from "@/proto/generated/CustomerServiceClientPb";

const client = new CustomerAccountClient(API_URL);
export const setOTP_GRPC = (email: string, setSendOtpResponse: any) => {

    // store response from the server into the store
    const request = new CustomerTempOTRequestMessage();
   request.setCountrycode("GH0233")
   request.setEmailaddress(email)
   request.setLanguageid('en')
   request.setPersonalbusinessgroupvalue(2)
   console.log("SEND OTP: ", request.toObject())

   const metadata = {
    eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
    eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
  }  

    return new Promise((resolve, reject) => {
        client.createCustomerGenerateOTP(request, metadata, (err, response) => {
        if (err) {
            reject(err);
        } else {
            const sendOTPResObj = response.toObject()
            setSendOtpResponse(sendOTPResObj); // store the response in the Zustand store
            resolve(sendOTPResObj);
            console.log(sendOTPResObj);
        }
        });
    });


};


