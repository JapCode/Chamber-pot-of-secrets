import { Icon } from '@iconify/react';
import { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const getUser = async (messageContent: object) => {
  await fetch('/api/message/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageContent),
  });
};
const UserConfig: NextPage = () => {
  const { data, error } = useSWR('/api/userConfig/', fetcher);
  // const [user, setUser] = useState<object>();

  useEffect(() => {
    if (data !== undefined) {
      // const newUser: Array<string> = [];
      // Object.entries(data).forEach(([key, value]) => {
      //   console.log(key, value);
      // });
    }
  }, [data]);

  return (
    <div>
      {!data ? (
        <p>loading...</p>
      ) : (
        <main className="flex h-screen flex-col items-center justify-between px-8 pt-8">
          <div className="mt-4 flex flex-col items-center">
            <figure className="my-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full">
              <Image
                src={data.image}
                layout="fixed"
                objectFit="cover"
                width={130}
                height={130}
                alt={data.name}
              />
            </figure>
            <h1 className="pt-4 text-2xl text-darkColor">{data.name}</h1>
            <p className="my-5 text-xs text-textGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
              vitae id facilisi auctor scelerisque tellus. Urna, in sed
            </p>
          </div>
          <ul className="w-full text-textGrey">
            <li className="my-[5vh] flex h-12 w-full items-center justify-between">
              <div>
                <h3 className="text-2xl">Theme</h3>
                <p className="pt-1 text-xs">select between Dark and Light</p>
              </div>
              <label
                htmlFor="small-toggle"
                className="relative mb-5 inline-flex cursor-pointer items-center"
              >
                <input
                  type="checkbox"
                  value=""
                  id="small-toggle"
                  className="peer sr-only"
                />
                <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primaryColor peer-checked:after:translate-x-full dark:border-gray-600 dark:bg-darkColor dark:peer-focus:ring-blue-800" />
              </label>
            </li>
            <li className="my-[5vh] flex h-12 w-full items-center justify-between">
              <div>
                <h3 className="text-2xl">Language</h3>
                <p className="pt-1 text-xs">Current english</p>
              </div>
              <Icon
                className="h-8 w-8 text-primaryColor"
                icon="ic:baseline-keyboard-arrow-down"
              />
            </li>
            <li className="my-[5vh] h-12 w-full">
              <h3 className="text-2xl">Delete User</h3>
              <p className="pt-1 text-xs">
                Delete your account and all information about you
              </p>
            </li>
          </ul>
          <button
            className="mb-8 flex h-12 w-full items-center"
            type="button"
            onClick={() => signOut()}
          >
            <h3 className="text-2xl text-red-500">Log Out</h3>
          </button>
        </main>
      )}
    </div>
  );
};
export default UserConfig;
