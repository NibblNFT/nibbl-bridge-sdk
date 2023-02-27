import { PolygonChainIDs, RootChainIDs } from "../../types/chainID";
import { ChainIDs } from "../ChainIDs";


export const FxRootTunnel: Record<RootChainIDs, string> = {
    [ChainIDs.MAINNET]: "0x7857a53a3D280775987288cFeaF18b1143137392",
    [ChainIDs.GOERLI]: "0x3ECA1FE779bb0843e13DC7D4f5cb8e043328Bc4C"
}

export const FxChildTunnel: Record<PolygonChainIDs, string> = {
    [ChainIDs.POLYGON]: "0x6B714615E28aE79385bDAE1f14c2e49277fdae6C",
    [ChainIDs.MUMBAI]: "0xC1dA1b898c0247356E14ef327E9fc6C86a816697"
}