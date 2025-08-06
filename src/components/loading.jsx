import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loading = () => {
  return (
    <>
      <div>
        <Skeleton
          width={"100%"}
          height={"100vh"}
          baseColor="#202020"
          highlightColor="#444"
        />
        <div className="w-full flex flex-col gap-5 items-center sm:items-end -mt-90 -ml-0 sm:-ml-30">
          <Skeleton
            width={"20rem"}
            height={"6rem"}
            baseColor="#444"
            highlightColor="#202020"
          />
          <Skeleton
            width={"15rem"}
            height={"1rem"}
            baseColor="#444"
            highlightColor="#202020"
          />
          <Skeleton
            width={"12rem"}
            height={"3rem"}
            baseColor="#444"
            highlightColor="#202020"
          />
        </div>
        <div className="md:flex gap-1 ml-30 -mt-25 hidden">
          <Skeleton
            circle={true}
            width={"4rem"}
            height={"4rem"}
            baseColor="#444"
            highlightColor="#202020"
          />
          <Skeleton
            circle={true}
            width={"4rem"}
            height={"4rem"}
            baseColor="#444"
            highlightColor="#202020"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
