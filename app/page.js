import Feed from "@components/Feed";

const Home = () => (
  <>
  <section className="w-full h-max flex flex-col md:flex-row items-center justify-center md:justify-between">
    <div className="flex-[0.55] desc min-[900px]:w-1/2 text-center md:text-left">
      <h1 className="head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="desc">
        Promptopia is an open-source AI prompting tool for the modern world to
        discover, create, and share creative prompts.
      </p>
    </div>
    <div className=" flex-[0.45] hidden min-[900px]:flex md:w-1/2 justify-center">
      <img
        src="/assets/images/prompmtopia_photo.jpg"
        alt="Image"
        className="max-w-full h-auto md:max-w-xs rounded-md"
      />
    </div>
  </section>
  <Feed/>
  </>
);

export const revalidate = 0;
export default Home;
