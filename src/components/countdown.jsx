import Countdown from "react-countdown";

const Counter = () => {
  const targetDate = new Date();
  targetDate.setFullYear(2025);
  targetDate.setMonth(7);
  targetDate.setDate(20);
  targetDate.setHours(14, 0, 0, 0);

  return (
    <>
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span className="bg-[#00000096]">⏳ زمان تمام شد!</span>;
          } else {
            return (
              <div className="flex gap-1 text-lg ">
                <div className="counter bg-[#00000096] rounded-l-lg">
                  <span className="text-shadow text-shadow-lg/5">روز</span>
                  <span className="p-1 rounded-lg ">{days}</span>
                </div>
                <div className="counter bg-[#00000096] ">
                  <span className="p-1 rounded-lg ">{hours}</span>
                </div>
                <div className="counter bg-[#00000096]">
                  <span className="p-1 rounded-lg ">{minutes}'</span>
                </div>
                <div className="counter bg-[#00000096] rounded-r-lg">
                  <span className="p-1 rounded-lg ">{seconds}"</span>
                </div>
              </div>
            );
          }
        }}
      />
    </>
  );
};

export default Counter;
