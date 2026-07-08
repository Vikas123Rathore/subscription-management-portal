import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const SecuritySetup = ({
  register,
  errors,
  trigger,
  nextStep,
  prevStep,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleNext = async () => {
    const isValid = await trigger([
      "password",
      "confirmPassword",
    ]);

    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl">

      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center">
          <FaLock className="text-3xl text-white" />
        </div>
      </div>

      <h2 className="mt-5 text-center text-3xl font-bold text-white">
        Security Setup
      </h2>

      <p className="mt-2 text-center text-zinc-400">
        Create a secure password for your subscription account.
      </p>

      {/* Password */}

      <div className="mt-8">

        <label className="block mb-2 text-zinc-300">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 pr-12 text-white outline-none focus:border-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}

      </div>

      {/* Confirm Password */}

      <div className="mt-5">

        <label className="block mb-2 text-zinc-300">
          Confirm Password
        </label>

        <div className="relative">

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            {...register("confirmPassword")}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 pr-12 text-white outline-none focus:border-white"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4">

        <button
          type="button"
          onClick={prevStep}
          className="w-full rounded-xl border border-zinc-600 py-3 text-white hover:bg-zinc-800"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-zinc-300"
        >
          Next →
        </button>

      </div>

    </div>
  );
};

export default SecuritySetup;
