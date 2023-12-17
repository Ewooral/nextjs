// grpc.js
import { CalculatorClient } from '@/proto/gen/CalculatorServiceClientPb';
import { TotalRequest } from '@/proto/gen/calculator_pb';

const client = new CalculatorClient('http://localhost:8080');

export const getTotal = (num1: number, num2: number) => {
  const request = new TotalRequest();
  request.setNum1(num1);
  request.setNum2(num2);
  
 

  return new Promise((resolve, reject) => {
    client.getTotal(request, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.toObject().total);
      }
    });
  });
};
