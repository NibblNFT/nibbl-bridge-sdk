// rootToken: PromiseOrValue<string>, user: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, tokenURI: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>

import { BigNumberish } from "ethers";

export type FxPortalDepositDTO = {
    rootToken:              string;
    user:                   string;
    tokenID:                BigNumberish;
    tokenURI:               string;

}