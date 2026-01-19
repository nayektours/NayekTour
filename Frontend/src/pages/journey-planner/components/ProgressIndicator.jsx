import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, steps }) => {
  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md mb-6 md:mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center space-y-2 flex-1">
              <div
                className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                  ${currentStep > index ? 'bg-accent text-white' : ''}
                  ${currentStep === index ? 'bg-primary text-white ring-4 ring-primary/20' : ''}
                  ${currentStep < index ? 'bg-muted text-muted-foreground' : ''}
                `}
              >
                {currentStep > index ? (
                  <Icon name="Check" size={20} color="#FFFFFF" />
                ) : (
                  <Icon name={step?.icon} size={20} color={currentStep === index ? '#FFFFFF' : 'currentColor'} />
                )}
              </div>
              <div className="text-center">
                <p
                  className={`
                    text-xs md:text-sm font-medium transition-colors duration-300
                    ${currentStep >= index ? 'text-foreground' : 'text-muted-foreground'}
                  `}
                >
                  {step?.label}
                </p>
              </div>
            </div>
            
            {index < steps?.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 md:mx-4 relative top-[-20px] md:top-[-24px]">
                <div
                  className={`
                    h-full transition-all duration-300
                    ${currentStep > index ? 'bg-accent' : 'bg-muted'}
                  `}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;