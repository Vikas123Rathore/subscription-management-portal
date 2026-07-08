import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import ProgressBar from './components/ProgressBar'

import SubscriberInfo from './pages/SubscriberInfo'
import SubscriptionDetails from './pages/SubscriptionDetails'
import SecuritySetup from './pages/SecuritySetup'
import ReviewSubmit from './pages/ReviewSubmit'

import Success from './components/Success'
import Loading from './components/Loading'

import { formSchema } from './schema/formSchema'
import { sanitizeFormData } from './utils/sanitize'

const App = () => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const onSubmit = (data) => {
    const cleanData = sanitizeFormData(data)

    setLoading(true)

    setTimeout(() => {
      console.log(cleanData)

      console.log(
        '[Analytics] User interacted with Subscription Validation System',
      )

      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Success />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-5">
      <div className="w-full max-w-lg">
        <ProgressBar step={step} totalSteps={4} />

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && (
            <SubscriberInfo
              register={methods.register}
              errors={methods.formState.errors}
              trigger={methods.trigger}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <SubscriptionDetails
              register={methods.register}
              errors={methods.formState.errors}
              trigger={methods.trigger}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <SecuritySetup
              register={methods.register}
              errors={methods.formState.errors}
              trigger={methods.trigger}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 4 && (
            <ReviewSubmit
              formData={methods.getValues()}
              prevStep={prevStep}
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default App
