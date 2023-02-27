import { FxRootTunnel } from "../constants/fx-portal";
import { RootChainIDs } from "../types/chainID";

export class FxPortal {
    rootTunnel: string;
    constructor(_rootChainID: RootChainIDs) {
        this.rootTunnel = FxRootTunnel[_rootChainID];
    }
}