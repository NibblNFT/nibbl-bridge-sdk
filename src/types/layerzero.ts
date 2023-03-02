import { BigNumberish } from 'ethers';
import {
  LayerZeroChildChainIDType,
  LayerZeroRootChainIDType,
} from '../constants';

export type LayerZeroSendNFTDTO = {
  tokenAddress: string;
  tokenID: BigNumberish;
  to: string;
  srcChainID: LayerZeroRootChainIDType;
  dstChainID: LayerZeroChildChainIDType;
};
