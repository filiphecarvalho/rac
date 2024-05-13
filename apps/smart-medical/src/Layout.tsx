import * as React from 'react';
import ThemeCustomization from './themes';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeCustomization>
        {children}                        
    </ThemeCustomization>
  );
}