/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FxERC721,
  FxERC721Interface,
} from "../../../contracts/tokens/FxERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "connectedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fxManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fxManager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "connectedToken_",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setupMetaData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612f1a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063a22cb46511610071578063a22cb46514610306578063b88d4fde14610322578063c87b56dd1461033e578063d2b04fd61461036e578063e985e9c51461038a57610121565b806342966c681461024e5780636352211e1461026a57806370a082311461029a57806395d89b41146102ca5780639b779153146102e857610121565b80630a8a4914116100f45780630a8a4914146101c05780632016a0d2146101de57806323b872dd146101fa5780633d30498f1461021657806342842e0e1461023257610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611b17565b6103ba565b60405161014d9190611b5f565b60405180910390f35b61015e61049c565b60405161016b9190611c0a565b60405180910390f35b61018e60048036038101906101899190611c62565b61052e565b60405161019b9190611cd0565b60405180910390f35b6101be60048036038101906101b99190611d17565b6105b3565b005b6101c8610725565b6040516101d59190611cd0565b60405180910390f35b6101f860048036038101906101f39190611e8c565b61074f565b005b610214600480360381019061020f9190611f2b565b6108cc565b005b610230600480360381019061022b9190611f7e565b61092c565b005b61024c60048036038101906102479190611f2b565b6109ca565b005b61026860048036038101906102639190611c62565b6109ea565b005b610284600480360381019061027f9190611c62565b610a86565b6040516102919190611cd0565b60405180910390f35b6102b460048036038101906102af9190611ff6565b610b37565b6040516102c19190612032565b60405180910390f35b6102d2610bee565b6040516102df9190611c0a565b60405180910390f35b6102f0610c80565b6040516102fd9190611cd0565b60405180910390f35b610320600480360381019061031b9190612079565b610caa565b005b61033c6004803603810190610337919061215a565b610e2a565b005b61035860048036038101906103539190611c62565b610e8c565b6040516103659190611c0a565b60405180910390f35b610388600480360381019061038391906121dd565b610f2c565b005b6103a4600480360381019061039f919061227c565b610fee565b6040516103b19190611b5f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061048557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610495575061049482611082565b5b9050919050565b6060600080546104ab906122eb565b80601f01602080910402602001604051908101604052809291908181526020018280546104d7906122eb565b80156105245780601f106104f957610100808354040283529160200191610524565b820191906000526020600020905b81548152906001019060200180831161050757829003601f168201915b5050505050905090565b6000610539826110ec565b610578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056f9061238e565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105be82610a86565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361062e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062590612420565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661064d611158565b73ffffffffffffffffffffffffffffffffffffffff16148061067c575061067b81610676611158565b610fee565b5b6106bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b2906124b2565b60405180910390fd5b6106c58383611160565b818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156107fb5750600073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b61083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108319061251e565b60405180910390fd5b83600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108c6828261092c565b50505050565b6108dd6108d7611158565b826111b6565b61091c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610913906125b0565b60405180910390fd5b610927838383611294565b505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b39061261c565b60405180910390fd5b6109c68282611553565b5050565b6109e583838360405180602001604052806000815250610e2a565b505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a719061261c565b60405180910390fd5b610a8381611577565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b25906126ae565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9e90612740565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610bfd906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610c29906122eb565b8015610c765780601f10610c4b57610100808354040283529160200191610c76565b820191906000526020600020905b815481529060010190602001808311610c5957829003601f168201915b5050505050905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610cb2611158565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d16906127ac565b60405180910390fd5b8060056000610d2c611158565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610dd9611158565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e1e9190611b5f565b60405180910390a35050565b610e3b610e35611158565b836111b6565b610e7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e71906125b0565b60405180910390fd5b610e8684848484611688565b50505050565b60086020528060005260406000206000915090508054610eab906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed7906122eb565b8015610f245780601f10610ef957610100808354040283529160200191610f24565b820191906000526020600020905b815481529060010190602001808311610f0757829003601f168201915b505050505081565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb39061261c565b60405180910390fd5b81600860008581526020019081526020016000209081610fdc9190612978565b50610fe88484836116e4565b50505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60006111c1826110ec565b611200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f790612abc565b60405180910390fd5b600061120b83610a86565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061127a57508373ffffffffffffffffffffffffffffffffffffffff166112628461052e565b73ffffffffffffffffffffffffffffffffffffffff16145b8061128b575061128a8185610fee565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112b482610a86565b73ffffffffffffffffffffffffffffffffffffffff161461130a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130190612b4e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137090612be0565b60405180910390fd5b61138483838361173f565b61138f600082611160565b80600073ffffffffffffffffffffffffffffffffffffffff166113b183610a86565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a46001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114439190612c2f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461149a9190612c63565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b81600090816115629190612978565b5080600190816115729190612978565b505050565b600061158282610a86565b90506115908160008461173f565b61159b600083611160565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115eb9190612c2f565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611693848484611294565b61169f84848484611744565b6116de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d590612d09565b60405180910390fd5b50505050565b6116ee83836118cb565b6116fb6000848484611744565b61173a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173190612d09565b60405180910390fd5b505050565b505050565b60006117658473ffffffffffffffffffffffffffffffffffffffff16611a98565b156118be578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261178e611158565b8786866040518563ffffffff1660e01b81526004016117b09493929190612d7e565b6020604051808303816000875af19250505080156117ec57506040513d601f19601f820116820180604052508101906117e99190612ddf565b60015b61186e573d806000811461181c576040519150601f19603f3d011682016040523d82523d6000602084013e611821565b606091505b506000815103611866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185d90612d09565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118c3565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361193a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193190612e58565b60405180910390fd5b611943816110ec565b15611983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197a90612ec4565b60405180910390fd5b61198f6000838361173f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119df9190612c63565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611af481611abf565b8114611aff57600080fd5b50565b600081359050611b1181611aeb565b92915050565b600060208284031215611b2d57611b2c611ab5565b5b6000611b3b84828501611b02565b91505092915050565b60008115159050919050565b611b5981611b44565b82525050565b6000602082019050611b746000830184611b50565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611bb4578082015181840152602081019050611b99565b60008484015250505050565b6000601f19601f8301169050919050565b6000611bdc82611b7a565b611be68185611b85565b9350611bf6818560208601611b96565b611bff81611bc0565b840191505092915050565b60006020820190508181036000830152611c248184611bd1565b905092915050565b6000819050919050565b611c3f81611c2c565b8114611c4a57600080fd5b50565b600081359050611c5c81611c36565b92915050565b600060208284031215611c7857611c77611ab5565b5b6000611c8684828501611c4d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cba82611c8f565b9050919050565b611cca81611caf565b82525050565b6000602082019050611ce56000830184611cc1565b92915050565b611cf481611caf565b8114611cff57600080fd5b50565b600081359050611d1181611ceb565b92915050565b60008060408385031215611d2e57611d2d611ab5565b5b6000611d3c85828601611d02565b9250506020611d4d85828601611c4d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d9982611bc0565b810181811067ffffffffffffffff82111715611db857611db7611d61565b5b80604052505050565b6000611dcb611aab565b9050611dd78282611d90565b919050565b600067ffffffffffffffff821115611df757611df6611d61565b5b611e0082611bc0565b9050602081019050919050565b82818337600083830152505050565b6000611e2f611e2a84611ddc565b611dc1565b905082815260208101848484011115611e4b57611e4a611d5c565b5b611e56848285611e0d565b509392505050565b600082601f830112611e7357611e72611d57565b5b8135611e83848260208601611e1c565b91505092915050565b60008060008060808587031215611ea657611ea5611ab5565b5b6000611eb487828801611d02565b9450506020611ec587828801611d02565b935050604085013567ffffffffffffffff811115611ee657611ee5611aba565b5b611ef287828801611e5e565b925050606085013567ffffffffffffffff811115611f1357611f12611aba565b5b611f1f87828801611e5e565b91505092959194509250565b600080600060608486031215611f4457611f43611ab5565b5b6000611f5286828701611d02565b9350506020611f6386828701611d02565b9250506040611f7486828701611c4d565b9150509250925092565b60008060408385031215611f9557611f94611ab5565b5b600083013567ffffffffffffffff811115611fb357611fb2611aba565b5b611fbf85828601611e5e565b925050602083013567ffffffffffffffff811115611fe057611fdf611aba565b5b611fec85828601611e5e565b9150509250929050565b60006020828403121561200c5761200b611ab5565b5b600061201a84828501611d02565b91505092915050565b61202c81611c2c565b82525050565b60006020820190506120476000830184612023565b92915050565b61205681611b44565b811461206157600080fd5b50565b6000813590506120738161204d565b92915050565b600080604083850312156120905761208f611ab5565b5b600061209e85828601611d02565b92505060206120af85828601612064565b9150509250929050565b600067ffffffffffffffff8211156120d4576120d3611d61565b5b6120dd82611bc0565b9050602081019050919050565b60006120fd6120f8846120b9565b611dc1565b90508281526020810184848401111561211957612118611d5c565b5b612124848285611e0d565b509392505050565b600082601f83011261214157612140611d57565b5b81356121518482602086016120ea565b91505092915050565b6000806000806080858703121561217457612173611ab5565b5b600061218287828801611d02565b945050602061219387828801611d02565b93505060406121a487828801611c4d565b925050606085013567ffffffffffffffff8111156121c5576121c4611aba565b5b6121d18782880161212c565b91505092959194509250565b600080600080608085870312156121f7576121f6611ab5565b5b600061220587828801611d02565b945050602061221687828801611c4d565b935050604085013567ffffffffffffffff81111561223757612236611aba565b5b61224387828801611e5e565b925050606085013567ffffffffffffffff81111561226457612263611aba565b5b6122708782880161212c565b91505092959194509250565b6000806040838503121561229357612292611ab5565b5b60006122a185828601611d02565b92505060206122b285828601611d02565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061230357607f821691505b602082108103612316576123156122bc565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612378602c83611b85565b91506123838261231c565b604082019050919050565b600060208201905081810360008301526123a78161236b565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061240a602183611b85565b9150612415826123ae565b604082019050919050565b60006020820190508181036000830152612439816123fd565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b600061249c603883611b85565b91506124a782612440565b604082019050919050565b600060208201905081810360008301526124cb8161248f565b9050919050565b7f546f6b656e20697320616c726561647920696e697469616c697a656400000000600082015250565b6000612508601c83611b85565b9150612513826124d2565b602082019050919050565b60006020820190508181036000830152612537816124fb565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061259a603183611b85565b91506125a58261253e565b604082019050919050565b600060208201905081810360008301526125c98161258d565b9050919050565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b6000612606600e83611b85565b9150612611826125d0565b602082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612698602983611b85565b91506126a38261263c565b604082019050919050565b600060208201905081810360008301526126c78161268b565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b600061272a602a83611b85565b9150612735826126ce565b604082019050919050565b600060208201905081810360008301526127598161271d565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612796601983611b85565b91506127a182612760565b602082019050919050565b600060208201905081810360008301526127c581612789565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261282e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826127f1565b61283886836127f1565b95508019841693508086168417925050509392505050565b6000819050919050565b600061287561287061286b84611c2c565b612850565b611c2c565b9050919050565b6000819050919050565b61288f8361285a565b6128a361289b8261287c565b8484546127fe565b825550505050565b600090565b6128b86128ab565b6128c3818484612886565b505050565b5b818110156128e7576128dc6000826128b0565b6001810190506128c9565b5050565b601f82111561292c576128fd816127cc565b612906846127e1565b81016020851015612915578190505b612929612921856127e1565b8301826128c8565b50505b505050565b600082821c905092915050565b600061294f60001984600802612931565b1980831691505092915050565b6000612968838361293e565b9150826002028217905092915050565b61298182611b7a565b67ffffffffffffffff81111561299a57612999611d61565b5b6129a482546122eb565b6129af8282856128eb565b600060209050601f8311600181146129e257600084156129d0578287015190505b6129da858261295c565b865550612a42565b601f1984166129f0866127cc565b60005b82811015612a18578489015182556001820191506020850194506020810190506129f3565b86831015612a355784890151612a31601f89168261293e565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612aa6602c83611b85565b9150612ab182612a4a565b604082019050919050565b60006020820190508181036000830152612ad581612a99565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b6000612b38602983611b85565b9150612b4382612adc565b604082019050919050565b60006020820190508181036000830152612b6781612b2b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612bca602483611b85565b9150612bd582612b6e565b604082019050919050565b60006020820190508181036000830152612bf981612bbd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c3a82611c2c565b9150612c4583611c2c565b9250828203905081811115612c5d57612c5c612c00565b5b92915050565b6000612c6e82611c2c565b9150612c7983611c2c565b9250828201905080821115612c9157612c90612c00565b5b92915050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612cf3603283611b85565b9150612cfe82612c97565b604082019050919050565b60006020820190508181036000830152612d2281612ce6565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612d5082612d29565b612d5a8185612d34565b9350612d6a818560208601611b96565b612d7381611bc0565b840191505092915050565b6000608082019050612d936000830187611cc1565b612da06020830186611cc1565b612dad6040830185612023565b8181036060830152612dbf8184612d45565b905095945050505050565b600081519050612dd981611aeb565b92915050565b600060208284031215612df557612df4611ab5565b5b6000612e0384828501612dca565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612e42602083611b85565b9150612e4d82612e0c565b602082019050919050565b60006020820190508181036000830152612e7181612e35565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612eae601c83611b85565b9150612eb982612e78565b602082019050919050565b60006020820190508181036000830152612edd81612ea1565b905091905056fea26469706673582212203bd8c46f6baa28e1481b47c4fa746f37a8eccc6614f74d43d874b08972c0bec064736f6c63430008110033";

type FxERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FxERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FxERC721__factory extends ContractFactory {
  constructor(...args: FxERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FxERC721> {
    return super.deploy(overrides || {}) as Promise<FxERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FxERC721 {
    return super.attach(address) as FxERC721;
  }
  override connect(signer: Signer): FxERC721__factory {
    return super.connect(signer) as FxERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC721Interface {
    return new utils.Interface(_abi) as FxERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC721 {
    return new Contract(address, _abi, signerOrProvider) as FxERC721;
  }
}
