import React from 'react';
import classNames from 'classnames';

import './StepProgress.scss';

const StepProgress = ({ stepsCount = 0, currentStep = 0 }) => {
  const steps = Array.from(Array(stepsCount).keys());

  return (
    <div className="circles-panel">
      {steps.map((item, idx) => {
        const isSelected = currentStep >= idx + 1;

        return (
          <span
            className={classNames('dot', {
              selected: isSelected,
            })}
            key={`circle-${item}`}
          >
            {idx + 1}
          </span>
        );
      })}
    </div>
  );
};

export default StepProgress;
