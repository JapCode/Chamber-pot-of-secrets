import { Icon } from '@iconify/react';
import Auth from 'components/Auth';
import ButtonCard from 'components/ButtonCard';
import ChamberIcon from 'components/ChamberIcon';
import Messages from 'components/Messages';
import SearchBar from 'components/SearchBar';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center px-3.5">
      <span className="my-8 flex w-full justify-between">
        <ButtonCard>
          <div className="w-full text-primaryColor">
            <Icon
              className="mx-auto h-24 w-24 "
              icon="ant-design:plus-circle-outlined"
            />
            <p className="mt-2 text-lg">New room</p>
          </div>
        </ButtonCard>
        <ButtonCard>
          <div className="w-full text-primaryColor">
            <ChamberIcon />
            <p className="mt-2 text-lg">Join a room</p>
          </div>
        </ButtonCard>
      </span>
      <SearchBar />
      <h1 className="my-3.5 text-xl text-primaryColor">Message</h1>
      <Messages />
    </main>
  );
};
export default Home;
