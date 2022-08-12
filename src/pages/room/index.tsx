import { NextPage } from 'next';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Room: NextPage = () => {
  const { data, error } = useSWR('/api/hello/', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return (
    <div>
      <h1>hello {data.name}!</h1>
      <p>{data.env}</p>
    </div>
  );
};
export default Room;
