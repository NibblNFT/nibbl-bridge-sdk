import { BigNumberish } from 'ethers';
import { LzChainIDType } from '../constants/layerZero';

export type TransferViaLayerZeroDTO = {
  srcChainID: LzChainIDType;
  dstChainID: LzChainIDType;
  tokenAddress: string;
  tokenID: BigNumberish;
  toAddress: string;
};
export type LayerZeroSendNFTDTO = {
  srcChainID: LzChainIDType;
  dstChainID: LzChainIDType;
  tokenAddress: string;
  tokenID: BigNumberish;
  to: string;
};
