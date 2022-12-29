import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Router from 'next/router';

interface Props {
  children: JSX.Element;
}

const Auth = ({ children }: Props) => {
  const { status } = useSession();

  useEffect(() => {
    console.log(status);
  }, [status]);
  if (status === 'loading') {
    return <div>loading...</div>;
  }
  if (status === 'unauthenticated') {
    Router.push('/');
  }
  return children;
};

export default Auth;
