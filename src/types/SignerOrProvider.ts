import { Signer } from 'ethers';
import { providers } from 'ethers';

export type NodeProvider = providers.JsonRpcProvider | providers.Web3Provider;

export type SignerOrProvider = Signer | NodeProvider;
