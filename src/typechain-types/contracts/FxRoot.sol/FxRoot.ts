/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface FxRootInterface extends utils.Interface {
  functions: {
    "fxChild()": FunctionFragment;
    "sendMessageToChild(address,bytes)": FunctionFragment;
    "setFxChild(address)": FunctionFragment;
    "stateSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fxChild"
      | "sendMessageToChild"
      | "setFxChild"
      | "stateSender"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessageToChild",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxChild",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stateSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageToChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stateSender",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FxRoot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxRootInterface;

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

    sendMessageToChild(
      _receiver: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxChild(
      _fxChild: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stateSender(overrides?: CallOverrides): Promise<[string]>;
  };

  fxChild(overrides?: CallOverrides): Promise<string>;

  sendMessageToChild(
    _receiver: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxChild(
    _fxChild: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stateSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fxChild(overrides?: CallOverrides): Promise<string>;

    sendMessageToChild(
      _receiver: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxChild(
      _fxChild: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stateSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessageToChild(
      _receiver: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxChild(
      _fxChild: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stateSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessageToChild(
      _receiver: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxChild(
      _fxChild: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stateSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
