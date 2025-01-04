export const content = [
  "./src/**/*.{html,ts,scss}",
  "./node_modules/flowbite/**/*.js",
  
];
export const theme = {
  extend: {},
  darkMode: 'class',
};
export const plugins = [
  require('flowbite/plugin') // add this line
];
