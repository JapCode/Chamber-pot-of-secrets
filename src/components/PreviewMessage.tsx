import Image from 'next/image';

const img =
  'https://firebasestorage.googleapis.com/v0/b/img-uploaded.appspot.com/o/images%2F1659511477909irfan-simsar-2iYKBFObAko-unsplash.jpg?alt=media&token=7886cc7a-9063-416b-815f-051e7311ed19';

const PreviewMessage = () => {
  return (
    <div className="my-4 flex h-14 w-full justify-between">
      <span className="flex w-9/12 max-w-[100px]">
        <figure className="min-w-[54px] overflow-hidden">
          <Image
            src={img}
            alt="profile"
            objectFit="cover"
            width={54}
            height={54}
            className="rounded-full"
          />
        </figure>
        <div className=" pl-4">
          <h4 className="text-lg">elpepe</h4>
          <p className=" w-4/5 truncate text-sm text-textGrey">
            akslasdasdasdasdadkdksdfasdfasdla
          </p>
        </div>
      </span>
      <div className="flex w-12 flex-col items-center">
        <p className="py-1 text-xs">
          <time dateTime="2008-02-14 10:30">10:30</time>
          AM
        </p>
        <div className="flex h-6 w-6 min-w-max items-center justify-center rounded-full bg-primaryColor text-white">
          <p className="px-1 text-xs">12</p>
        </div>
      </div>
    </div>
  );
};
export default PreviewMessage;
