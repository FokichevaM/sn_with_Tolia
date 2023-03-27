import React, { useRef, useState } from 'react';
import StepWizard from 'react-step-wizard';

import AuthLayout from '../../components/AuthLayout';
import StepProgress from '../../components/StepProgress';
import BasicInformation from './steps/BasicInformation';
import AdditionalInformation from './steps/AdditionalInformation';
import Interests from './steps/Interests';

import './SignUpPage.scss';

const SignUpPage = () => {
  const [wizardProps, setWizardProps] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  const goToNamedStep = wizardProps?.goToNamedStep;

  const stepsCount = wizardProps?.props.children.length;

  return (
    <AuthLayout>
      <StepProgress
        stepsCount={stepsCount}
        currentStep={activeStep}
      ></StepProgress>
      <StepWizard
        onStepChange={(state) => setActiveStep(state.activeStep)}
        instance={setWizardProps}
        transitions={0}
        initialStep={3}
      >
        <BasicInformation stepName={'basic'} goToNamedStep={goToNamedStep} />
        <AdditionalInformation
          stepName={'additional'}
          goToNamedStep={goToNamedStep}
        />
        <Interests stepName={'interests'} />
      </StepWizard>
    </AuthLayout>
  );
};

export default SignUpPage;
