import { API_URL } from "@/constant";
import { CustomerAccountMessage } from "@/proto/generated/Customer_pb";
import { CustomerAccountClient } from "@/proto/generated/CustomerServiceClientPb";

const client = new CustomerAccountClient(API_URL);
export const registerGRPC = async (data: personalInfoType) => {
  // store response from the server into the store
  const request = new CustomerAccountMessage();
  request.setCountrycode("GH0233");
  request.setEmailaddress(data.email);
  request.setLanguageid("en");
  request.setPersonalbusinessgroupvalue(2);
  request.setMobilenumber(data.number);
  request.setFirstname(data.firstName);
  request.setLastname(data.lastName);
  request.setPassword(data.password);
  request.setBusinessname(data.businessName);
  request.setBusinesscontactpersonmobilenumber(
    data.businessContactPMN
  );
  request.setCustomersixdigitpin(data.customerSixDigitPIN);

  console.log("PERSONAL DETAILS: ", request.toObject());

  const metadata = {
    eganowappcustkey:
      "keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey",
    eganowapppassword:
      "passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word",
  };

  try {
    const sendOTPResObj_1 = await new Promise((resolve, reject) => {
      client.createCustomerAccount(request, metadata, (err, response) => {
        if (err) {
          reject(err);
        } else {
          const sendOTPResObj = response.toObject();
          resolve(sendOTPResObj);
        }
      });
    });
    console.log(sendOTPResObj_1);
    return sendOTPResObj_1;
  } catch (err_1) {
    console.error(err_1);
  }
}
