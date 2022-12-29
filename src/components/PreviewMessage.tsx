import { Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux/userState';
import { RootState } from 'store';
import { Group } from '../types';

type Props = {
  group: Group;
};

const convertTimestamp = (timestamp: any) => {
  let date = timestamp.toDate();
  const mm = date.getMonth();
  const dd = date.getDate();
  const yyyy = date.getFullYear();

  date = `${mm}-${dd}-${yyyy}`;
  return date;
};
const convertTimestampTime = (timestamp: any) => {
  let time = timestamp.toDate();
  const hour = time.getHours();
  const min = time.getMinutes();

  time = `${hour}:${min}`;
  return time;
};

const PreviewMessage = ({ group }: Props) => {
  const { groupName, groupImage, recentMessage } = group;
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  // const dateTime = recentMessage || undefined;

  useEffect(() => {
    if (recentMessage.readBy.sentAt !== null) {
      const dateNew = Timestamp.fromDate(
        new Date(recentMessage.readBy.sentAt.seconds * 1000),
      );
      setDate(convertTimestamp(dateNew));
      setTime(convertTimestampTime(dateNew));
      // console.log(convertTimestamp(dateNew));
      console.group('date');
      // console.log(
      //   dateNew
      //     .toDate()
      //     .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      // );
      console.log(dateNew.toDate().getHours());
      console.log(convertTimestampTime(dateNew));
      console.log(convertTimestamp(dateNew));
      // console.log(convertTimestamp(recentMessage.readBy.sentAt.seconds));
      console.groupEnd();
    }
    // if (recentMessage !== undefined) {
    //   console.log('nuevo');
    //   console.log(recentMessage.reactBy);
    // }
  }, []);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        type="button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
    // <div className="my-4 flex h-14 w-full justify-between">
    //   <span className="flex w-9/12 max-w-[100px]">
    //     <figure className="min-w-[54px] overflow-hidden">
    //       {groupImage != null ? (
    //         <Image
    //           src={groupImage}
    //           alt="profile"
    //           objectFit="cover"
    //           width={54}
    //           height={54}
    //           className="rounded-full"
    //         />
    //       ) : (
    //         <p>holi</p>
    //       )}
    //     </figure>
    //     <div className=" pl-4">
    //       <h4 className="text-lg">{groupName}</h4>
    //       <p className=" w-4/5 truncate text-sm text-textGrey">
    //         {recentMessage.messageText}
    //       </p>
    //     </div>
    //   </span>
    //   <div className="flex w-12 flex-col items-center">
    //     <p className="py-1 text-xs">
    //       <time dateTime={`${date} ${time}`}>{time}</time>
    //     </p>
    //     <div className="flex h-6 w-6 min-w-max items-center justify-center rounded-full bg-primaryColor text-white">
    //       <p className="px-1 text-xs">{recentMessage.toSee}</p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default PreviewMessage;
