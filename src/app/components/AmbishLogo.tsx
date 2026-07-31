"use client";

interface AmbishLogoProps {
  className?: string;
  width?: number;
  /** Kept for API compatibility with existing usages */
  variant?: 'dark' | 'light';
}

export default function AmbishLogo({
  className,
  width = 200,
}: AmbishLogoProps) {
  return (
    <img
      src="/ambish-logo.png"
      alt="Ambish Engineering – Construction Machinery"
      width={width}
      className={className}
      style={{ height: 'auto' }}
    />
  );
}
