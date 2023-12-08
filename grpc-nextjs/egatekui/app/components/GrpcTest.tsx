import React, { useEffect, useState } from 'react';

const GrpcTest = () => {
  const [grpcResponse, setGrpcResponse] = useState('');
  const [nextjsResponse, setNextjsResponse] = useState('');

  useEffect(() => {
    // Request to /grpc
    fetch('/grpc', {
      method: 'POST', // or 'GET' based on your gRPC service
      headers: {
        'Content-Type': 'application/grpc-web-text', // gRPC-Web content type
      },
      // Add gRPC payload here if needed
    })
      .then((response) => response.text())
      .then((data) => {
        setGrpcResponse(data);
      })
      .catch((error) => {
        console.error('Error fetching /grpc:', error);
      });

    // Request to other paths (e.g., /)
    fetch('/')
      .then((response) => response.text())
      .then((data) => {
        setNextjsResponse(data);
      })
      .catch((error) => {
        console.error('Error fetching /:', error);
      });
  }, []);

  return (
    <div>
      <h2>gRPC Response:</h2>
      <p className='p-7 '>{grpcResponse}</p>
      
      <h2>Next.js Response:</h2>
      <p>{nextjsResponse}</p>
    </div>
  );
};

export default GrpcTest;
