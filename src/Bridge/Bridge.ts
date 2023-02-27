import { BigNumberish } from "ethers";
import { BridgeDepositDTO } from "../types";
import { ChainIDs } from "../constants";

export class Bridge {
    async deposit(
        srcChainID: BigNumberish,
        dstChainID: BigNumberish,
        tokenID: BigNumberish,
        userAddress: string) {
            if (dstChainID == (ChainIDs.MUMBAI | ChainIDs.POLYGON)) {
                
            }
    }
    private depositViaFxPortal(depositData: BridgeDepositDTO) { }
    private depositViaLz(depositData: BridgeDepositDTO) { }
}