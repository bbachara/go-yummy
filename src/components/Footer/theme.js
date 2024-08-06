export const theme = {
  breakpoints: ['375px', '768px', '1440px'],

  fonts: {
    Poppins: "'Poppins', sans-serif",
  },

  fontSizes: [
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '24px',
    '28px',
    '44px',
    '48px',
    '100px',
    '32px',
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  colors: {
    white: {
      100: '#FFFFFF',
      200: '#FAFAFA',
      300: '#EFEFEF',
      400: '#F5F5F5',
    },
    black: {
      100: '#000000',
      200: '#23262A',
      300: '#2A2C36',
      400: '#22252A',
      500: '#1E1F28',
    },
    green: {
      100: '#EBF3D4',
      200: '#8BAA36',
      300: '#3CBC81',
      400: '#656565',
    },
    gray: {
      100: '#BDBDBD',
      200: '#D9D9D9',
      300: '#333333',
      400: '#001833',
      500: '#3E4462',
      600: '#E0E0E0',
      700: '#707070',
      800: '#7E7E7E',
      900: '#656565',
    },
    red: {
      100: '#e74a3b',
    },
  },

  transitions: {
    create: createTransitions,
    duration: '250ms',
    easy: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

function createTransitions(
  properties = [],
  duration = '250ms',
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
) {
  return properties
    .map(property => `${property} ${duration} ${easing}`)
    .join(', ');
}

theme.breakpoints.mobile = theme.breakpoints[0];
theme.breakpoints.tablet = theme.breakpoints[1];
theme.breakpoints.desktop = theme.breakpoints[2];