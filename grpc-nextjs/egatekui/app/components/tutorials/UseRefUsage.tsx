// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';

// function UseRef() {
//   const { control } = useForm();
//   const [inputType, setInputType] = useState('password');

//   const handleClick = () => {
//     setInputType(inputType === 'password' ? 'text' : 'password');
//     console.log(inputType)
//   };

//   return (
//     <div>
//       {/* <Controller
//         name="myInput"
//         control={control}
//         defaultValue=""
//         render={({ field }) => (
//           <input id='shit' type={inputType} {...field} />
//         )}
//       /> */}
//       {/* <div onClick={handleClick}>Toggle Input Type</div> */}

//       < MyForm />
//     </div>
//   );
// }

// export default UseRef;



//  function MyForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onSubmit = (data: any) => {
//     console.log(data);
//     setIsSubmitted(true);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('username', { required: true })} />
//       {errors.username && <span>This field is required</span>}

//       <button type="submit" className={isSubmitted && !errors.username ? 'bg-green-500' : ''}>
//         Submit
//       </button>

//       {isSubmitted && !errors.username && (
//         <div className="text-green-500">
//           <i className="fas fa-check-circle"></i> Looks good!
//         </div>
//       )}
//     </form>
//   );
// }


