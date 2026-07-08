import { FaInbox } from "react-icons/fa";

const NoData = () => {
  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-10">

      <div className="flex flex-col items-center">

        <FaInbox className="text-6xl text-zinc-500" />

        <h2 className="mt-5 text-2xl font-bold text-white">
          No Data Found
        </h2>

        <p className="mt-2 text-zinc-400">
          Nothing to display.
        </p>

      </div>

    </div>
  );
};

export default NoData;
