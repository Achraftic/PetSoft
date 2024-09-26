import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#E2DFD0',
  			secondary: '#32012F',
  			primary: '#F97300',
  			focus: '#524C42',
  			light: '#EEEEEE'
  		},
		//   colors: {
		// 	background: '#F5F7FA',  // Light and soft background color
		// 	secondary: '#1F2937',   // Dark charcoal for contrast, great for text and dark elements
		// 	primary: '#4F46E5',     // A vibrant indigo for primary actions like buttons
		// 	focus: '#60A5FA',       // A bright blue for focus/active states, adds visual interest
		// 	light: '#FFFFFF',       // Clean white for cards or sections to stand out against the background
		//   }

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
