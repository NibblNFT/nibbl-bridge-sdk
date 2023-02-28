import { Contract, Signer, ethers } from 'ethers';
import { SignerOrProvider } from './types';
import ONFT_ABI from './abis/ONFT.json';
import { LayerZeroSendNFTDTO } from './types/layerzero';
import { LAYER_ZERO_ONFT_MAP, LzChainIDs } from './constants/layerZero';

export class LayerZero {
  //
  readonly adapterParams = ethers.utils.solidityPack(
    ['uint16', 'uint256'],
    [1, 650000]
  );
  //
  signerOrProvider: SignerOrProvider;
  //
  constructor(_signerOrProvider: SignerOrProvider) {
    this.signerOrProvider = _signerOrProvider;
  }

  async sendNFT(layerZeroSendNFTDTO: LayerZeroSendNFTDTO) {
    //
    const onftAddress =
      LAYER_ZERO_ONFT_MAP[layerZeroSendNFTDTO.srcChainID][
        layerZeroSendNFTDTO.rootToken
      ];
    //
    const onftInstance = new Contract(
      onftAddress,
      ONFT_ABI,
      this.signerOrProvider
    );
    //
    const fees = await onftInstance.estimateSendFee(
      LzChainIDs[layerZeroSendNFTDTO.dstChainID],
      layerZeroSendNFTDTO.to,
      layerZeroSendNFTDTO.tokenID,
      false,
      this.adapterParams
    );
    //
    const userAddr = await (this.signerOrProvider as Signer).getAddress();
    return await onftInstance.sendFrom(
      userAddr,
      LzChainIDs[layerZeroSendNFTDTO.dstChainID],
      layerZeroSendNFTDTO.to,
      layerZeroSendNFTDTO.tokenID,
      userAddr,
      ethers.constants.AddressZero,
      this.adapterParams,
      { value: fees[0] }
    );
  }
}
