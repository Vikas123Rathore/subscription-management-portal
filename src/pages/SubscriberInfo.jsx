import React from "react";
import { FaUserTie } from "react-icons/fa";

const SubscriberInfo = ({
  register,
  errors,
  trigger,
  nextStep,
}) => {

  const handleNext = async () => {

    const isValid = await trigger([
      "fullName",
      "employeeId",
      "department",
    ]);

    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl">

      {/* Icon */}

      <div className="flex justify-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">

          <FaUserTie className="text-3xl text-white" />

        </div>

      </div>

      {/* Heading */}

      <h2 className="mt-5 text-center text-3xl font-bold text-white">
        Subscriber Information
      </h2>

      <p className="mt-2 text-center text-sm text-zinc-400">
        Enter your basic details to begin your subscription process.
      </p>

      {/* Full Name */}

      <div className="mt-8">

        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter full name"
          {...register("fullName")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}

      </div>

      {/* Employee ID */}

      <div className="mt-5">

        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Employee ID
        </label>

        <input
          type="text"
          placeholder="EMP1024"
          {...register("employeeId")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
        />

        {errors.employeeId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.employeeId.message}
          </p>
        )}

      </div>

      {/* Department */}

      <div className="mt-5">

        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Department
        </label>

        <select
          {...register("department")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
        >
          <option value="">Select Department</option>
          <option>Information Technology</option>
          <option>Human Resources</option>
          <option>Finance</option>
          <option>Sales</option>
          <option>Operations</option>
          <option>Customer Support</option>
        </select>

        {errors.department && (
          <p className="mt-1 text-sm text-red-500">
            {errors.department.message}
          </p>
        )}

      </div>

      {/* Button */}

      <button
        type="button"
        onClick={handleNext}
        className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-300"
      >
        Next →
      </button>

    </div>
  );
};

export default SubscriberInfo;
