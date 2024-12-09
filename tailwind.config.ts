import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBLAck: '#000000',
        background: '#FBEBB5',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
