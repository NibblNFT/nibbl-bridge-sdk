import { BigNumberish } from 'ethers';
import {
  LayerZeroChildChainIDType,
  LayerZeroRootChainIDType,
} from '../constants';

export type LayerZeroSendNFTDTO = {
  rootToken: string;
  tokenID: BigNumberish;
  to: string;
  srcChainID: LayerZeroRootChainIDType;
  dstChainID: LayerZeroChildChainIDType;
};
