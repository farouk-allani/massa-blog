import NcImage from "../components/NcImage/NcImage";
import SingleContent from "../components/SingleContent";
import SingleHeader from "../components/SingleHeader";
import SingleRelatedPosts from "../components/SingleRelatedPosts";

const PostPage = () => {
  return (
    <>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          alt="single"
          containerClassName="container my-10 sm:my-12"
          className="w-full rounded-xl"
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />
      </div>
      <div className="container mt-10">
        <SingleContent />
      </div>
      {/* RELATED POSTS */}
      <SingleRelatedPosts />
    </>
  );
};

export default PostPage;
