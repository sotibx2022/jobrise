'use client'
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ResponsiveButtonProps {
  text: string;
  icon: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({ text, icon: Icon, onClick, type }) => {
  const [hoverText, setHoverText] = useState(false)
  return (
    <Button
      onClick={onClick}
      type={type}
      className='relative'
      onMouseEnter={() => setHoverText(true)} onMouseLeave={() => setHoverText(false)}
    >
      <Icon size={20} />
      {hoverText && <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-primary sm:hidden bg-white px-2 z-2">{text}</span>}
      <span className="hidden sm:inline">{text}</span>
    </Button>
  );
};
export default ResponsiveButton;