const ProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mb-8">

      {/* Step Text */}
      <div className="flex justify-between items-center mb-2 flex-col gap-2">

        <h2 className="text-xl font-semibold text-white">
          Subscription Validation System
        </h2>

        <span className="text-sm text-zinc-400">
          Step {step} of {totalSteps}
        </span>

      </div>

      {/* Progress Bar */}

      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">

        <div
          className="h-full bg-white rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
};

export default ProgressBar;
