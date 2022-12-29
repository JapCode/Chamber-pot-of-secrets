import { signOut, getSession, useSession, signIn } from 'next-auth/react';
import { NextPage } from 'next';
// import signInWithGoogle from 'pages/api/services/singIn';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getAuth } from 'firebase/auth';

type Message = {
  message: string | null;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const sendMessage = async (messageContent: object) => {
  await fetch('/api/message/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageContent),
  });
};
const Room: NextPage = () => {
  // const { data, error } = useSWR('/api/hello/', fetcher);
  const [user, setUser] = useState<object>();
  const [message, setMessage] = useState<Message>({ message: null });
  // const auth = getAuth();

  const newMessage = () => {
    setMessage({ message: 'hello' });
  };

  const getActualUser = async () => {
    const session = await getSession();
    console.log(session);
  };

  // useEffect(() => {
  //   if (session !== null) {
  //     setUser(session);
  //     console.log('oiu');
  //   }
  // }, [session]);

  // useEffect(() => {
  //   if (message.message !== null) {
  //     console.log('message');
  //     console.log(message);
  //     sendMessage(message);
  //   }
  // }, [message]);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // render data
  return (
    <div>
      {/* <h1>hello {data.name}!</h1> */}
      {/* <button type="button" onClick={signInWithGoogle}>
        piu
      </button> */}
      <button type="button" onClick={newMessage}>
        precioname
      </button>
      <br />
      <button type="button" onClick={getActualUser}>
        user
      </button>
      <br />
      <button type="button" onClick={() => signIn('google')}>
        entremos
      </button>
      <br />
      <button type="button" onClick={() => signOut()}>
        salgamos
      </button>
      {/* <p>{data.env}</p> */}
    </div>
  );
};
export default Room;
