import { API_URL } from "@/constant";
import {CustomerTempVerifyOTRequestMessage} from "@/proto/generated/Customer_pb";
import {CustomerAccountClient} from "@/proto/generated/CustomerServiceClientPb";


const client = new CustomerAccountClient(API_URL);
// otp: string, email: string
export const verifyOTP_GRPC = (email: string, otp: string) => {
    const request = new CustomerTempVerifyOTRequestMessage();
   request.setCountrycode("GH0233")
   request.setOtpvalue(otp)
   request.setEmailaddress(email)
   request.setLanguageid('en')
   request.setPersonalbusinessgroupvalue(2)
   console.log("VERIFY OTP: ", request.toObject())

   const metadata = {
    eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
    eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
  }  

    return new Promise((resolve, reject) => {
        client.createCustomerVerifyOTP(request, metadata, (err, response) => {
        if (err) {
            reject(err);
        } else {
            resolve(response.toObject());
            console.log(response.toObject());
        }
        });
    });


};
