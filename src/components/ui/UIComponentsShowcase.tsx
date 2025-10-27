'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import AmountInput from './AmountInput';

const UIComponentsShowcase = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        UI Components
      </h1>

      {/* Primary Buttons */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Primary Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <PrimaryButton onClick={handleClick}>
            Apply for Loan
          </PrimaryButton>
          <PrimaryButton onClick={handleClick}>
            Get Pre-approved
          </PrimaryButton>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <PrimaryButton disabled>
            Disabled Primary
          </PrimaryButton>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Secondary Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <SecondaryButton onClick={handleClick}>
            Learn More
          </SecondaryButton>
          <SecondaryButton onClick={handleClick}>
            Contact Support
          </SecondaryButton>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SecondaryButton disabled>
            Disabled Secondary
          </SecondaryButton>
        </div>
      </div>

      {/* Amount Input Buttons */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Amount Input Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <AmountInput onClick={handleClick}>
            $5,000
          </AmountInput>
          <AmountInput onClick={handleClick}>
            $10,000
          </AmountInput>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <AmountInput disabled>
            Disabled Amount
          </AmountInput>
        </div>
      </div>

      {/* Form Example */}
      <div>
        <h2>Form Example</h2>
        <div style={{ 
          border: '1px solid #e2e8f0', 
          padding: '1.5rem', 
          borderRadius: '8px',
          maxWidth: '500px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Loan Application</h3>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <PrimaryButton onClick={handleClick}>
              Apply Now
            </PrimaryButton>
            <SecondaryButton onClick={handleClick}>
              Save Draft
            </SecondaryButton>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <AmountInput onClick={handleClick}>
              $5,000
            </AmountInput>
            <AmountInput onClick={handleClick}>
              $15,000
            </AmountInput>
            <AmountInput onClick={handleClick}>
              $25,000
            </AmountInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIComponentsShowcase;