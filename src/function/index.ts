import { BigNumber } from 'ethers';
import { ChainIDs } from '../constants';

export function topupGas(gasLimit: BigNumber): BigNumber {
  return gasLimit.mul(140).div(100);
}

export function includesPolygonChainID(...chainIDs: ChainIDs[]): boolean {
  for (let index = 0; index < chainIDs.length; index++) {
    const chainID = chainIDs[index];

    if (
      chainID.valueOf() === ChainIDs.MUMBAI ||
      chainID.valueOf() === ChainIDs.POLYGON
    ) {
      return true;
    }
  }

  return false;
}

export function isArbitrumChainID(...chainIDs: ChainIDs[]): boolean {
  for (let index = 0; index < chainIDs.length; index++) {
    const chainID = chainIDs[index];
    if (
      chainID.valueOf() !== ChainIDs.ARBITRUM_GOERLI &&
      chainID.valueOf() !== ChainIDs.ARBITRUM_ONE
    ) {
      return false;
    }
  }

  return true;
}

// export function isArbitrumChainID(
//   ...chainIDs: ChainIDs[]
// ): boolean {

//   for (let index = 0; index < chainIDs.length; index++) {
//     const chainID = chainIDs[index];
//     if ((chainID !== ChainIDs.ARBITRUM_ONE) || (chainID !== ChainIDs.ARBITRUM_GOERLI)) {
//       return false
//     }
//   }

//   return true
// }
