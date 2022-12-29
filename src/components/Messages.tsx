import { useEffect } from 'react';
import useSWR from 'swr';
import { Group } from 'types';
import PreviewMessage from './PreviewMessage';

// type Group = {
//   groupName: string;
// };

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const Messages = () => {
  const { data, error } = useSWR('/api/room', fetcher);
  useEffect(() => {
    // console.log(data);
  }, [data]);
  return (
    <div className="w-full">
      {data === undefined ? (
        <div>soy undefined</div>
      ) : (
        <>
          {data.map((item: Group) => {
            return <PreviewMessage group={item} key={item.id} />;
          })}
        </>
      )}
    </div>
  );
};
export default Messages;
