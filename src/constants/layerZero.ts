import { ChainIDs } from './ChainIDs';

export type LayerZeroRootChainIDType = ChainIDs.MAINNET | ChainIDs.GOERLI;
export type LayerZeroChildChainIDType =
  | ChainIDs.ARBITRUM_ONE
  | ChainIDs.ARBITRUM_GOERLI;

export const LzChainIDs: Record<
  LayerZeroRootChainIDType | LayerZeroChildChainIDType,
  number
> = {
  [ChainIDs.MAINNET]: 101,
  [ChainIDs.ARBITRUM_ONE]: 110,
  [ChainIDs.GOERLI]: 10121,
  [ChainIDs.ARBITRUM_GOERLI]: 10143,
};

// NFT to ONFTProxy map
export const LAYER_ZERO_ONFT_MAP: Record<
  LayerZeroRootChainIDType,
  Record<string, string>
> = {
  [ChainIDs.GOERLI]: {
    '0xC1dA1b898c0247356E14ef327E9fc6C86a816697':
      '0x3706AA66C756962Fbf7fEeBDE42dBB35C2c06D94',
  },
  [ChainIDs.MAINNET]: {},
};
