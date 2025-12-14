# Iframe Embed System

A reusable iframe component system for embedding stepper forms and other iframes throughout the website.

## Setup

All 4 iframes are already configured in `iframeConfig.ts`:

- `PL-LeadStackStyle1` - iframe.global with style=1
- `PL-LeadStackStyle2` - iframe.global with style=2
- `PL-LeadStackStyle3` - iframe.lowcreditfinance.com with dynamic height
- `PL-LeadStackStyle4` - iframe.vivapaydayloans.com with dynamic height

To add more iframes, add them to `iframeConfig.ts`:

```typescript
export const iframeConfigs: Record<string, IframeConfig> = {
  'your-iframe-id': {
    id: 'your-iframe-id',
    name: 'Your Iframe Name',
    src: 'https://your-iframe-url.com/form',
    title: 'Your Iframe Title',
    // ... other config options
  },
};
```

## Usage

### Basic Usage

```tsx
import { IframeEmbed } from '@/components/iframes';

export default function MyPage() {
  return (
    <div>
      <IframeEmbed iframeId="PL-LeadStackStyle1" />
    </div>
  );
}
```

### Available Iframe IDs

- `PL-LeadStackStyle1` - Style 1 from iframe.global
- `PL-LeadStackStyle2` - Style 2 from iframe.global
- `PL-LeadStackStyle3` - Dynamic height iframe from lowcreditfinance.com
- `PL-LeadStackStyle4` - Dynamic height iframe from vivapaydayloans.com

### With Custom Configuration

```tsx
import { IframeEmbed } from '@/components/iframes';

export default function MyPage() {
  return (
    <div>
      <IframeEmbed
        iframeId="PL-LeadStackStyle1"
        customConfig={{
          height: '1000px',
          className: 'my-custom-class',
        }}
        onLoad={() => console.log('Iframe loaded!')}
        onError={() => console.error('Iframe failed to load')}
      />
    </div>
  );
}
```

### Multiple Iframes

```tsx
import { IframeEmbed } from '@/components/iframes';

export default function MyPage() {
  return (
    <div>
      <IframeEmbed iframeId="PL-LeadStackStyle1" />
      <IframeEmbed iframeId="PL-LeadStackStyle2" />
    </div>
  );
}
```

## Configuration Options

- `id`: Unique identifier for the iframe
- `name`: Name attribute for the iframe
- `src`: URL of the iframe content
- `title`: Accessibility title
- `width`: Width (default: '100%')
- `height`: Height (default: '800px')
- `allowFullScreen`: Allow fullscreen (default: true)
- `sandbox`: Array of sandbox restrictions
- `loading`: 'lazy' or 'eager' (default: 'lazy')
- `className`: Additional CSS classes

## Features

- ✅ Loading state with spinner
- ✅ Error handling
- ✅ Responsive design
- ✅ Lazy loading support
- ✅ Easy configuration management
- ✅ TypeScript support
- ✅ Customizable styling
