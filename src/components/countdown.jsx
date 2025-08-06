import Countdown from "react-countdown";

const Counter = () => {
  const targetDate = new Date();
  targetDate.setFullYear(2025);
  targetDate.setMonth(6);
  targetDate.setDate(22);
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
              <div className="flex gap-1 text-lg">
                <div className="counter rounded-l-lg">
                  <span>روز</span>
                  <span className="p-1">{days}</span>
                </div>
                <div className="counter ">
                  <span className="p-1">{hours}</span>
                </div>
                <div className="counter">
                  <span className="p-1">{minutes}'</span>
                </div>
                <div className="counter rounded-r-lg">
                  <span className="p-1">{seconds}"</span>
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
