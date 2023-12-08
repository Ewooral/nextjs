import { useEffect, useState } from 'react';
import { CustomerAccountClient } from '@/proto/generated/CustomerServiceClientPb';
import { API_URL } from '@/constant';

function useCustomerAccountClient() {
  const [client, setClient] = useState<CustomerAccountClient | null>(null);

  useEffect(() => {
    import('@/proto/generated/CustomerServiceClientPb').then(({ CustomerAccountClient }) => {
      setClient(new CustomerAccountClient(API_URL));
    });
  }, []);

  return client;
}

export default useCustomerAccountClient;