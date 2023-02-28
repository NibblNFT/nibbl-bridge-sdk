import { BigNumberish } from 'ethers';

export type FxPortalDepositDTO = {
  rootToken: string;
  tokenID: BigNumberish;
  tokenURI: string;
  user: string;
};

export type FxPortalWithdrawDTO = {
  childToken: string;
  tokenID: BigNumberish;
};
