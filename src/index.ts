import { ChainIDs } from "./constants/ChainIDs";

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
export const sum1 = (a: ChainIDs, b: ChainIDs) => {
  return a + b;
};


console.log(sum1(ChainIDs.MAINNET, ChainIDs.GOERLI));

