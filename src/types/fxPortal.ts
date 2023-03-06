import { BigNumberish } from 'ethers';
import { FxPortalChainIDType } from '../constants/fxPortal';

export type TransferViaFxPortalDTO = {
  srcChainID: FxPortalChainIDType;
  dstChainID: FxPortalChainIDType;
  tokenAddress: string;
  tokenURI: string;
  toAddress: string;
  tokenID: BigNumberish;
};
export type FxPortalDepositDTO = {
  rootToken: string;
  tokenID: BigNumberish;
  tokenURI: string;
  toAddress: string;
};

export type FxPortalWithdrawDTO = {
  childToken: string;
  tokenID: BigNumberish;
};
