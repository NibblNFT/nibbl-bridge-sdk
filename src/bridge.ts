import { BigNumberish } from 'ethers';
import { ChainIDs, FxPortalChildChainIDType, FxPortalRootChainIDType } from './constants';
import { SignerOrProvider } from './types';
import { FxPortalERC721 } from './fxPortal';
import { isArbitrumChainID, isPolygonChainID } from './function';
import { FxPortal_TxType } from './constants/fxPortal';

export class Bridge {
  signerOrProvider: SignerOrProvider;
  constructor(_signerOrProvider: SignerOrProvider) {
    this.signerOrProvider = _signerOrProvider;
  }

  sendNFT(
    srcChainID: ChainIDs,
    dstChainID: ChainIDs,
    tokenAddress: string,
    tokenID: BigNumberish,
    to: string
  ) {
    const _srcIsPolygon = isPolygonChainID(srcChainID);
    const _dstIsPolygon = isPolygonChainID(dstChainID);
    if (_srcIsPolygon || _dstIsPolygon) {
      const txType = _srcIsPolygon ? FxPortal_TxType.DEPOSIT : FxPortal_TxType.WITHDRAW;
      this.transferViaFxPortal(
        srcChainID as FxPortalRootChainIDType,
        dstChainID as FxPortalChildChainIDType);
    }
    if (isArbitrumChainID(dstChainID) || isArbitrumChainID(srcChainID)) {
      this.transferViaLayerZero();
    }
  }

  private transferViaFxPortal(srcChainID: FxPortalRootChainIDType, dstChainID: FxPortalChildChainIDType) {
      const fxPortal = new FxPortalERC721(srcChainID, dstChainID, this.signerOrProvider);
  }
  private transferViaLayerZero() {}
}
