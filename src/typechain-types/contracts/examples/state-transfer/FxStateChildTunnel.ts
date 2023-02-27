/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface FxStateChildTunnelInterface extends utils.Interface {
  functions: {
    "fxChild()": FunctionFragment;
    "fxRootTunnel()": FunctionFragment;
    "latestData()": FunctionFragment;
    "latestRootMessageSender()": FunctionFragment;
    "latestStateId()": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "sendMessageToRoot(bytes)": FunctionFragment;
    "setFxRootTunnel(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fxChild"
      | "fxRootTunnel"
      | "latestData"
      | "latestRootMessageSender"
      | "latestStateId"
      | "processMessageFromRoot"
      | "sendMessageToRoot"
      | "setFxRootTunnel"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fxRootTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRootMessageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestStateId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageToRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRootTunnel",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "latestData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestRootMessageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestStateId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageToRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxRootTunnel",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
}

export interface MessageSentEventObject {
  message: string;
}
export type MessageSentEvent = TypedEvent<[string], MessageSentEventObject>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface FxStateChildTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxStateChildTunnelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fxChild(overrides?: CallOverrides): Promise<[string]>;

    fxRootTunnel(overrides?: CallOverrides): Promise<[string]>;

    latestData(overrides?: CallOverrides): Promise<[string]>;

    latestRootMessageSender(overrides?: CallOverrides): Promise<[string]>;

    latestStateId(overrides?: CallOverrides): Promise<[BigNumber]>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessageToRoot(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fxChild(overrides?: CallOverrides): Promise<string>;

  fxRootTunnel(overrides?: CallOverrides): Promise<string>;

  latestData(overrides?: CallOverrides): Promise<string>;

  latestRootMessageSender(overrides?: CallOverrides): Promise<string>;

  latestStateId(overrides?: CallOverrides): Promise<BigNumber>;

  processMessageFromRoot(
    stateId: PromiseOrValue<BigNumberish>,
    rootMessageSender: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessageToRoot(
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxRootTunnel(
    _fxRootTunnel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxChild(overrides?: CallOverrides): Promise<string>;

    fxRootTunnel(overrides?: CallOverrides): Promise<string>;

    latestData(overrides?: CallOverrides): Promise<string>;

    latestRootMessageSender(overrides?: CallOverrides): Promise<string>;

    latestStateId(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageToRoot(
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageSent(bytes)"(message?: null): MessageSentEventFilter;
    MessageSent(message?: null): MessageSentEventFilter;
  };

  estimateGas: {
    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    fxRootTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    latestData(overrides?: CallOverrides): Promise<BigNumber>;

    latestRootMessageSender(overrides?: CallOverrides): Promise<BigNumber>;

    latestStateId(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessageToRoot(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRootTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRootMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestStateId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageToRoot(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}