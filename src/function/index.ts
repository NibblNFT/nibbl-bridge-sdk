import { BigNumber } from 'ethers';

export function topupGas(gasLimit: BigNumber): BigNumber {
  return gasLimit.mul(140).div(100);
}
