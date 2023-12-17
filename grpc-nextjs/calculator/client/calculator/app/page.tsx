'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { getTotal } from '@/api/gRPC';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const calculateTotal = async () => {
    try {
      const result = await getTotal(parseFloat(num1), parseFloat(num2));
      setIsError(false)
      console.log("num1: ", num1, "num2: ", num2)
      console.log("result: ", result)
      setTotal(result as string);
       console.log("Is Error at try: ", isError);
    } catch (error) {
   setIsError(true)
    setError(error.message)
      console.error('Error calculating total:', error.message);
      console.log("Is Error at catch: ", isError);
    }
  };
   console.log("total: ", total, isError)
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-6 font-bold text-2xl text-yellow-400">A simple calculator powered by a gRPC backend server</h1>
      {
      isError ? 
      <p className="bg-red-500 text-white p-4 rounded-md mb-9">Error: {error}</p> : 
      <p className="bg-green-800 text-white p-4 rounded-md mb-9">Total: {total}</p> 
      }
 
      <input className="text-black mb-3 border-[6px] border-[yellowgreen] p-[10px] rounded-[10px]" type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input className="text-black mb-3 border-[6px] border-[yellowgreen] p-[10px] rounded-[10px]" type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button className="bg-white text-black font-semibold p-4 rounded-lg" onClick={calculateTotal}>Calculate Total</button>
       
    </main>
  )
}
