import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-10 shadow-2xl">

      <div className="flex flex-col items-center">

        <FaCheckCircle className="text-7xl text-green-500" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Subscription Created
        </h2>

        <p className="mt-3 text-center text-zinc-400">
          Your subscription has been created successfully.
        </p>

      </div>

    </div>
  );
};

export default Success;
