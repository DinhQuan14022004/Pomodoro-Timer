type Props = {
  started: boolean;
  running: boolean;
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
  handleAddMinute: (minute: number) => void;
};
export default function TimerControl({
  started,
  running,
  handleStart,
  handleReset,
  handleStop,
  handleAddMinute,
}: Props) {
  return (
    <div>
      <div className="text-white text-[14px] m-[10px] flex">
        <p
          className="cursor-pointer m-[10px] select-none active:scale-95 transition"
          onClick={() => handleAddMinute(1500)}
        >
          + 25 min
        </p>
        <p
          className="cursor-pointer m-[10px] select-none active:scale-95 transition"
          onClick={() => handleAddMinute(600)}
        >
          + 10 min
        </p>
        <p
          className="cursor-pointer m-[10px] select-none active:scale-95 transition"
          onClick={() => handleAddMinute(300)}
        >
          + 5 min
        </p>
        <p
          className="cursor-pointer m-[10px] select-none  active:scale-95 transition"
          onClick={() => handleAddMinute(60)}
        >
          + 1 min
        </p>
      </div>
      <div className="text-white space-x-2 flex justify-center">
        {running || started ? (
          <>
            {running ? (
              <button onClick={handleStop} className="bg-[#27272a] px-4 py-2 rounded ">
                Pause
              </button>
            ) : (
              <button onClick={handleStart} className="bg-[#27272a] px-4 py-2 rounded">
                Resume
              </button>
            )}

            <button onClick={handleReset} className="bg-[#27272a] px-4 py-2 rounded">
              Reset
            </button>
          </>
        ) : (
          <button
            onClick={handleStart}
            className="bg-[#27272a] px-4 py-2 rounded justify-self-center"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
