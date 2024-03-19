import { useContext } from "react";
import { NewsContext } from "../../context";

const NewsContent = () => {
  const { news } = useContext(NewsContext);

  const articlesWithImages = news?.articles?.filter(
    (article) => article.urlToImage
  );

  // Choose a random article from the filtered array
  const randomIndex = Math.floor(Math.random() * articlesWithImages?.length);
  const randomIndex1 = Math.floor(Math.random() * articlesWithImages?.length);
  const randomIndex2 = Math.floor(Math.random() * articlesWithImages?.length);
  const randomArticle = articlesWithImages?.[randomIndex];
  const randomArticle1 = articlesWithImages?.[randomIndex1];
  const randomArticle2 = articlesWithImages?.[randomIndex2];

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* <!-- left --> */}
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {/* <!-- news item --> */}

        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* <!-- info --> */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {randomArticle?.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{randomArticle?.content}</p>
            <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={randomArticle?.urlToImage}
              alt="thumb"
            />
            <p className="mt-5 text-base text-[#5C5955]">
              Illustration: {randomArticle?.author}
            </p>
          </div>
        </div>

        {/* <!-- news item --> */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
          {/* <!-- info --> */}
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {randomArticle1?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              {randomArticle1?.content}
            </p>
            <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 md:col-span-6">
            <img
              className="w-full"
              src={randomArticle1?.urlToImage}
              alt="thumb"
            />
          </div>
        </div>
        {/* <!-- news item ends --> */}
        {/* <!-- news item --> */}
        {news?.articles?.map((data) => (
          <div
            key={data.title}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                  {data.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{data.content}</p>
              <p className="mt-5 text-base text-[#94908C]">Yesterday</p>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- right --> */}
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {/* <!-- news item --> */}
          <div className="col-span-12 mb-6 md:col-span-8">
            <img
              className="w-full"
              src={randomArticle2?.urlToImage}
              alt="thumb"
            />

            {/* <!-- info --> */}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {randomArticle2?.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                {randomArticle2?.content}
              </p>
              <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
            </div>
          </div>
          {news?.articles?.map((data) => (
            <div key={data.title} className="col-span-12 mb-6 md:col-span-8">
              {/* {data.urlToImage && (
                <img
                  className="w-full"
                  src={randomArticle2.urlToImage}
                  alt="thumb"
                />
              )} */}
              {/* <!-- info --> */}
              <div className="col-span-12 mt-6 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                    {data.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">{data.content}</p>
                <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
