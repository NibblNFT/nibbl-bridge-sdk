/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FxERC721ChildTunnelTokenURI,
  FxERC721ChildTunnelTokenURIInterface,
} from "../../../../../contracts/examples/erc721-transfer-token_uri/FxERC721ChildTunnel.sol/FxERC721ChildTunnelTokenURI";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChild",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenTemplate",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
    ],
    name: "TokenMapped",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAP_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PREFIX_SYMBOL",
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
    inputs: [],
    name: "SUFFIX_NAME",
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
  {
    inputs: [],
    name: "fxChild",
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
    name: "fxRootTunnel",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rootToChildToken",
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
        name: "_fxRootTunnel",
        type: "address",
      },
    ],
    name: "setFxRootTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenTemplate",
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
        name: "childToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "childToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620023973803806200239783398181016040528101906200003791906200018b565b81806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050620000be816200010860201b60201c565b62000100576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f79062000233565b60405180910390fd5b505062000255565b600080823b905060008163ffffffff1611915050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001538262000126565b9050919050565b620001658162000146565b81146200017157600080fd5b50565b60008151905062000185816200015a565b92915050565b60008060408385031215620001a557620001a462000121565b5b6000620001b58582860162000174565b9250506020620001c88582860162000174565b9150509250929050565b600082825260208201905092915050565b7f546f6b656e2074656d706c617465206973206e6f7420636f6e74726163740000600082015250565b60006200021b601e83620001d2565b91506200022882620001e3565b602082019050919050565b600060208201905081810360008301526200024e816200020c565b9050919050565b60805161211f62000278600039600081816102c30152610d24015261211f6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637f1e9cb01161008c578063920f96cc11610066578063920f96cc1461023b5780639a7c4b7114610257578063d81c8e5214610273578063ea60c7c414610291576100ea565b80637f1e9cb0146101e3578063886a69ba14610201578063888370941461021f576100ea565b80633740d5a0116100c85780633740d5a01461015957806339c6c9e014610177578063450d11f0146101955780637337957f146101b3576100ea565b80630814d3dd146100ef578063150b7a021461010d57806331f092651461013d575b600080fd5b6100f76102c1565b6040516101049190611068565b60405180910390f35b6101276004803603810190610122919061115e565b6102e5565b6040516101349190611221565b60405180910390f35b6101576004803603810190610152919061137d565b6102fa565b005b61016161030b565b60405161016e919061146b565b60405180910390f35b61017f610344565b60405161018c919061146b565b60405180910390f35b61019d61037d565b6040516101aa9190611068565b60405180910390f35b6101cd60048036038101906101c891906114c3565b6103a1565b6040516101da9190611068565b60405180910390f35b6101eb6103e5565b6040516101f89190611068565b60405180910390f35b61020961040b565b6040516102169190611525565b60405180910390f35b61023960048036038101906102349190611540565b61042f565b005b6102556004803603810190610250919061156d565b610504565b005b610271600480360381019061026c91906115f0565b610516565b005b61027b6105f9565b6040516102889190611525565b60405180910390f35b6102ab60048036038101906102a69190611540565b61061d565b6040516102b89190611068565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b600063150b7a0260e01b905095945050505050565b61030683338484610650565b505050565b6040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600b81526020017f202846584552433732312900000000000000000000000000000000000000000081525081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060ff60f81b8386866040516020016103bf949392919061171a565b6040516020818303038152906040528051906020012090508060001c9150509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b7906117da565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61051084848484610650565b50505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059b9061186c565b60405180910390fd5b6105f3848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061095d565b50505050565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600084905060008173ffffffffffffffffffffffffffffffffffffffff16630a8a49146040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c891906118a1565b9050600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580156107345750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156107ca5750600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16145b610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611940565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610842919061196f565b602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088391906118a1565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ba57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166342966c68856040518263ffffffff1660e01b81526004016108f3919061196f565b600060405180830381600087803b15801561090d57600080fd5b505af1158015610921573d6000803e3d6000fd5b5050505061095581878787876040516020016109419594939291906119df565b604051602081830303815290604052610ab8565b505050505050565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e590611aab565b60405180910390fd5b60008083806020019051810190610a059190611b50565b915091507f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f8218203610a3e57610a3981610af2565b610ab0565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad8203610a7457610a6e81610c00565b50610aaf565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa690611c1e565b60405180910390fd5b5b505050505050565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681604051610ae79190611c3e565b60405180910390a150565b60008060008060008086806020019051810190610b0f9190611d54565b9550955095509550955095506000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008190508073ffffffffffffffffffffffffffffffffffffffff1663d2b04fd6878787876040518563ffffffff1660e01b8152600401610bc39493929190611e19565b600060405180830381600087803b158015610bdd57600080fd5b505af1158015610bf1573d6000803e3d6000fd5b50505050505050505050505050565b60008060008084806020019051810190610c1a9190611e6c565b9250925092506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cf3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cea90611f69565b60405180910390fd5b600084604051602001610d069190611f89565b604051602081830303815290604052805190602001209050610d48817f0000000000000000000000000000000000000000000000000000000000000000610f4c565b91508173ffffffffffffffffffffffffffffffffffffffff16632016a0d23087876040518060400160405280600b81526020017f2028465845524337323129000000000000000000000000000000000000000000815250604051602001610db0929190611fe0565b6040516020818303038152906040526040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525088604051602001610e07929190611fe0565b6040516020818303038152906040526040518563ffffffff1660e01b8152600401610e359493929190612004565b600060405180830381600087803b158015610e4f57600080fd5b505af1158015610e63573d6000803e3d6000fd5b5050505081600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f85920d35e6c72f6b2affffa04298b0cecfeba86e4a9f407df661f1cb8ab5e61760405160405180910390a38195505050505050919050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152846037826000f5925050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611020576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611017906120c9565b60405180910390fd5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061105282611027565b9050919050565b61106281611047565b82525050565b600060208201905061107d6000830184611059565b92915050565b6000604051905090565b600080fd5b600080fd5b6110a081611047565b81146110ab57600080fd5b50565b6000813590506110bd81611097565b92915050565b6000819050919050565b6110d6816110c3565b81146110e157600080fd5b50565b6000813590506110f3816110cd565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261111e5761111d6110f9565b5b8235905067ffffffffffffffff81111561113b5761113a6110fe565b5b60208301915083600182028301111561115757611156611103565b5b9250929050565b60008060008060006080868803121561117a5761117961108d565b5b6000611188888289016110ae565b9550506020611199888289016110ae565b94505060406111aa888289016110e4565b935050606086013567ffffffffffffffff8111156111cb576111ca611092565b5b6111d788828901611108565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61121b816111e6565b82525050565b60006020820190506112366000830184611212565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61128a82611241565b810181811067ffffffffffffffff821117156112a9576112a8611252565b5b80604052505050565b60006112bc611083565b90506112c88282611281565b919050565b600067ffffffffffffffff8211156112e8576112e7611252565b5b6112f182611241565b9050602081019050919050565b82818337600083830152505050565b600061132061131b846112cd565b6112b2565b90508281526020810184848401111561133c5761133b61123c565b5b6113478482856112fe565b509392505050565b600082601f830112611364576113636110f9565b5b813561137484826020860161130d565b91505092915050565b6000806000606084860312156113965761139561108d565b5b60006113a4868287016110ae565b93505060206113b5868287016110e4565b925050604084013567ffffffffffffffff8111156113d6576113d5611092565b5b6113e28682870161134f565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b8381101561142657808201518184015260208101905061140b565b60008484015250505050565b600061143d826113ec565b61144781856113f7565b9350611457818560208601611408565b61146081611241565b840191505092915050565b600060208201905081810360008301526114858184611432565b905092915050565b6000819050919050565b6114a08161148d565b81146114ab57600080fd5b50565b6000813590506114bd81611497565b92915050565b6000806000606084860312156114dc576114db61108d565b5b60006114ea868287016114ae565b93505060206114fb868287016114ae565b925050604061150c868287016110ae565b9150509250925092565b61151f8161148d565b82525050565b600060208201905061153a6000830184611516565b92915050565b6000602082840312156115565761155561108d565b5b6000611564848285016110ae565b91505092915050565b600080600080608085870312156115875761158661108d565b5b6000611595878288016110ae565b94505060206115a6878288016110ae565b93505060406115b7878288016110e4565b925050606085013567ffffffffffffffff8111156115d8576115d7611092565b5b6115e48782880161134f565b91505092959194509250565b6000806000806060858703121561160a5761160961108d565b5b6000611618878288016110e4565b9450506020611629878288016110ae565b935050604085013567ffffffffffffffff81111561164a57611649611092565b5b61165687828801611108565b925092505092959194509250565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6116ab6116a682611664565b611690565b82525050565b60008160601b9050919050565b60006116c9826116b1565b9050919050565b60006116db826116be565b9050919050565b6116f36116ee82611047565b6116d0565b82525050565b6000819050919050565b61171461170f8261148d565b6116f9565b82525050565b6000611726828761169a565b60018201915061173682866116e2565b6014820191506117468285611703565b6020820191506117568284611703565b60208201915081905095945050505050565b7f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b60006117c4602a836113f7565b91506117cf82611768565b604082019050919050565b600060208201905081810360008301526117f3816117b7565b9050919050565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f5200000000000000000000000000000000000000000000000000000000000000602082015250565b60006118566021836113f7565b9150611861826117fa565b604082019050919050565b6000602082019050818103600083015261188581611849565b9050919050565b60008151905061189b81611097565b92915050565b6000602082840312156118b7576118b661108d565b5b60006118c58482850161188c565b91505092915050565b7f46784552433732314368696c6454756e6e656c3a204e4f5f4d41505045445f5460008201527f4f4b454e00000000000000000000000000000000000000000000000000000000602082015250565b600061192a6024836113f7565b9150611935826118ce565b604082019050919050565b600060208201905081810360008301526119598161191d565b9050919050565b611969816110c3565b82525050565b60006020820190506119846000830184611960565b92915050565b600081519050919050565b600082825260208201905092915050565b60006119b18261198a565b6119bb8185611995565b93506119cb818560208601611408565b6119d481611241565b840191505092915050565b600060a0820190506119f46000830188611059565b611a016020830187611059565b611a0e6040830186611059565b611a1b6060830185611960565b8181036080830152611a2d81846119a6565b90509695505050505050565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f525f46524f4d5f524f4f54000000000000000000000000000000000000000000602082015250565b6000611a95602b836113f7565b9150611aa082611a39565b604082019050919050565b60006020820190508181036000830152611ac481611a88565b9050919050565b600081519050611ada81611497565b92915050565b6000611af3611aee846112cd565b6112b2565b905082815260208101848484011115611b0f57611b0e61123c565b5b611b1a848285611408565b509392505050565b600082601f830112611b3757611b366110f9565b5b8151611b47848260208601611ae0565b91505092915050565b60008060408385031215611b6757611b6661108d565b5b6000611b7585828601611acb565b925050602083015167ffffffffffffffff811115611b9657611b95611092565b5b611ba285828601611b22565b9150509250929050565b7f46784552433732314368696c6454756e6e656c3a20494e56414c49445f53594e60008201527f435f545950450000000000000000000000000000000000000000000000000000602082015250565b6000611c086026836113f7565b9150611c1382611bac565b604082019050919050565b60006020820190508181036000830152611c3781611bfb565b9050919050565b60006020820190508181036000830152611c5881846119a6565b905092915050565b6000611c6b82611027565b9050919050565b611c7b81611c60565b8114611c8657600080fd5b50565b600081519050611c9881611c72565b92915050565b600081519050611cad816110cd565b92915050565b600067ffffffffffffffff821115611cce57611ccd611252565b5b611cd782611241565b9050602081019050919050565b6000611cf7611cf284611cb3565b6112b2565b905082815260208101848484011115611d1357611d1261123c565b5b611d1e848285611408565b509392505050565b600082601f830112611d3b57611d3a6110f9565b5b8151611d4b848260208601611ce4565b91505092915050565b60008060008060008060c08789031215611d7157611d7061108d565b5b6000611d7f89828a01611c89565b9650506020611d9089828a01611c89565b9550506040611da189828a01611c89565b9450506060611db289828a01611c9e565b935050608087015167ffffffffffffffff811115611dd357611dd2611092565b5b611ddf89828a01611d26565b92505060a087015167ffffffffffffffff811115611e0057611dff611092565b5b611e0c89828a01611b22565b9150509295509295509295565b6000608082019050611e2e6000830187611059565b611e3b6020830186611960565b8181036040830152611e4d8185611432565b90508181036060830152611e6181846119a6565b905095945050505050565b600080600060608486031215611e8557611e8461108d565b5b6000611e9386828701611c89565b935050602084015167ffffffffffffffff811115611eb457611eb3611092565b5b611ec086828701611d26565b925050604084015167ffffffffffffffff811115611ee157611ee0611092565b5b611eed86828701611d26565b9150509250925092565b7f46784552433732314368696c6454756e6e656c3a20414c52454144595f4d415060008201527f5045440000000000000000000000000000000000000000000000000000000000602082015250565b6000611f536023836113f7565b9150611f5e82611ef7565b604082019050919050565b60006020820190508181036000830152611f8281611f46565b9050919050565b6000611f9582846116e2565b60148201915081905092915050565b600081905092915050565b6000611fba826113ec565b611fc48185611fa4565b9350611fd4818560208601611408565b80840191505092915050565b6000611fec8285611faf565b9150611ff88284611faf565b91508190509392505050565b60006080820190506120196000830187611059565b6120266020830186611059565b81810360408301526120388185611432565b9050818103606083015261204c8184611432565b905095945050505050565b7f437265617465323a204661696c6564206f6e206d696e696d616c206465706c6f60008201527f7900000000000000000000000000000000000000000000000000000000000000602082015250565b60006120b36021836113f7565b91506120be82612057565b604082019050919050565b600060208201905081810360008301526120e2816120a6565b905091905056fea26469706673582212205a08489889b928620f5cde74b50806bcd1b8b8f7343b3ad56a5cd55a78f64da164736f6c63430008110033";

type FxERC721ChildTunnelTokenURIConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FxERC721ChildTunnelTokenURIConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FxERC721ChildTunnelTokenURI__factory extends ContractFactory {
  constructor(...args: FxERC721ChildTunnelTokenURIConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fxChild: PromiseOrValue<string>,
    _tokenTemplate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FxERC721ChildTunnelTokenURI> {
    return super.deploy(
      _fxChild,
      _tokenTemplate,
      overrides || {}
    ) as Promise<FxERC721ChildTunnelTokenURI>;
  }
  override getDeployTransaction(
    _fxChild: PromiseOrValue<string>,
    _tokenTemplate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _fxChild,
      _tokenTemplate,
      overrides || {}
    );
  }
  override attach(address: string): FxERC721ChildTunnelTokenURI {
    return super.attach(address) as FxERC721ChildTunnelTokenURI;
  }
  override connect(signer: Signer): FxERC721ChildTunnelTokenURI__factory {
    return super.connect(signer) as FxERC721ChildTunnelTokenURI__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC721ChildTunnelTokenURIInterface {
    return new utils.Interface(_abi) as FxERC721ChildTunnelTokenURIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC721ChildTunnelTokenURI {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FxERC721ChildTunnelTokenURI;
  }
}
