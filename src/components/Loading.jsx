import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-10 shadow-2xl">

      <div className="flex flex-col items-center">

        <FaSpinner className="animate-spin text-5xl text-white" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Processing...
        </h2>

        <p className="mt-2 text-center text-zinc-400">
          Please wait while we validate your subscription details.
        </p>

      </div>

    </div>
  );
};

export default Loading;
