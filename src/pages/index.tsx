import Chamber from 'components/Chamber';
import { NextPage } from 'next';
import { Icon } from '@iconify/react';
import Button from 'components/Button';
import { signIn } from 'next-auth/react';

const HomeLogin: NextPage = () => {
  return (
    <main className="flex h-screen flex-col justify-end pb-[10vh]">
      <Chamber />
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-3">
        <Button
          bgAction={() =>
            signIn('google', { callbackUrl: 'http://localhost:3001/home' })
          }
          bgButton="bg-googleColor"
        >
          <span className="flex h-full w-full items-center justify-center">
            <i className="mr-3 h-7 w-9 rounded-sm bg-white">
              <Icon
                className="mx-auto inline-block h-5 w-5 text-center"
                icon="logos:google-icon"
              />
            </i>
            <p className="text-white">Log in with google</p>
          </span>
        </Button>
        <Button bgAction={() => signIn()} bgButton="bg-githubColor">
          <span className="flex h-full w-full items-center justify-center">
            <Icon
              className=" mr-3 h-6 w-6 text-center text-white"
              icon="akar-icons:github-fill"
            />
            <p className="text-white">Log in with gitHub</p>
          </span>
        </Button>
      </div>
    </main>
  );
};

export default HomeLogin;
