import { BigNumber } from 'ethers';
import { ChainIDs } from '../constants';

export function topupGas(gasLimit: BigNumber): BigNumber {
  return gasLimit.mul(140).div(100);
}

export function isPolygonChainID(chainID: ChainIDs): boolean {
  return chainID === ChainIDs.MUMBAI || chainID === ChainIDs.POLYGON;
}

export function isArbitrumChainID(chainID: ChainIDs): boolean {
  return (
    chainID === ChainIDs.ARBITRUM_GOERLI || chainID === ChainIDs.ARBITRUM_ONE
  );
}
