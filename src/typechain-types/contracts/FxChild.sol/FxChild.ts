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
} from "../../common";

export interface FxChildInterface extends utils.Interface {
  functions: {
    "fxRoot()": FunctionFragment;
    "onStateReceive(uint256,bytes)": FunctionFragment;
    "setFxRoot(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "fxRoot" | "onStateReceive" | "setFxRoot"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onStateReceive",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRoot",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onStateReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFxRoot", data: BytesLike): Result;

  events: {
    "NewFxMessage(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewFxMessage"): EventFragment;
}

export interface NewFxMessageEventObject {
  rootMessageSender: string;
  receiver: string;
  data: string;
}
export type NewFxMessageEvent = TypedEvent<
  [string, string, string],
  NewFxMessageEventObject
>;

export type NewFxMessageEventFilter = TypedEventFilter<NewFxMessageEvent>;

export interface FxChild extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxChildInterface;

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
    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    onStateReceive(
      stateId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxRoot(
      _fxRoot: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fxRoot(overrides?: CallOverrides): Promise<string>;

  onStateReceive(
    stateId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxRoot(
    _fxRoot: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxRoot(overrides?: CallOverrides): Promise<string>;

    onStateReceive(
      stateId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRoot(
      _fxRoot: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewFxMessage(address,address,bytes)"(
      rootMessageSender?: null,
      receiver?: null,
      data?: null
    ): NewFxMessageEventFilter;
    NewFxMessage(
      rootMessageSender?: null,
      receiver?: null,
      data?: null
    ): NewFxMessageEventFilter;
  };

  estimateGas: {
    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    onStateReceive(
      stateId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxRoot(
      _fxRoot: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onStateReceive(
      stateId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxRoot(
      _fxRoot: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}