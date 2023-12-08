import React, { useState } from "react";
import { CreateWorkerRequest } from "@/app/proto/generated/workers_pb";
import { WorkersManagementServiceClient } from "@/app/proto/generated/WorkersServiceClientPb";
import { useForm, DefaultValues } from 'react-hook-form';
import { SERVER_URI } from "@/app/constant";
const WorkerForm: React.FC = () => {
  const { register, handleSubmit,  formState: { errors, isSubmitting }, } = useForm();

  const onSubmit = async (data: any) => {
    const request = new CreateWorkerRequest();
    request.setName(data.name);
    request.setEmail(data.email);
    request.setPhoneNumber(data.phoneNumber);
    request.setDepartment(data.department);
    request.setJobTitle(data.jobTitle);
    console.log(request.toObject())

    const client = new WorkersManagementServiceClient(SERVER_URI, {}, null);

      const response = client.createWorker(request, (error, response) => {
          if (error){
            console.error(error)
          }
          const obj = response.toObject()
          console.log("Response: ", obj)
      });
     
    
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Worker</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">Name:</label>
          <input type="text" {...register('name', { required: true })} className="w-full p-2 border" />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">Email:</label>
          <input type="text" {...register('email', { required: true })} className="w-full p-2 border" />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number:</label>
          <input type="text"  {...register('phoneNumber', { required: true })} className="w-full p-2 border" />
          {errors.phoneNumber && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">Department:</label>
          <input type="text" {...register('department', { required: true })} className="w-full p-2 border" />
          {errors.department && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">Job Title:</label>
          <input type="text" {...register('jobTitle', { required: true })} className="w-full p-2 border" />
          {errors.jobTitle && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Worker</button>
      </form>
    </div>
  );
};

export default WorkerForm;
