'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';

// Example usage of PrimaryButton component
const PrimaryButtonExamples = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>PrimaryButton Examples</h2>
      
      {/* Basic Usage */}
      <div>
        <h3>Basic Usage</h3>
        <PrimaryButton onClick={handleClick}>
          Apply Now
        </PrimaryButton>
      </div>

      {/* Button States */}
      <div>
        <h3>Button States</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <PrimaryButton>Default State</PrimaryButton>
          <PrimaryButton disabled>Disabled State</PrimaryButton>
        </div>
      </div>

      {/* As Link */}
      <div>
        <h3>As Link</h3>
        <PrimaryButton href="/apply">
          Apply for Loan
        </PrimaryButton>
      </div>

      {/* Submit Button */}
      <div>
        <h3>Submit Button</h3>
        <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted!'); }}>
          <PrimaryButton type="submit">
            Submit Application
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default PrimaryButtonExamples;