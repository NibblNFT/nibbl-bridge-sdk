import { BigNumberish } from 'ethers';

export type BridgeDepositDTO = {
  rootToken: string;
  tokenID: BigNumberish;
  tokenURI: string;
  user: string;
};

export type BridgeWithdrawDTO = {
  childToken: string;
  tokenID: BigNumberish;
};
