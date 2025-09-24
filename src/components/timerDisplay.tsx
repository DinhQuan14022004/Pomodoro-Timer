import { toHHMMSS } from '../untils/time';

export default function TimerDisplay({ count }: { count: number }) {
  return <h1 className=" mb-4 text-white">{toHHMMSS(count)}</h1>;
}
