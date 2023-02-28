import { FxChildTunnelAddress, FxRootTunnelAddress } from './constants';
import { FxPortalDepositDTO, SignerOrProvider } from './types';
import { Contract } from 'ethers';
import { topupGas } from './function';
import { FxPortalWithdrawDTO } from './types/fxPortal';
import {
  FxPortalChildChainIDType,
  FxPortalRootChainIDType,
} from './constants/ChainIDs';
import FX_ERC721_ROOT_TUNNEL from './abis/FX_ERC721_ROOT_TUNNEL.json';
import FX_ERC721_CHILD_TUNNEL from './abis/FX_ERC721_CHILD_TUNNEL.json';

export class FxPortalERC721 {
  //
  rootTunnelContract: Contract;
  childTunnelContract: Contract;
  //
  constructor(
    _rootChainID: FxPortalRootChainIDType,
    _polygonChainID: FxPortalChildChainIDType,
    signerOrProvider: SignerOrProvider
  ) {
    //
    const _fxERC721RootTunnelAddress = FxRootTunnelAddress[_rootChainID];
    const _fxERC721ChildTunnelAddress = FxChildTunnelAddress[_polygonChainID];
    //
    this.rootTunnelContract = new Contract(
      _fxERC721RootTunnelAddress,
      FX_ERC721_ROOT_TUNNEL,
      signerOrProvider
    );
    this.childTunnelContract = new Contract(
      _fxERC721ChildTunnelAddress,
      FX_ERC721_CHILD_TUNNEL,
      signerOrProvider
    );
    //
  }

  async deposit(fxPortalDepositData: FxPortalDepositDTO) {
    //
    try {
      const gasLimit = topupGas(
        await this.rootTunnelContract.estimateGas.deposit(
          fxPortalDepositData.rootToken,
          fxPortalDepositData.user,
          fxPortalDepositData.tokenID,
          fxPortalDepositData.tokenURI,
          '0x'
        )
      );
      //
      return await this.rootTunnelContract.deposit(
        fxPortalDepositData.rootToken,
        fxPortalDepositData.user,
        fxPortalDepositData.tokenID,
        fxPortalDepositData.tokenURI,
        '0x',
        {
          gasLimit,
        }
      );
    } catch (error) {
      console.error('ERROR in', __filename);
      console.error(error);
      throw error;
    }
  }

  async withdraw(fxPortalWithdrawData: FxPortalWithdrawDTO) {
    try {
      const gasLimit = topupGas(
        await this.childTunnelContract.estimateGas.withdraw(
          fxPortalWithdrawData.childToken,
          fxPortalWithdrawData.tokenID,
          '0x'
        )
      );
      //
      return await this.childTunnelContract.withdraw(
        fxPortalWithdrawData.childToken,
        fxPortalWithdrawData.tokenID,
        '0x',
        {
          gasLimit,
        }
      );
    } catch (error) {
      console.error('ERROR in', __filename);
      console.error(error);
      throw error;
    }
  }
}
