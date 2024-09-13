/** @type {import('next').NextConfig} */
import scrollbarHide from 'tailwind-scrollbar';
const nextConfig = {
  reactStrictMode: true,
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
};

export default nextConfig;
