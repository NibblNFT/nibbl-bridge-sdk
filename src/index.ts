import { ChainIDs } from "./constants";

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  let x = 137;
  console.log((x == (ChainIDs.MUMBAI | ChainIDs.POLYGON)));
  
  return a + b;
};



sum(1, 4)