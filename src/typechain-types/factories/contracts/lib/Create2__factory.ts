/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Create2, Create2Interface } from "../../../contracts/lib/Create2";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computedCreate2Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class Create2__factory {
  static readonly abi = _abi;
  static createInterface(): Create2Interface {
    return new utils.Interface(_abi) as Create2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Create2 {
    return new Contract(address, _abi, signerOrProvider) as Create2;
  }
}
