import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loading = () => {
  return (
    <>
      <div>
        <Skeleton width={"100%"} height={"100vh"} />
        <div>
          <Skeleton/>
          <Skeleton />
          <Skeleton />
        </div>
        <div>
          <Skeleton circle={true} />
          <Skeleton circle={true} />
        </div>
      </div>
    </>
  );
};

export default Loading;
