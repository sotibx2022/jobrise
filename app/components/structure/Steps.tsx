import React from 'react';
interface StepsProps {
    stepsLength: number;
    currentStep: number;
}
const Steps: React.FC<StepsProps> = ({ stepsLength, currentStep }) => {
    currentStep = 0 ? 1 : currentStep;
    const progressPercent = stepsLength > 1
        ? ((currentStep) / (stepsLength-1)) * 100
        : 0;
    return (
        <section className="relative w-full my-4">
            <div className="relative w-full h-4 bg-primary rounded-full overflow-hidden">
                <div
                    style={{ width: `${progressPercent}%` }}
                    className="h-full bg-secondary transition-all duration-300"
                />
            </div>
            <ul className="absolute top-0 left-0 w-full h-full flex justify-between transform -translate-y-1/2">
                {Array.from({ length: stepsLength }).map((_, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber <= currentStep;
                    return (
                        <li
                            key={index}
                            className={`
                                w-8 h-8 rounded-full flex items-center justify-center
                                ${isActive ? 'bg-secondary text-white' : 'bg-primary text-background'}
                                transition-colors duration-200
                            `}
                        >
                            {stepNumber}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default Steps;