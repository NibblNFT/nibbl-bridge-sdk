export enum ChainIDs {
  MAINNET = 1,
  GOERLI = 5,
  POLYGON = 137,
  ARBITRUM_ONE = 42161,
  MUMBAI = 80001,
  ARBITRUM_GOERLI = 421613,
}

//
export type FxPortalRootChainIDType = ChainIDs.MAINNET | ChainIDs.GOERLI;
export type FxPortalChildChainIDType = ChainIDs.POLYGON | ChainIDs.MUMBAI;
