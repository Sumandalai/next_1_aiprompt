import Feed from "@components/Feed";
import Image from "next/image";
const Home = () => (
  <div className='w-full flex-center flex-col'>
    <div className="flex gap-2">
    <div className="lg:text-left">
    <h1 className='head_text text-center lg:text-left'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center lg:text-left'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center lg:text-left'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    </div>
    <div className="hidden lg:block">
    <Image
        src='/assets/images/prompmtopia_photo.jpg'
        alt="Image"
        width={300}
        height={300}
        className="max-w-full h-auto md:max-w-xs rounded-md object-contain"
      />
    </div>
    </div>

    <Feed />
  </div>
);
export const revalidate = 0;
export default Home;