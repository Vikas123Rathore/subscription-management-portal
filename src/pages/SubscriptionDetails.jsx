import React from "react";

const SubscriptionDetails = ({
  register,
  errors,
  trigger,
  nextStep,
  prevStep,
}) => {

  const handleNext = async () => {

    const isValid = await trigger([
      "email",
      "subscriptionPlan",
      "billingCycle",
    ]);

    if (isValid) {
      nextStep();
    }

  };

  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl">

      {/* Heading */}

      <h2 className="text-3xl font-bold text-white text-center">
        Subscription Details
      </h2>

      <p className="text-zinc-400 text-center mt-2">
        Choose your subscription preferences.
      </p>

      {/* Email */}

      <div className="mt-8">

        <label className="block text-zinc-300 mb-2">
          Email Address
        </label>

        <input
          type="email"
          placeholder="example@email.com"
          {...register("email")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-white"
        />

        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* Subscription Plan */}

      <div className="mt-5">

        <label className="block text-zinc-300 mb-2">
          Subscription Plan
        </label>

        <select
          {...register("subscriptionPlan")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-white"
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        {errors.subscriptionPlan && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.subscriptionPlan.message}
          </p>
        )}

      </div>

      {/* Billing Cycle */}

      <div className="mt-5">

        <label className="block text-zinc-300 mb-2">
          Billing Cycle
        </label>

        <select
          {...register("billingCycle")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-white"
        >
          <option value="">Select Billing</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>

        {errors.billingCycle && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.billingCycle.message}
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

export default SubscriptionDetails;
