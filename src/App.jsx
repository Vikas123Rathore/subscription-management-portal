import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ProgressBar from "./components/ProgressBar";
import SubscriberInfo from "./pages/SubscriberInfo";

import { formSchema } from "./schema/formSchema";

const App = () => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-5">

      <div className="w-full max-w-lg">

        <ProgressBar step={step} totalSteps={4} />

        <form>

          {step === 1 && (
            <SubscriberInfo
              register={methods.register}
              errors={methods.formState.errors}
              trigger={methods.trigger}
              nextStep={nextStep}
            />
          )}

        </form>

      </div>

    </div>
  );
};

export default App;
