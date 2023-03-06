import { BigNumberish } from 'ethers';
import {
  ChainIDs,
  FxPortalChildChainIDType,
  FxPortalRootChainIDType,
} from './constants';
import { SignerOrProvider } from './types';
import { FxPortalERC721 } from './fxPortal';
import { includesPolygonChainID } from './function';
import { FxPortalChainIDType } from './constants/fxPortal';
import { TransferViaFxPortalDTO } from './types/fxPortal';
import { LayerZero } from './layerZero';
import { TransferViaLayerZeroDTO } from './types/layerzero';
import { LzChainIDType } from './constants/layerZero';

export class Bridge {
  signerOrProvider: SignerOrProvider;
  constructor(_signerOrProvider: SignerOrProvider) {
    this.signerOrProvider = _signerOrProvider;
  }

  async sendNFT(
    srcChainID: ChainIDs,
    dstChainID: ChainIDs,
    tokenAddress: string,
    tokenID: BigNumberish,
    toAddress: string,
    tokenURI?: string
  ): Promise<any> {
    //
    if (includesPolygonChainID(srcChainID, dstChainID)) {
      //

      if (tokenURI === '') {
        throw new Error('Invalid URI');
      }
      //
      return await this.transferViaFxPortal({
        srcChainID: srcChainID as FxPortalChainIDType,
        dstChainID: dstChainID as FxPortalChainIDType,
        tokenAddress,
        tokenURI: tokenURI!,
        toAddress,
        tokenID,
      });
      //
    } else {
      return this.transferViaLayerZero({
        dstChainID: dstChainID as LzChainIDType,
        srcChainID: srcChainID as LzChainIDType,
        toAddress,
        tokenAddress,
        tokenID,
      });
    }
  }

  private async transferViaFxPortal(transferData: TransferViaFxPortalDTO) {
    //
    if (includesPolygonChainID(transferData.dstChainID)) {
      //
      const fxPortal = new FxPortalERC721(
        transferData.srcChainID as FxPortalRootChainIDType,
        transferData.dstChainID as FxPortalChildChainIDType,
        this.signerOrProvider
      );
      //
      return await fxPortal.deposit({
        rootToken: transferData.tokenAddress,
        tokenID: transferData.tokenID,
        tokenURI: transferData.tokenURI,
        toAddress: transferData.toAddress,
      });
      //
    } else {
      const fxPortal = new FxPortalERC721(
        transferData.dstChainID as FxPortalRootChainIDType,
        transferData.srcChainID as FxPortalChildChainIDType,
        this.signerOrProvider
      );
      return await fxPortal.withdraw({
        childToken: transferData.tokenAddress,
        tokenID: transferData.tokenID,
      });
    }
  }
  private transferViaLayerZero(transferViaLZ: TransferViaLayerZeroDTO): any {
    const lz = new LayerZero(this.signerOrProvider);
    return lz.sendNFT({
      dstChainID: transferViaLZ.dstChainID,
      srcChainID: transferViaLZ.srcChainID,
      tokenAddress: transferViaLZ.tokenAddress,
      tokenID: transferViaLZ.tokenID,
      to: transferViaLZ.toAddress,
    });
  }
}
