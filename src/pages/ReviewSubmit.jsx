import {
  FaUser,
  FaIdBadge,
  FaBuilding,
  FaEnvelope,
  FaClipboardCheck,
} from "react-icons/fa";

const ReviewSubmit = ({ formData, prevStep }) => {
  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl">

      {/* Heading */}

      <div className="flex flex-col items-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
          <FaClipboardCheck className="text-3xl text-white" />
        </div>

        <h2 className="mt-5 text-3xl font-bold text-white">
          Review & Submit
        </h2>

        <p className="mt-2 text-center text-zinc-400">
          Please verify your information before submission.
        </p>

      </div>

      {/* Subscriber Information */}

      <div className="mt-8 rounded-2xl border border-zinc-700 bg-zinc-800 p-5">

        <h3 className="mb-5 text-lg font-semibold text-white">
          Subscriber Information
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">

            <div className="flex items-center gap-2 text-zinc-400">
              <FaUser />
              <span>Full Name</span>
            </div>

            <span className="text-white">
              {formData.fullName}
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex items-center gap-2 text-zinc-400">
              <FaIdBadge />
              <span>Employee ID</span>
            </div>

            <span className="text-white">
              {formData.employeeId}
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex items-center gap-2 text-zinc-400">
              <FaBuilding />
              <span>Department</span>
            </div>

            <span className="text-white">
              {formData.department}
            </span>

          </div>

        </div>

      </div>

      {/* Subscription Details */}

      <div className="mt-6 rounded-2xl border border-zinc-700 bg-zinc-800 p-5">

        <h3 className="mb-5 text-lg font-semibold text-white">
          Subscription Details
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">

            <div className="flex items-center gap-2 text-zinc-400">
              <FaEnvelope />
              <span>Email</span>
            </div>

            <span className="text-white">
              {formData.email}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-zinc-400">
              Subscription Plan
            </span>

            <span className="text-white">
              {formData.subscriptionPlan}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-zinc-400">
              Billing Cycle
            </span>

            <span className="text-white">
              {formData.billingCycle}
            </span>

          </div>

        </div>

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
          type="submit"
          className="w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-zinc-300"
        >
          Submit →
        </button>

      </div>

    </div>
  );
};

export default ReviewSubmit;
