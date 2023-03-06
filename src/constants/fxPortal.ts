import { ChainIDs } from './ChainIDs';

export type FxPortalRootChainIDType = ChainIDs.MAINNET | ChainIDs.GOERLI;
export type FxPortalChildChainIDType = ChainIDs.POLYGON | ChainIDs.MUMBAI;

export type FxPortalChainIDType =
  | FxPortalRootChainIDType
  | FxPortalChildChainIDType;

export enum FxPortalTxType {
  DEPOSIT,
  WITHDRAW,
}

export const FxPortalRootToChildChainIDMap: Record<
  FxPortalRootChainIDType,
  FxPortalChildChainIDType
> = {
  [ChainIDs.MAINNET]: ChainIDs.POLYGON,
  [ChainIDs.GOERLI]: ChainIDs.MUMBAI,
};

export const FxPortalChildToRootChainIDMap: Record<
  FxPortalChildChainIDType,
  FxPortalRootChainIDType
> = {
  [ChainIDs.POLYGON]: ChainIDs.MAINNET,
  [ChainIDs.MUMBAI]: ChainIDs.GOERLI,
};

export const FxRootTunnelAddress: Record<FxPortalRootChainIDType, string> = {
  [ChainIDs.MAINNET]: '0x7857a53a3D280775987288cFeaF18b1143137392',
  [ChainIDs.GOERLI]: '0x3ECA1FE779bb0843e13DC7D4f5cb8e043328Bc4C',
};

export const FxChildTunnelAddress: Record<FxPortalChildChainIDType, string> = {
  [ChainIDs.POLYGON]: '0x6B714615E28aE79385bDAE1f14c2e49277fdae6C',
  [ChainIDs.MUMBAI]: '0xC1dA1b898c0247356E14ef327E9fc6C86a816697',
};
