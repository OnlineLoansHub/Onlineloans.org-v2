/**
 * Example usage of IframeEmbed component
 * This file is for reference only - delete if not needed
 */

import { IframeEmbed } from '@/components/iframes';

// Example 1: Basic usage
export function BasicExample() {
  return (
    <div>
      <h2>Personal Loan Application</h2>
      <IframeEmbed iframeId="personal-loan-form-1" />
    </div>
  );
}

// Example 2: With custom height and callbacks
export function CustomExample() {
  return (
    <div>
      <h2>Apply for a Personal Loan</h2>
      <IframeEmbed
        iframeId="personal-loan-form-1"
        customConfig={{
          height: '1000px',
        }}
        onLoad={() => {
          console.log('Form loaded successfully!');
        }}
        onError={() => {
          console.error('Failed to load form');
        }}
      />
    </div>
  );
}

// Example 3: Multiple iframes on the same page
export function MultipleIframesExample() {
  return (
    <div>
      <section>
        <h2>Form Option 1</h2>
        <IframeEmbed iframeId="personal-loan-form-1" />
      </section>
      <section>
        <h2>Form Option 2</h2>
        <IframeEmbed iframeId="personal-loan-form-2" />
      </section>
    </div>
  );
}

// Example 4: In an article or content page
export function ArticleExample() {
  return (
    <article>
      <h1>How to Apply for a Personal Loan</h1>
      <p>Fill out the form below to get started...</p>
      <IframeEmbed iframeId="personal-loan-form-1" />
      <p>After submitting, you'll receive offers from multiple lenders.</p>
    </article>
  );
}
