import { FxRootTunnelAddress } from "../constants";
import { FxERC721RootTunnel, FxERC721RootTunnel__factory, SignerOrProvider, ERC721, FxPortalDepositDTO } from "../types";
import { RootChainIDs } from "../types";
import { BigNumberish } from "ethers";
import { topupGas } from "../function";

export class FxPortalERC721 {
    private rootTunnel: FxERC721RootTunnel;

    constructor(_rootChainID: RootChainIDs, signerOrProvider: SignerOrProvider) {
        this.rootTunnel = FxERC721RootTunnel__factory.connect(FxRootTunnelAddress[_rootChainID], signerOrProvider)
    }

    async checkApproval(approvedAddress: string, userAddress: string, tokenID: BigNumberish, erc721: ERC721): Promise<boolean> {
        return (await erc721.isApprovedForAll(userAddress, approvedAddress) || await erc721.getApproved(tokenID) == approvedAddress)
    }

    async deposit(fxPortalDepositData: FxPortalDepositDTO) {
        
        try {
            const gasLimit = topupGas(await this.rootTunnel.estimateGas.deposit(
                fxPortalDepositData.rootToken,
                fxPortalDepositData.user,
                fxPortalDepositData.tokenID,
                fxPortalDepositData.tokenURI,
                "0x"));

            return await this.rootTunnel.deposit(
                fxPortalDepositData.rootToken,
                fxPortalDepositData.user,
                fxPortalDepositData.tokenID,
                fxPortalDepositData.tokenURI,
                "0x", {
                gasLimit
            });

        } catch (error) {
            console.error("ERROR in", __filename);
            throw error;
        }

    }


}