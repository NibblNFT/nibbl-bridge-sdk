import { BigNumberish } from "ethers";

export type BridgeDepositDTO = {
    srcChainID:         BigNumberish,
    dstChainID:         BigNumberish,
    tokenID:            BigNumberish,
    userAddress:        string,
}