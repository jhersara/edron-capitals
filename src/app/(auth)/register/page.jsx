'use client'
import { useState } from 'react'
import Step1Auth from '@/app/(auth)/register/steps/Step1Auth'
import Step2OTP from '@/app/(auth)/register/steps/Step2OTP'
import Step3Personal from '@/app/(auth)/register/steps/Step3Personal'
import Step4Adress from '@/app/(auth)/register/steps/Step4Adress'
import Step5KYC from '@/app/(auth)/register/steps/Step5KYC'
import Step6Financial from '@/app/(auth)/register/steps/Step6Financial'
import Step7Legal from '@/app/(auth)/register/steps/Step7Legal'
import Step9Result from '@/app/(auth)/register/steps/Step9Result'
import '@/app/(auth)/register/register.css'

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    privacy: false,
    
    // Step 2
    emailCode: '',
    phoneCode: '',
    
    // Step 3
    documentType: '',
    documentNumber: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    nationality: '',
    country: '',
    
    // Step 4
    address: '',
    city: '',
    state: '',
    postalCode: '',
    
    // Step 5
    documentFront: null,
    documentBack: null,
    selfie: null,
    
    // Step 6
    economicActivity: '',
    fundSource: '',
    incomeRange: '',
    investmentExp: '',
    
    // Step 7
    legalFunds: false,
    notRestricted: false,
    acceptRisks: false
  })

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Auth 
          next={handleNext} 
          data={formData}
          setData={updateFormData}
        />
      case 2:
        return <Step2OTP next={handleNext} back={handleBack} />
      case 3:
        return <Step3Personal next={handleNext} back={handleBack} />
      case 4:
        return <Step4Adress next={handleNext} back={handleBack} />
      case 5:
        return <Step5KYC next={handleNext} back={handleBack} />
      case 6:
        return <Step6Financial next={handleNext} back={handleBack} />
      case 7:
        return <Step7Legal next={handleNext} back={handleBack} />
      case 8:
        return <Step9Result />
      default:
        return <Step1Auth next={handleNext} />
    }
  }

  return (
    <div className="register">
      <div className="register__progress">
        <div style={{ width: `${(currentStep / 8) * 100}%` }}></div>
      </div>
      <div className="register__step">
        {renderStep()}
      </div>
    </div>
  )
}