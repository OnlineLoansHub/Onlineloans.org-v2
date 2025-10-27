import Image from 'next/image';
import styles from './page.module.css';
import UIComponentsShowcase from '../components/ui/UIComponentsShowcase';

export default function Home() {
  return (
    <div>
      <main>
        <UIComponentsShowcase />
      </main>
    </div>
  );
}
