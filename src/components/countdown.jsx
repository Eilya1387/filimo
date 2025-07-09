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
            return <span>⏳ زمان تمام شد!</span>;
          } else {
            return (
              <div className="flex gap-2">
                <div className="counter">
                  <span className="text-shadow text-shadow-lg/5">روز</span>
                  <span className="p-1 rounded-lg bg-black">{days}</span>
                </div>
                <div className="counter">
                  <span>ساعت</span>
                  <span  className="p-1 rounded-lg bg-black">{hours}</span>
                </div>
                <div className="counter">
                  <span>دقیقه</span>
                  <span className="p-1 rounded-lg bg-black">{minutes}</span>
                </div>
                <div className="counter">
                  <span>ثانیه</span>
                  <span className="p-1 rounded-lg bg-black">{seconds}</span>
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
