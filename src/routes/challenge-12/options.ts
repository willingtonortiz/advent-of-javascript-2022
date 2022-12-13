export type Option = 'rock' | 'paper' | 'scissors';

export const options: Option[] = ['rock', 'paper', 'scissors'];

export const getRandomRockPaperScissorsOption = (): Option => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
export const getRockPaperScissorsResult = (a: Option, b: Option): 'first' | 'second' | 'draw' => {
  if (a === 'rock' && b === 'scissors') return 'first';
  if (a === 'rock' && b === 'paper') return 'second';
  if (a === 'paper' && b === 'rock') return 'first';
  if (a === 'paper' && b === 'scissors') return 'second';
  if (a === 'scissors' && b === 'paper') return 'first';
  if (a === 'scissors' && b === 'rock') return 'second';
  return 'draw';
};

export const optionToImageUrl = (option: Option): string => {
  return `/challenge-12/${option}.png`;
};
