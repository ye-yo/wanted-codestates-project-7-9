const color = {
  black: '#000',
  white: '#fff',
  gray: '#999',
  lightgray: '#E0E0E0',
  blue: '#4348a2',
  borderBlue: '#868ceb',
  backBlue: '#e7e8f9',
  backLightGray: '#f9f9f9',
};

const buttonBlueBorder = {
  border: `1px solid ${color.borderBlue}`,
  color: color.blue,
  background: 'none',
};

const buttonBlue = {
  border: 0,
  color: color.blue,
  backgroundColor: color.backBlue,
};

const theme = {
  color,
  buttonBlue,
  buttonBlueBorder,
};

export default theme;
