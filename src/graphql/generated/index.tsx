import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Bin = {
  __typename?: "Bin";
  binId: Scalars["BigInt"];
  id: Scalars["ID"];
  lbPair: LbPair;
  priceX: Scalars["BigDecimal"];
  priceY: Scalars["BigDecimal"];
  reserveX: Scalars["BigDecimal"];
  reserveY: Scalars["BigDecimal"];
  totalSupply: Scalars["BigInt"];
};

export type Bin_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bin_Filter>>>;
  binId?: InputMaybe<Scalars["BigInt"]>;
  binId_gt?: InputMaybe<Scalars["BigInt"]>;
  binId_gte?: InputMaybe<Scalars["BigInt"]>;
  binId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  binId_lt?: InputMaybe<Scalars["BigInt"]>;
  binId_lte?: InputMaybe<Scalars["BigInt"]>;
  binId_not?: InputMaybe<Scalars["BigInt"]>;
  binId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Bin_Filter>>>;
  priceX?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceY?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveX?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Bin_OrderBy {
  BinId = "binId",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  PriceX = "priceX",
  PriceY = "priceY",
  ReserveX = "reserveX",
  ReserveY = "reserveY",
  TotalSupply = "totalSupply",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Bundle = {
  __typename?: "Bundle";
  avaxPriceUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
};

export type Bundle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
  avaxPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  avaxPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  avaxPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
};

export enum Bundle_OrderBy {
  AvaxPriceUsd = "avaxPriceUSD",
  Id = "id",
}

export type Burn = {
  __typename?: "Burn";
  amountUSD: Scalars["BigDecimal"];
  amountX: Scalars["BigDecimal"];
  amountY: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  lbTokenAmount: Scalars["BigInt"];
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  transaction: Transaction;
};

export type Burn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Burn_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lbTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Burn_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["Bytes"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Burn_OrderBy {
  AmountUsd = "amountUSD",
  AmountX = "amountX",
  AmountY = "amountY",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LbTokenAmount = "lbTokenAmount",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  Sender = "sender",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type Collect = {
  __typename?: "Collect";
  amountX: Scalars["BigDecimal"];
  amountY: Scalars["BigDecimal"];
  collectedAVAX: Scalars["BigDecimal"];
  collectedUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: User;
  timestamp: Scalars["Int"];
  transaction: Transaction;
};

export type Collect_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountX?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Collect_Filter>>>;
  collectedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Collect_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["String"]>;
  recipient_?: InputMaybe<User_Filter>;
  recipient_contains?: InputMaybe<Scalars["String"]>;
  recipient_contains_nocase?: InputMaybe<Scalars["String"]>;
  recipient_ends_with?: InputMaybe<Scalars["String"]>;
  recipient_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_gt?: InputMaybe<Scalars["String"]>;
  recipient_gte?: InputMaybe<Scalars["String"]>;
  recipient_in?: InputMaybe<Array<Scalars["String"]>>;
  recipient_lt?: InputMaybe<Scalars["String"]>;
  recipient_lte?: InputMaybe<Scalars["String"]>;
  recipient_not?: InputMaybe<Scalars["String"]>;
  recipient_not_contains?: InputMaybe<Scalars["String"]>;
  recipient_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  recipient_not_ends_with?: InputMaybe<Scalars["String"]>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["String"]>>;
  recipient_not_starts_with?: InputMaybe<Scalars["String"]>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_starts_with?: InputMaybe<Scalars["String"]>;
  recipient_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Collect_OrderBy {
  AmountX = "amountX",
  AmountY = "amountY",
  CollectedAvax = "collectedAVAX",
  CollectedUsd = "collectedUSD",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  RecipientId = "recipient__id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type Flash = {
  __typename?: "Flash";
  amount: Scalars["BigDecimal"];
  amountUSD: Scalars["BigDecimal"];
  fees: Scalars["BigDecimal"];
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  token: Token;
  transaction: Transaction;
};

export type Flash_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Flash_Filter>>>;
  fees?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fees_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fees_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fees_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fees_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fees_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fees_not?: InputMaybe<Scalars["BigDecimal"]>;
  fees_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Flash_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["Bytes"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Flash_OrderBy {
  Amount = "amount",
  AmountUsd = "amountUSD",
  Fees = "fees",
  FeesUsd = "feesUSD",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  Sender = "sender",
  Timestamp = "timestamp",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenDerivedAvax = "token__derivedAVAX",
  TokenFeesUsd = "token__feesUSD",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  TokenTotalValueLocked = "token__totalValueLocked",
  TokenTotalValueLockedUsd = "token__totalValueLockedUSD",
  TokenTxCount = "token__txCount",
  TokenUntrackedVolumeUsd = "token__untrackedVolumeUSD",
  TokenVolume = "token__volume",
  TokenVolumeUsd = "token__volumeUSD",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type LbFactory = {
  __typename?: "LBFactory";
  dayData: Array<TraderJoeDayData>;
  feesAVAX: Scalars["BigDecimal"];
  feesUSD: Scalars["BigDecimal"];
  flashloanFee: Scalars["BigInt"];
  hourData: Array<TraderJoeHourData>;
  id: Scalars["ID"];
  ignoredLbPairs: Array<LbPair>;
  lbPairs: Array<LbPair>;
  pairCount: Scalars["BigInt"];
  tokenCount: Scalars["BigInt"];
  tokens: Array<Token>;
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  userCount: Scalars["BigInt"];
  volumeAVAX: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type LbFactoryDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TraderJoeDayData_Filter>;
};

export type LbFactoryHourDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TraderJoeHourData_Filter>;
};

export type LbFactoryIgnoredLbPairsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPair_Filter>;
};

export type LbFactoryLbPairsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPair_Filter>;
};

export type LbFactoryTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type LbFactory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LbFactory_Filter>>>;
  dayData_?: InputMaybe<TraderJoeDayData_Filter>;
  feesAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  flashloanFee?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_gt?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_gte?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  flashloanFee_lt?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_lte?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_not?: InputMaybe<Scalars["BigInt"]>;
  flashloanFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hourData_?: InputMaybe<TraderJoeHourData_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  ignoredLbPairs?: InputMaybe<Array<Scalars["String"]>>;
  ignoredLbPairs_?: InputMaybe<LbPair_Filter>;
  ignoredLbPairs_contains?: InputMaybe<Array<Scalars["String"]>>;
  ignoredLbPairs_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  ignoredLbPairs_not?: InputMaybe<Array<Scalars["String"]>>;
  ignoredLbPairs_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  ignoredLbPairs_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  lbPairs_?: InputMaybe<LbPair_Filter>;
  or?: InputMaybe<Array<InputMaybe<LbFactory_Filter>>>;
  pairCount?: InputMaybe<Scalars["BigInt"]>;
  pairCount_gt?: InputMaybe<Scalars["BigInt"]>;
  pairCount_gte?: InputMaybe<Scalars["BigInt"]>;
  pairCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pairCount_lt?: InputMaybe<Scalars["BigInt"]>;
  pairCount_lte?: InputMaybe<Scalars["BigInt"]>;
  pairCount_not?: InputMaybe<Scalars["BigInt"]>;
  pairCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenCount?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenCount_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_not?: InputMaybe<Scalars["BigInt"]>;
  tokenCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokens_?: InputMaybe<Token_Filter>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  userCount?: InputMaybe<Scalars["BigInt"]>;
  userCount_gt?: InputMaybe<Scalars["BigInt"]>;
  userCount_gte?: InputMaybe<Scalars["BigInt"]>;
  userCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  userCount_lt?: InputMaybe<Scalars["BigInt"]>;
  userCount_lte?: InputMaybe<Scalars["BigInt"]>;
  userCount_not?: InputMaybe<Scalars["BigInt"]>;
  userCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volumeAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum LbFactory_OrderBy {
  DayData = "dayData",
  FeesAvax = "feesAVAX",
  FeesUsd = "feesUSD",
  FlashloanFee = "flashloanFee",
  HourData = "hourData",
  Id = "id",
  IgnoredLbPairs = "ignoredLbPairs",
  LbPairs = "lbPairs",
  PairCount = "pairCount",
  TokenCount = "tokenCount",
  Tokens = "tokens",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  UserCount = "userCount",
  VolumeAvax = "volumeAVAX",
  VolumeUsd = "volumeUSD",
}

export type LbPair = {
  __typename?: "LBPair";
  activeId: Scalars["BigInt"];
  baseFeePct: Scalars["BigDecimal"];
  binStep: Scalars["BigInt"];
  bins: Array<Bin>;
  block: Scalars["BigInt"];
  burns: Array<Burn>;
  collects: Array<Collect>;
  dayData: Array<LbPairDayData>;
  factory: LbFactory;
  feesTokenX: Scalars["BigDecimal"];
  feesTokenY: Scalars["BigDecimal"];
  feesUSD: Scalars["BigDecimal"];
  flashed: Array<Flash>;
  hourData: Array<LbPairHourData>;
  id: Scalars["ID"];
  liquidityPositions: Array<LiquidityPosition>;
  liquidityProviderCount: Scalars["BigInt"];
  mints: Array<Mint>;
  name: Scalars["String"];
  reserveX: Scalars["BigDecimal"];
  reserveY: Scalars["BigDecimal"];
  swaps: Array<Swap>;
  timestamp: Scalars["BigInt"];
  tokenX: Token;
  tokenXPrice: Scalars["BigDecimal"];
  tokenXPriceUSD: Scalars["BigDecimal"];
  tokenY: Token;
  tokenYPrice: Scalars["BigDecimal"];
  tokenYPriceUSD: Scalars["BigDecimal"];
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  transfers: Array<Transfer>;
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volumeTokenX: Scalars["BigDecimal"];
  volumeTokenY: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type LbPairBinsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Bin_Filter>;
};

export type LbPairBurnsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Burn_Filter>;
};

export type LbPairCollectsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Collect_Filter>;
};

export type LbPairDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairDayData_Filter>;
};

export type LbPairFlashedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Flash_Filter>;
};

export type LbPairHourDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairHourData_Filter>;
};

export type LbPairLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type LbPairMintsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Mint_Filter>;
};

export type LbPairSwapsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type LbPairTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transfer_Filter>;
};

export type LbPairDayData = {
  __typename?: "LBPairDayData";
  date: Scalars["Int"];
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  reserveX: Scalars["BigDecimal"];
  reserveY: Scalars["BigDecimal"];
  tokenX: Token;
  tokenY: Token;
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volumeTokenX: Scalars["BigDecimal"];
  volumeTokenY: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type LbPairDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LbPairDayData_Filter>>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<LbPairDayData_Filter>>>;
  reserveX?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenX?: InputMaybe<Scalars["String"]>;
  tokenX_?: InputMaybe<Token_Filter>;
  tokenX_contains?: InputMaybe<Scalars["String"]>;
  tokenX_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_gt?: InputMaybe<Scalars["String"]>;
  tokenX_gte?: InputMaybe<Scalars["String"]>;
  tokenX_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_lt?: InputMaybe<Scalars["String"]>;
  tokenX_lte?: InputMaybe<Scalars["String"]>;
  tokenX_not?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY?: InputMaybe<Scalars["String"]>;
  tokenY_?: InputMaybe<Token_Filter>;
  tokenY_contains?: InputMaybe<Scalars["String"]>;
  tokenY_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_gt?: InputMaybe<Scalars["String"]>;
  tokenY_gte?: InputMaybe<Scalars["String"]>;
  tokenY_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_lt?: InputMaybe<Scalars["String"]>;
  tokenY_lte?: InputMaybe<Scalars["String"]>;
  tokenY_not?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum LbPairDayData_OrderBy {
  Date = "date",
  FeesUsd = "feesUSD",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  ReserveX = "reserveX",
  ReserveY = "reserveY",
  TokenX = "tokenX",
  TokenXDecimals = "tokenX__decimals",
  TokenXDerivedAvax = "tokenX__derivedAVAX",
  TokenXFeesUsd = "tokenX__feesUSD",
  TokenXId = "tokenX__id",
  TokenXName = "tokenX__name",
  TokenXSymbol = "tokenX__symbol",
  TokenXTotalSupply = "tokenX__totalSupply",
  TokenXTotalValueLocked = "tokenX__totalValueLocked",
  TokenXTotalValueLockedUsd = "tokenX__totalValueLockedUSD",
  TokenXTxCount = "tokenX__txCount",
  TokenXUntrackedVolumeUsd = "tokenX__untrackedVolumeUSD",
  TokenXVolume = "tokenX__volume",
  TokenXVolumeUsd = "tokenX__volumeUSD",
  TokenY = "tokenY",
  TokenYDecimals = "tokenY__decimals",
  TokenYDerivedAvax = "tokenY__derivedAVAX",
  TokenYFeesUsd = "tokenY__feesUSD",
  TokenYId = "tokenY__id",
  TokenYName = "tokenY__name",
  TokenYSymbol = "tokenY__symbol",
  TokenYTotalSupply = "tokenY__totalSupply",
  TokenYTotalValueLocked = "tokenY__totalValueLocked",
  TokenYTotalValueLockedUsd = "tokenY__totalValueLockedUSD",
  TokenYTxCount = "tokenY__txCount",
  TokenYUntrackedVolumeUsd = "tokenY__untrackedVolumeUSD",
  TokenYVolume = "tokenY__volume",
  TokenYVolumeUsd = "tokenY__volumeUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  VolumeTokenX = "volumeTokenX",
  VolumeTokenY = "volumeTokenY",
  VolumeUsd = "volumeUSD",
}

export type LbPairHourData = {
  __typename?: "LBPairHourData";
  date: Scalars["Int"];
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  reserveX: Scalars["BigDecimal"];
  reserveY: Scalars["BigDecimal"];
  tokenX: Token;
  tokenY: Token;
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volumeTokenX: Scalars["BigDecimal"];
  volumeTokenY: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type LbPairHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LbPairHourData_Filter>>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<LbPairHourData_Filter>>>;
  reserveX?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenX?: InputMaybe<Scalars["String"]>;
  tokenX_?: InputMaybe<Token_Filter>;
  tokenX_contains?: InputMaybe<Scalars["String"]>;
  tokenX_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_gt?: InputMaybe<Scalars["String"]>;
  tokenX_gte?: InputMaybe<Scalars["String"]>;
  tokenX_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_lt?: InputMaybe<Scalars["String"]>;
  tokenX_lte?: InputMaybe<Scalars["String"]>;
  tokenX_not?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY?: InputMaybe<Scalars["String"]>;
  tokenY_?: InputMaybe<Token_Filter>;
  tokenY_contains?: InputMaybe<Scalars["String"]>;
  tokenY_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_gt?: InputMaybe<Scalars["String"]>;
  tokenY_gte?: InputMaybe<Scalars["String"]>;
  tokenY_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_lt?: InputMaybe<Scalars["String"]>;
  tokenY_lte?: InputMaybe<Scalars["String"]>;
  tokenY_not?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum LbPairHourData_OrderBy {
  Date = "date",
  FeesUsd = "feesUSD",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  ReserveX = "reserveX",
  ReserveY = "reserveY",
  TokenX = "tokenX",
  TokenXDecimals = "tokenX__decimals",
  TokenXDerivedAvax = "tokenX__derivedAVAX",
  TokenXFeesUsd = "tokenX__feesUSD",
  TokenXId = "tokenX__id",
  TokenXName = "tokenX__name",
  TokenXSymbol = "tokenX__symbol",
  TokenXTotalSupply = "tokenX__totalSupply",
  TokenXTotalValueLocked = "tokenX__totalValueLocked",
  TokenXTotalValueLockedUsd = "tokenX__totalValueLockedUSD",
  TokenXTxCount = "tokenX__txCount",
  TokenXUntrackedVolumeUsd = "tokenX__untrackedVolumeUSD",
  TokenXVolume = "tokenX__volume",
  TokenXVolumeUsd = "tokenX__volumeUSD",
  TokenY = "tokenY",
  TokenYDecimals = "tokenY__decimals",
  TokenYDerivedAvax = "tokenY__derivedAVAX",
  TokenYFeesUsd = "tokenY__feesUSD",
  TokenYId = "tokenY__id",
  TokenYName = "tokenY__name",
  TokenYSymbol = "tokenY__symbol",
  TokenYTotalSupply = "tokenY__totalSupply",
  TokenYTotalValueLocked = "tokenY__totalValueLocked",
  TokenYTotalValueLockedUsd = "tokenY__totalValueLockedUSD",
  TokenYTxCount = "tokenY__txCount",
  TokenYUntrackedVolumeUsd = "tokenY__untrackedVolumeUSD",
  TokenYVolume = "tokenY__volume",
  TokenYVolumeUsd = "tokenY__volumeUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  VolumeTokenX = "volumeTokenX",
  VolumeTokenY = "volumeTokenY",
  VolumeUsd = "volumeUSD",
}

export type LbPair_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeId?: InputMaybe<Scalars["BigInt"]>;
  activeId_gt?: InputMaybe<Scalars["BigInt"]>;
  activeId_gte?: InputMaybe<Scalars["BigInt"]>;
  activeId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeId_lt?: InputMaybe<Scalars["BigInt"]>;
  activeId_lte?: InputMaybe<Scalars["BigInt"]>;
  activeId_not?: InputMaybe<Scalars["BigInt"]>;
  activeId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<LbPair_Filter>>>;
  baseFeePct?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_gt?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_gte?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  baseFeePct_lt?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_lte?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_not?: InputMaybe<Scalars["BigDecimal"]>;
  baseFeePct_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  binStep?: InputMaybe<Scalars["BigInt"]>;
  binStep_gt?: InputMaybe<Scalars["BigInt"]>;
  binStep_gte?: InputMaybe<Scalars["BigInt"]>;
  binStep_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  binStep_lt?: InputMaybe<Scalars["BigInt"]>;
  binStep_lte?: InputMaybe<Scalars["BigInt"]>;
  binStep_not?: InputMaybe<Scalars["BigInt"]>;
  binStep_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bins_?: InputMaybe<Bin_Filter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  burns_?: InputMaybe<Burn_Filter>;
  collects_?: InputMaybe<Collect_Filter>;
  dayData_?: InputMaybe<LbPairDayData_Filter>;
  factory?: InputMaybe<Scalars["String"]>;
  factory_?: InputMaybe<LbFactory_Filter>;
  factory_contains?: InputMaybe<Scalars["String"]>;
  factory_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_ends_with?: InputMaybe<Scalars["String"]>;
  factory_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_gt?: InputMaybe<Scalars["String"]>;
  factory_gte?: InputMaybe<Scalars["String"]>;
  factory_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_lt?: InputMaybe<Scalars["String"]>;
  factory_lte?: InputMaybe<Scalars["String"]>;
  factory_not?: InputMaybe<Scalars["String"]>;
  factory_not_contains?: InputMaybe<Scalars["String"]>;
  factory_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_not_starts_with?: InputMaybe<Scalars["String"]>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_starts_with?: InputMaybe<Scalars["String"]>;
  factory_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  feesTokenX?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenY?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  flashed_?: InputMaybe<Flash_Filter>;
  hourData_?: InputMaybe<LbPairHourData_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_Filter>;
  liquidityProviderCount?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityProviderCount_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  mints_?: InputMaybe<Mint_Filter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<LbPair_Filter>>>;
  reserveX?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swaps_?: InputMaybe<Swap_Filter>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenX?: InputMaybe<Scalars["String"]>;
  tokenXPrice?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenXPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenXPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenXPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenXPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenX_?: InputMaybe<Token_Filter>;
  tokenX_contains?: InputMaybe<Scalars["String"]>;
  tokenX_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_gt?: InputMaybe<Scalars["String"]>;
  tokenX_gte?: InputMaybe<Scalars["String"]>;
  tokenX_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_lt?: InputMaybe<Scalars["String"]>;
  tokenX_lte?: InputMaybe<Scalars["String"]>;
  tokenX_not?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains?: InputMaybe<Scalars["String"]>;
  tokenX_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenX_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with?: InputMaybe<Scalars["String"]>;
  tokenX_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY?: InputMaybe<Scalars["String"]>;
  tokenYPrice?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenYPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenYPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenYPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenYPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenY_?: InputMaybe<Token_Filter>;
  tokenY_contains?: InputMaybe<Scalars["String"]>;
  tokenY_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_gt?: InputMaybe<Scalars["String"]>;
  tokenY_gte?: InputMaybe<Scalars["String"]>;
  tokenY_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_lt?: InputMaybe<Scalars["String"]>;
  tokenY_lte?: InputMaybe<Scalars["String"]>;
  tokenY_not?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains?: InputMaybe<Scalars["String"]>;
  tokenY_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenY_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with?: InputMaybe<Scalars["String"]>;
  tokenY_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  transfers_?: InputMaybe<Transfer_Filter>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeTokenY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeTokenY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum LbPair_OrderBy {
  ActiveId = "activeId",
  BaseFeePct = "baseFeePct",
  BinStep = "binStep",
  Bins = "bins",
  Block = "block",
  Burns = "burns",
  Collects = "collects",
  DayData = "dayData",
  Factory = "factory",
  FactoryFeesAvax = "factory__feesAVAX",
  FactoryFeesUsd = "factory__feesUSD",
  FactoryFlashloanFee = "factory__flashloanFee",
  FactoryId = "factory__id",
  FactoryPairCount = "factory__pairCount",
  FactoryTokenCount = "factory__tokenCount",
  FactoryTotalValueLockedAvax = "factory__totalValueLockedAVAX",
  FactoryTotalValueLockedUsd = "factory__totalValueLockedUSD",
  FactoryTxCount = "factory__txCount",
  FactoryUntrackedVolumeUsd = "factory__untrackedVolumeUSD",
  FactoryUserCount = "factory__userCount",
  FactoryVolumeAvax = "factory__volumeAVAX",
  FactoryVolumeUsd = "factory__volumeUSD",
  FeesTokenX = "feesTokenX",
  FeesTokenY = "feesTokenY",
  FeesUsd = "feesUSD",
  Flashed = "flashed",
  HourData = "hourData",
  Id = "id",
  LiquidityPositions = "liquidityPositions",
  LiquidityProviderCount = "liquidityProviderCount",
  Mints = "mints",
  Name = "name",
  ReserveX = "reserveX",
  ReserveY = "reserveY",
  Swaps = "swaps",
  Timestamp = "timestamp",
  TokenX = "tokenX",
  TokenXPrice = "tokenXPrice",
  TokenXPriceUsd = "tokenXPriceUSD",
  TokenXDecimals = "tokenX__decimals",
  TokenXDerivedAvax = "tokenX__derivedAVAX",
  TokenXFeesUsd = "tokenX__feesUSD",
  TokenXId = "tokenX__id",
  TokenXName = "tokenX__name",
  TokenXSymbol = "tokenX__symbol",
  TokenXTotalSupply = "tokenX__totalSupply",
  TokenXTotalValueLocked = "tokenX__totalValueLocked",
  TokenXTotalValueLockedUsd = "tokenX__totalValueLockedUSD",
  TokenXTxCount = "tokenX__txCount",
  TokenXUntrackedVolumeUsd = "tokenX__untrackedVolumeUSD",
  TokenXVolume = "tokenX__volume",
  TokenXVolumeUsd = "tokenX__volumeUSD",
  TokenY = "tokenY",
  TokenYPrice = "tokenYPrice",
  TokenYPriceUsd = "tokenYPriceUSD",
  TokenYDecimals = "tokenY__decimals",
  TokenYDerivedAvax = "tokenY__derivedAVAX",
  TokenYFeesUsd = "tokenY__feesUSD",
  TokenYId = "tokenY__id",
  TokenYName = "tokenY__name",
  TokenYSymbol = "tokenY__symbol",
  TokenYTotalSupply = "tokenY__totalSupply",
  TokenYTotalValueLocked = "tokenY__totalValueLocked",
  TokenYTotalValueLockedUsd = "tokenY__totalValueLockedUSD",
  TokenYTxCount = "tokenY__txCount",
  TokenYUntrackedVolumeUsd = "tokenY__untrackedVolumeUSD",
  TokenYVolume = "tokenY__volume",
  TokenYVolumeUsd = "tokenY__volumeUSD",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  Transfers = "transfers",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  VolumeTokenX = "volumeTokenX",
  VolumeTokenY = "volumeTokenY",
  VolumeUsd = "volumeUSD",
}

export type LiquidityPosition = {
  __typename?: "LiquidityPosition";
  binsCount: Scalars["BigInt"];
  block: Scalars["Int"];
  id: Scalars["ID"];
  lbPair: LbPair;
  timestamp: Scalars["Int"];
  user: User;
  userBinLiquidities: Array<UserBinLiquidity>;
};

export type LiquidityPositionUserBinLiquiditiesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserBinLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserBinLiquidity_Filter>;
};

export type LiquidityPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPosition_Filter>>>;
  binsCount?: InputMaybe<Scalars["BigInt"]>;
  binsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  binsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  binsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  binsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  binsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  binsCount_not?: InputMaybe<Scalars["BigInt"]>;
  binsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block?: InputMaybe<Scalars["Int"]>;
  block_gt?: InputMaybe<Scalars["Int"]>;
  block_gte?: InputMaybe<Scalars["Int"]>;
  block_in?: InputMaybe<Array<Scalars["Int"]>>;
  block_lt?: InputMaybe<Scalars["Int"]>;
  block_lte?: InputMaybe<Scalars["Int"]>;
  block_not?: InputMaybe<Scalars["Int"]>;
  block_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPosition_Filter>>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userBinLiquidities_?: InputMaybe<UserBinLiquidity_Filter>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum LiquidityPosition_OrderBy {
  BinsCount = "binsCount",
  Block = "block",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  Timestamp = "timestamp",
  User = "user",
  UserBinLiquidities = "userBinLiquidities",
  UserId = "user__id",
}

export type Mint = {
  __typename?: "Mint";
  amountUSD: Scalars["BigDecimal"];
  amountX: Scalars["BigDecimal"];
  amountY: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  lbTokenAmount: Scalars["BigInt"];
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  transaction: Transaction;
};

export type Mint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Mint_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lbTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Mint_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["Bytes"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Mint_OrderBy {
  AmountUsd = "amountUSD",
  AmountX = "amountX",
  AmountY = "amountY",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LbTokenAmount = "lbTokenAmount",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  Sender = "sender",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bin?: Maybe<Bin>;
  bins: Array<Bin>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  lbfactories: Array<LbFactory>;
  lbfactory?: Maybe<LbFactory>;
  lbpair?: Maybe<LbPair>;
  lbpairDayData?: Maybe<LbPairDayData>;
  lbpairDayDatas: Array<LbPairDayData>;
  lbpairHourData?: Maybe<LbPairHourData>;
  lbpairHourDatas: Array<LbPairHourData>;
  lbpairs: Array<LbPair>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  sjoeDayData?: Maybe<SJoeDayData>;
  sjoeDayDatas: Array<SJoeDayData>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokens: Array<Token>;
  traderJoeDayData?: Maybe<TraderJoeDayData>;
  traderJoeDayDatas: Array<TraderJoeDayData>;
  traderJoeHourData?: Maybe<TraderJoeHourData>;
  traderJoeHourDatas: Array<TraderJoeHourData>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  userBinLiquidities: Array<UserBinLiquidity>;
  userBinLiquidity?: Maybe<UserBinLiquidity>;
  users: Array<User>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBinArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBinsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bin_Filter>;
};

export type QueryBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};

export type QueryBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};

export type QueryCollectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCollectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collect_Filter>;
};

export type QueryFlashArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFlashesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Flash_Filter>;
};

export type QueryLbfactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbFactory_Filter>;
};

export type QueryLbfactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLbpairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLbpairDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLbpairDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPairDayData_Filter>;
};

export type QueryLbpairHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLbpairHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPairHourData_Filter>;
};

export type QueryLbpairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPair_Filter>;
};

export type QueryLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type QueryMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};

export type QuerySjoeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySjoeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SJoeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SJoeDayData_Filter>;
};

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};

export type QueryTokenHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHourData_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTraderJoeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderJoeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderJoeDayData_Filter>;
};

export type QueryTraderJoeHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderJoeHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderJoeHourData_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserBinLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserBinLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserBinLiquidity_Filter>;
};

export type QueryUserBinLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SJoeDayData = {
  __typename?: "SJoeDayData";
  amountX: Scalars["BigDecimal"];
  amountY: Scalars["BigDecimal"];
  collectedAVAX: Scalars["BigDecimal"];
  collectedUSD: Scalars["BigDecimal"];
  date: Scalars["Int"];
  id: Scalars["ID"];
};

export type SJoeDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountX?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<SJoeDayData_Filter>>>;
  collectedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<SJoeDayData_Filter>>>;
};

export enum SJoeDayData_OrderBy {
  AmountX = "amountX",
  AmountY = "amountY",
  CollectedAvax = "collectedAVAX",
  CollectedUsd = "collectedUSD",
  Date = "date",
  Id = "id",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bin?: Maybe<Bin>;
  bins: Array<Bin>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  lbfactories: Array<LbFactory>;
  lbfactory?: Maybe<LbFactory>;
  lbpair?: Maybe<LbPair>;
  lbpairDayData?: Maybe<LbPairDayData>;
  lbpairDayDatas: Array<LbPairDayData>;
  lbpairHourData?: Maybe<LbPairHourData>;
  lbpairHourDatas: Array<LbPairHourData>;
  lbpairs: Array<LbPair>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  sjoeDayData?: Maybe<SJoeDayData>;
  sjoeDayDatas: Array<SJoeDayData>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokens: Array<Token>;
  traderJoeDayData?: Maybe<TraderJoeDayData>;
  traderJoeDayDatas: Array<TraderJoeDayData>;
  traderJoeHourData?: Maybe<TraderJoeHourData>;
  traderJoeHourDatas: Array<TraderJoeHourData>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  userBinLiquidities: Array<UserBinLiquidity>;
  userBinLiquidity?: Maybe<UserBinLiquidity>;
  users: Array<User>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionBinArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBinsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bin_Filter>;
};

export type SubscriptionBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};

export type SubscriptionBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};

export type SubscriptionCollectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCollectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collect_Filter>;
};

export type SubscriptionFlashArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFlashesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Flash_Filter>;
};

export type SubscriptionLbfactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbFactory_Filter>;
};

export type SubscriptionLbfactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLbpairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLbpairDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLbpairDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPairDayData_Filter>;
};

export type SubscriptionLbpairHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLbpairHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPairHourData_Filter>;
};

export type SubscriptionLbpairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LbPair_Filter>;
};

export type SubscriptionLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type SubscriptionMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};

export type SubscriptionSjoeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSjoeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SJoeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SJoeDayData_Filter>;
};

export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};

export type SubscriptionTokenHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHourData_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTraderJoeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderJoeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderJoeDayData_Filter>;
};

export type SubscriptionTraderJoeHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderJoeHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderJoeHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderJoeHourData_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserBinLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserBinLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserBinLiquidity_Filter>;
};

export type SubscriptionUserBinLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Swap = {
  __typename?: "Swap";
  activeId: Scalars["BigInt"];
  amountUSD: Scalars["BigDecimal"];
  amountXIn: Scalars["BigDecimal"];
  amountXOut: Scalars["BigDecimal"];
  amountYIn: Scalars["BigDecimal"];
  amountYOut: Scalars["BigDecimal"];
  feesTokenX: Scalars["BigDecimal"];
  feesTokenY: Scalars["BigDecimal"];
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lbPair: LbPair;
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  transaction: Transaction;
};

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeId?: InputMaybe<Scalars["BigInt"]>;
  activeId_gt?: InputMaybe<Scalars["BigInt"]>;
  activeId_gte?: InputMaybe<Scalars["BigInt"]>;
  activeId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeId_lt?: InputMaybe<Scalars["BigInt"]>;
  activeId_lte?: InputMaybe<Scalars["BigInt"]>;
  activeId_not?: InputMaybe<Scalars["BigInt"]>;
  activeId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountXIn?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountXIn_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountXIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountXOut?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountXOut_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountXOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountYIn?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountYIn_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountYIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountYOut?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountYOut_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountYOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  feesTokenX?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenY?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesTokenY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesTokenY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["Bytes"]>;
  recipient_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_gt?: InputMaybe<Scalars["Bytes"]>;
  recipient_gte?: InputMaybe<Scalars["Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient_lt?: InputMaybe<Scalars["Bytes"]>;
  recipient_lte?: InputMaybe<Scalars["Bytes"]>;
  recipient_not?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["Bytes"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Swap_OrderBy {
  ActiveId = "activeId",
  AmountUsd = "amountUSD",
  AmountXIn = "amountXIn",
  AmountXOut = "amountXOut",
  AmountYIn = "amountYIn",
  AmountYOut = "amountYOut",
  FeesTokenX = "feesTokenX",
  FeesTokenY = "feesTokenY",
  FeesUsd = "feesUSD",
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  Sender = "sender",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type Token = {
  __typename?: "Token";
  basePairs: Array<LbPair>;
  basePairsDayData: Array<LbPairDayData>;
  basePairsHourData: Array<LbPairHourData>;
  dayData: Array<TokenDayData>;
  decimals: Scalars["BigInt"];
  derivedAVAX: Scalars["BigDecimal"];
  factory: LbFactory;
  feesUSD: Scalars["BigDecimal"];
  hourData: Array<TokenHourData>;
  id: Scalars["ID"];
  name: Scalars["String"];
  quotePairs: Array<LbPair>;
  quotePairsDayData: Array<LbPairDayData>;
  quotePairsHourData: Array<LbPairHourData>;
  symbol: Scalars["String"];
  totalSupply: Scalars["BigInt"];
  totalValueLocked: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volume: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type TokenBasePairsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPair_Filter>;
};

export type TokenBasePairsDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairDayData_Filter>;
};

export type TokenBasePairsHourDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairHourData_Filter>;
};

export type TokenDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TokenDayData_Filter>;
};

export type TokenHourDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TokenHourData_Filter>;
};

export type TokenQuotePairsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPair_Filter>;
};

export type TokenQuotePairsDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairDayData_Filter>;
};

export type TokenQuotePairsHourDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LbPairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LbPairHourData_Filter>;
};

export type TokenDayData = {
  __typename?: "TokenDayData";
  close: Scalars["BigDecimal"];
  date: Scalars["Int"];
  feesUSD: Scalars["BigDecimal"];
  high: Scalars["BigDecimal"];
  id: Scalars["ID"];
  low: Scalars["BigDecimal"];
  open: Scalars["BigDecimal"];
  priceUSD: Scalars["BigDecimal"];
  token: Token;
  totalValueLocked: Scalars["BigDecimal"];
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  volume: Scalars["BigDecimal"];
  volumeAVAX: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type TokenDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDayData_Filter>>>;
  close?: InputMaybe<Scalars["BigDecimal"]>;
  close_gt?: InputMaybe<Scalars["BigDecimal"]>;
  close_gte?: InputMaybe<Scalars["BigDecimal"]>;
  close_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  close_lt?: InputMaybe<Scalars["BigDecimal"]>;
  close_lte?: InputMaybe<Scalars["BigDecimal"]>;
  close_not?: InputMaybe<Scalars["BigDecimal"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  high?: InputMaybe<Scalars["BigDecimal"]>;
  high_gt?: InputMaybe<Scalars["BigDecimal"]>;
  high_gte?: InputMaybe<Scalars["BigDecimal"]>;
  high_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  high_lt?: InputMaybe<Scalars["BigDecimal"]>;
  high_lte?: InputMaybe<Scalars["BigDecimal"]>;
  high_not?: InputMaybe<Scalars["BigDecimal"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  low?: InputMaybe<Scalars["BigDecimal"]>;
  low_gt?: InputMaybe<Scalars["BigDecimal"]>;
  low_gte?: InputMaybe<Scalars["BigDecimal"]>;
  low_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  low_lt?: InputMaybe<Scalars["BigDecimal"]>;
  low_lte?: InputMaybe<Scalars["BigDecimal"]>;
  low_not?: InputMaybe<Scalars["BigDecimal"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  open?: InputMaybe<Scalars["BigDecimal"]>;
  open_gt?: InputMaybe<Scalars["BigDecimal"]>;
  open_gte?: InputMaybe<Scalars["BigDecimal"]>;
  open_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  open_lt?: InputMaybe<Scalars["BigDecimal"]>;
  open_lte?: InputMaybe<Scalars["BigDecimal"]>;
  open_not?: InputMaybe<Scalars["BigDecimal"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenDayData_Filter>>>;
  priceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalValueLocked?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TokenDayData_OrderBy {
  Close = "close",
  Date = "date",
  FeesUsd = "feesUSD",
  High = "high",
  Id = "id",
  Low = "low",
  Open = "open",
  PriceUsd = "priceUSD",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenDerivedAvax = "token__derivedAVAX",
  TokenFeesUsd = "token__feesUSD",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  TokenTotalValueLocked = "token__totalValueLocked",
  TokenTotalValueLockedUsd = "token__totalValueLockedUSD",
  TokenTxCount = "token__txCount",
  TokenUntrackedVolumeUsd = "token__untrackedVolumeUSD",
  TokenVolume = "token__volume",
  TokenVolumeUsd = "token__volumeUSD",
  TotalValueLocked = "totalValueLocked",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  Volume = "volume",
  VolumeAvax = "volumeAVAX",
  VolumeUsd = "volumeUSD",
}

export type TokenHourData = {
  __typename?: "TokenHourData";
  close: Scalars["BigDecimal"];
  date: Scalars["Int"];
  feesUSD: Scalars["BigDecimal"];
  high: Scalars["BigDecimal"];
  id: Scalars["ID"];
  low: Scalars["BigDecimal"];
  open: Scalars["BigDecimal"];
  priceUSD: Scalars["BigDecimal"];
  token: Token;
  totalValueLocked: Scalars["BigDecimal"];
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  volume: Scalars["BigDecimal"];
  volumeAVAX: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type TokenHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHourData_Filter>>>;
  close?: InputMaybe<Scalars["BigDecimal"]>;
  close_gt?: InputMaybe<Scalars["BigDecimal"]>;
  close_gte?: InputMaybe<Scalars["BigDecimal"]>;
  close_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  close_lt?: InputMaybe<Scalars["BigDecimal"]>;
  close_lte?: InputMaybe<Scalars["BigDecimal"]>;
  close_not?: InputMaybe<Scalars["BigDecimal"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  high?: InputMaybe<Scalars["BigDecimal"]>;
  high_gt?: InputMaybe<Scalars["BigDecimal"]>;
  high_gte?: InputMaybe<Scalars["BigDecimal"]>;
  high_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  high_lt?: InputMaybe<Scalars["BigDecimal"]>;
  high_lte?: InputMaybe<Scalars["BigDecimal"]>;
  high_not?: InputMaybe<Scalars["BigDecimal"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  low?: InputMaybe<Scalars["BigDecimal"]>;
  low_gt?: InputMaybe<Scalars["BigDecimal"]>;
  low_gte?: InputMaybe<Scalars["BigDecimal"]>;
  low_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  low_lt?: InputMaybe<Scalars["BigDecimal"]>;
  low_lte?: InputMaybe<Scalars["BigDecimal"]>;
  low_not?: InputMaybe<Scalars["BigDecimal"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  open?: InputMaybe<Scalars["BigDecimal"]>;
  open_gt?: InputMaybe<Scalars["BigDecimal"]>;
  open_gte?: InputMaybe<Scalars["BigDecimal"]>;
  open_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  open_lt?: InputMaybe<Scalars["BigDecimal"]>;
  open_lte?: InputMaybe<Scalars["BigDecimal"]>;
  open_not?: InputMaybe<Scalars["BigDecimal"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenHourData_Filter>>>;
  priceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalValueLocked?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TokenHourData_OrderBy {
  Close = "close",
  Date = "date",
  FeesUsd = "feesUSD",
  High = "high",
  Id = "id",
  Low = "low",
  Open = "open",
  PriceUsd = "priceUSD",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenDerivedAvax = "token__derivedAVAX",
  TokenFeesUsd = "token__feesUSD",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  TokenTotalValueLocked = "token__totalValueLocked",
  TokenTotalValueLockedUsd = "token__totalValueLockedUSD",
  TokenTxCount = "token__txCount",
  TokenUntrackedVolumeUsd = "token__untrackedVolumeUSD",
  TokenVolume = "token__volume",
  TokenVolumeUsd = "token__volumeUSD",
  TotalValueLocked = "totalValueLocked",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  Volume = "volume",
  VolumeAvax = "volumeAVAX",
  VolumeUsd = "volumeUSD",
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  basePairsDayData_?: InputMaybe<LbPairDayData_Filter>;
  basePairsHourData_?: InputMaybe<LbPairHourData_Filter>;
  basePairs_?: InputMaybe<LbPair_Filter>;
  dayData_?: InputMaybe<TokenDayData_Filter>;
  decimals?: InputMaybe<Scalars["BigInt"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  derivedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  derivedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  derivedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  factory?: InputMaybe<Scalars["String"]>;
  factory_?: InputMaybe<LbFactory_Filter>;
  factory_contains?: InputMaybe<Scalars["String"]>;
  factory_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_ends_with?: InputMaybe<Scalars["String"]>;
  factory_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_gt?: InputMaybe<Scalars["String"]>;
  factory_gte?: InputMaybe<Scalars["String"]>;
  factory_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_lt?: InputMaybe<Scalars["String"]>;
  factory_lte?: InputMaybe<Scalars["String"]>;
  factory_not?: InputMaybe<Scalars["String"]>;
  factory_not_contains?: InputMaybe<Scalars["String"]>;
  factory_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_not_starts_with?: InputMaybe<Scalars["String"]>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_starts_with?: InputMaybe<Scalars["String"]>;
  factory_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourData_?: InputMaybe<TokenHourData_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  quotePairsDayData_?: InputMaybe<LbPairDayData_Filter>;
  quotePairsHourData_?: InputMaybe<LbPairHourData_Filter>;
  quotePairs_?: InputMaybe<LbPair_Filter>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLocked?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not?: InputMaybe<Scalars["BigDecimal"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Token_OrderBy {
  BasePairs = "basePairs",
  BasePairsDayData = "basePairsDayData",
  BasePairsHourData = "basePairsHourData",
  DayData = "dayData",
  Decimals = "decimals",
  DerivedAvax = "derivedAVAX",
  Factory = "factory",
  FactoryFeesAvax = "factory__feesAVAX",
  FactoryFeesUsd = "factory__feesUSD",
  FactoryFlashloanFee = "factory__flashloanFee",
  FactoryId = "factory__id",
  FactoryPairCount = "factory__pairCount",
  FactoryTokenCount = "factory__tokenCount",
  FactoryTotalValueLockedAvax = "factory__totalValueLockedAVAX",
  FactoryTotalValueLockedUsd = "factory__totalValueLockedUSD",
  FactoryTxCount = "factory__txCount",
  FactoryUntrackedVolumeUsd = "factory__untrackedVolumeUSD",
  FactoryUserCount = "factory__userCount",
  FactoryVolumeAvax = "factory__volumeAVAX",
  FactoryVolumeUsd = "factory__volumeUSD",
  FeesUsd = "feesUSD",
  HourData = "hourData",
  Id = "id",
  Name = "name",
  QuotePairs = "quotePairs",
  QuotePairsDayData = "quotePairsDayData",
  QuotePairsHourData = "quotePairsHourData",
  Symbol = "symbol",
  TotalSupply = "totalSupply",
  TotalValueLocked = "totalValueLocked",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  Volume = "volume",
  VolumeUsd = "volumeUSD",
}

export type TraderJoeDayData = {
  __typename?: "TraderJoeDayData";
  date: Scalars["Int"];
  factory: LbFactory;
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volumeAVAX: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type TraderJoeDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraderJoeDayData_Filter>>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  factory?: InputMaybe<Scalars["String"]>;
  factory_?: InputMaybe<LbFactory_Filter>;
  factory_contains?: InputMaybe<Scalars["String"]>;
  factory_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_ends_with?: InputMaybe<Scalars["String"]>;
  factory_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_gt?: InputMaybe<Scalars["String"]>;
  factory_gte?: InputMaybe<Scalars["String"]>;
  factory_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_lt?: InputMaybe<Scalars["String"]>;
  factory_lte?: InputMaybe<Scalars["String"]>;
  factory_not?: InputMaybe<Scalars["String"]>;
  factory_not_contains?: InputMaybe<Scalars["String"]>;
  factory_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_not_starts_with?: InputMaybe<Scalars["String"]>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_starts_with?: InputMaybe<Scalars["String"]>;
  factory_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TraderJoeDayData_Filter>>>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TraderJoeDayData_OrderBy {
  Date = "date",
  Factory = "factory",
  FactoryFeesAvax = "factory__feesAVAX",
  FactoryFeesUsd = "factory__feesUSD",
  FactoryFlashloanFee = "factory__flashloanFee",
  FactoryId = "factory__id",
  FactoryPairCount = "factory__pairCount",
  FactoryTokenCount = "factory__tokenCount",
  FactoryTotalValueLockedAvax = "factory__totalValueLockedAVAX",
  FactoryTotalValueLockedUsd = "factory__totalValueLockedUSD",
  FactoryTxCount = "factory__txCount",
  FactoryUntrackedVolumeUsd = "factory__untrackedVolumeUSD",
  FactoryUserCount = "factory__userCount",
  FactoryVolumeAvax = "factory__volumeAVAX",
  FactoryVolumeUsd = "factory__volumeUSD",
  FeesUsd = "feesUSD",
  Id = "id",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  VolumeAvax = "volumeAVAX",
  VolumeUsd = "volumeUSD",
}

export type TraderJoeHourData = {
  __typename?: "TraderJoeHourData";
  date: Scalars["Int"];
  factory: LbFactory;
  feesUSD: Scalars["BigDecimal"];
  id: Scalars["ID"];
  totalValueLockedAVAX: Scalars["BigDecimal"];
  totalValueLockedUSD: Scalars["BigDecimal"];
  txCount: Scalars["BigInt"];
  untrackedVolumeUSD: Scalars["BigDecimal"];
  volumeAVAX: Scalars["BigDecimal"];
  volumeUSD: Scalars["BigDecimal"];
};

export type TraderJoeHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraderJoeHourData_Filter>>>;
  date?: InputMaybe<Scalars["Int"]>;
  date_gt?: InputMaybe<Scalars["Int"]>;
  date_gte?: InputMaybe<Scalars["Int"]>;
  date_in?: InputMaybe<Array<Scalars["Int"]>>;
  date_lt?: InputMaybe<Scalars["Int"]>;
  date_lte?: InputMaybe<Scalars["Int"]>;
  date_not?: InputMaybe<Scalars["Int"]>;
  date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  factory?: InputMaybe<Scalars["String"]>;
  factory_?: InputMaybe<LbFactory_Filter>;
  factory_contains?: InputMaybe<Scalars["String"]>;
  factory_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_ends_with?: InputMaybe<Scalars["String"]>;
  factory_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_gt?: InputMaybe<Scalars["String"]>;
  factory_gte?: InputMaybe<Scalars["String"]>;
  factory_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_lt?: InputMaybe<Scalars["String"]>;
  factory_lte?: InputMaybe<Scalars["String"]>;
  factory_not?: InputMaybe<Scalars["String"]>;
  factory_not_contains?: InputMaybe<Scalars["String"]>;
  factory_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with?: InputMaybe<Scalars["String"]>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_not_in?: InputMaybe<Array<Scalars["String"]>>;
  factory_not_starts_with?: InputMaybe<Scalars["String"]>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_starts_with?: InputMaybe<Scalars["String"]>;
  factory_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  feesUSD?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feesUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  feesUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TraderJoeHourData_Filter>>>;
  totalValueLockedAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  txCount?: InputMaybe<Scalars["BigInt"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  untrackedVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeAVAX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeAVAX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  volumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TraderJoeHourData_OrderBy {
  Date = "date",
  Factory = "factory",
  FactoryFeesAvax = "factory__feesAVAX",
  FactoryFeesUsd = "factory__feesUSD",
  FactoryFlashloanFee = "factory__flashloanFee",
  FactoryId = "factory__id",
  FactoryPairCount = "factory__pairCount",
  FactoryTokenCount = "factory__tokenCount",
  FactoryTotalValueLockedAvax = "factory__totalValueLockedAVAX",
  FactoryTotalValueLockedUsd = "factory__totalValueLockedUSD",
  FactoryTxCount = "factory__txCount",
  FactoryUntrackedVolumeUsd = "factory__untrackedVolumeUSD",
  FactoryUserCount = "factory__userCount",
  FactoryVolumeAvax = "factory__volumeAVAX",
  FactoryVolumeUsd = "factory__volumeUSD",
  FeesUsd = "feesUSD",
  Id = "id",
  TotalValueLockedAvax = "totalValueLockedAVAX",
  TotalValueLockedUsd = "totalValueLockedUSD",
  TxCount = "txCount",
  UntrackedVolumeUsd = "untrackedVolumeUSD",
  VolumeAvax = "volumeAVAX",
  VolumeUsd = "volumeUSD",
}

export type Transaction = {
  __typename?: "Transaction";
  blockNumber: Scalars["Int"];
  burns: Array<Burn>;
  collects: Array<Collect>;
  flashed: Array<Flash>;
  id: Scalars["ID"];
  mints: Array<Mint>;
  swaps: Array<Swap>;
  timestamp: Scalars["Int"];
  transfers: Array<Transfer>;
};

export type TransactionBurnsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Burn_Filter>;
};

export type TransactionCollectsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Collect_Filter>;
};

export type TransactionFlashedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Flash_Filter>;
};

export type TransactionMintsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Mint_Filter>;
};

export type TransactionSwapsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type TransactionTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transfer_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars["Int"]>;
  blockNumber_gt?: InputMaybe<Scalars["Int"]>;
  blockNumber_gte?: InputMaybe<Scalars["Int"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["Int"]>>;
  blockNumber_lt?: InputMaybe<Scalars["Int"]>;
  blockNumber_lte?: InputMaybe<Scalars["Int"]>;
  blockNumber_not?: InputMaybe<Scalars["Int"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  burns_?: InputMaybe<Burn_Filter>;
  collects_?: InputMaybe<Collect_Filter>;
  flashed_?: InputMaybe<Flash_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  mints_?: InputMaybe<Mint_Filter>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  swaps_?: InputMaybe<Swap_Filter>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transfers_?: InputMaybe<Transfer_Filter>;
};

export enum Transaction_OrderBy {
  BlockNumber = "blockNumber",
  Burns = "burns",
  Collects = "collects",
  Flashed = "flashed",
  Id = "id",
  Mints = "mints",
  Swaps = "swaps",
  Timestamp = "timestamp",
  Transfers = "transfers",
}

export type Transfer = {
  __typename?: "Transfer";
  id: Scalars["ID"];
  lbPair: LbPair;
  lbTokenAmount: Scalars["BigInt"];
  logIndex: Scalars["BigInt"];
  origin: Scalars["Bytes"];
  recipient: User;
  sender: User;
  timestamp: Scalars["Int"];
  transaction: Transaction;
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbPair?: InputMaybe<Scalars["String"]>;
  lbPair_?: InputMaybe<LbPair_Filter>;
  lbPair_contains?: InputMaybe<Scalars["String"]>;
  lbPair_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_gt?: InputMaybe<Scalars["String"]>;
  lbPair_gte?: InputMaybe<Scalars["String"]>;
  lbPair_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_lt?: InputMaybe<Scalars["String"]>;
  lbPair_lte?: InputMaybe<Scalars["String"]>;
  lbPair_not?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains?: InputMaybe<Scalars["String"]>;
  lbPair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lbPair_not_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with?: InputMaybe<Scalars["String"]>;
  lbPair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lbTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lbTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  lbTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  recipient?: InputMaybe<Scalars["String"]>;
  recipient_?: InputMaybe<User_Filter>;
  recipient_contains?: InputMaybe<Scalars["String"]>;
  recipient_contains_nocase?: InputMaybe<Scalars["String"]>;
  recipient_ends_with?: InputMaybe<Scalars["String"]>;
  recipient_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_gt?: InputMaybe<Scalars["String"]>;
  recipient_gte?: InputMaybe<Scalars["String"]>;
  recipient_in?: InputMaybe<Array<Scalars["String"]>>;
  recipient_lt?: InputMaybe<Scalars["String"]>;
  recipient_lte?: InputMaybe<Scalars["String"]>;
  recipient_not?: InputMaybe<Scalars["String"]>;
  recipient_not_contains?: InputMaybe<Scalars["String"]>;
  recipient_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  recipient_not_ends_with?: InputMaybe<Scalars["String"]>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_not_in?: InputMaybe<Array<Scalars["String"]>>;
  recipient_not_starts_with?: InputMaybe<Scalars["String"]>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  recipient_starts_with?: InputMaybe<Scalars["String"]>;
  recipient_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["String"]>;
  sender_?: InputMaybe<User_Filter>;
  sender_contains?: InputMaybe<Scalars["String"]>;
  sender_contains_nocase?: InputMaybe<Scalars["String"]>;
  sender_ends_with?: InputMaybe<Scalars["String"]>;
  sender_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sender_gt?: InputMaybe<Scalars["String"]>;
  sender_gte?: InputMaybe<Scalars["String"]>;
  sender_in?: InputMaybe<Array<Scalars["String"]>>;
  sender_lt?: InputMaybe<Scalars["String"]>;
  sender_lte?: InputMaybe<Scalars["String"]>;
  sender_not?: InputMaybe<Scalars["String"]>;
  sender_not_contains?: InputMaybe<Scalars["String"]>;
  sender_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sender_not_ends_with?: InputMaybe<Scalars["String"]>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sender_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sender_not_starts_with?: InputMaybe<Scalars["String"]>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sender_starts_with?: InputMaybe<Scalars["String"]>;
  sender_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Transfer_OrderBy {
  Id = "id",
  LbPair = "lbPair",
  LbPairActiveId = "lbPair__activeId",
  LbPairBaseFeePct = "lbPair__baseFeePct",
  LbPairBinStep = "lbPair__binStep",
  LbPairBlock = "lbPair__block",
  LbPairFeesTokenX = "lbPair__feesTokenX",
  LbPairFeesTokenY = "lbPair__feesTokenY",
  LbPairFeesUsd = "lbPair__feesUSD",
  LbPairId = "lbPair__id",
  LbPairLiquidityProviderCount = "lbPair__liquidityProviderCount",
  LbPairName = "lbPair__name",
  LbPairReserveX = "lbPair__reserveX",
  LbPairReserveY = "lbPair__reserveY",
  LbPairTimestamp = "lbPair__timestamp",
  LbPairTokenXPrice = "lbPair__tokenXPrice",
  LbPairTokenXPriceUsd = "lbPair__tokenXPriceUSD",
  LbPairTokenYPrice = "lbPair__tokenYPrice",
  LbPairTokenYPriceUsd = "lbPair__tokenYPriceUSD",
  LbPairTotalValueLockedAvax = "lbPair__totalValueLockedAVAX",
  LbPairTotalValueLockedUsd = "lbPair__totalValueLockedUSD",
  LbPairTxCount = "lbPair__txCount",
  LbPairUntrackedVolumeUsd = "lbPair__untrackedVolumeUSD",
  LbPairVolumeTokenX = "lbPair__volumeTokenX",
  LbPairVolumeTokenY = "lbPair__volumeTokenY",
  LbPairVolumeUsd = "lbPair__volumeUSD",
  LbTokenAmount = "lbTokenAmount",
  LogIndex = "logIndex",
  Origin = "origin",
  Recipient = "recipient",
  RecipientId = "recipient__id",
  Sender = "sender",
  SenderId = "sender__id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type User = {
  __typename?: "User";
  collects: Array<Collect>;
  id: Scalars["ID"];
  lbTokenApprovals: Array<Scalars["Bytes"]>;
  liquidityPositions: Array<LiquidityPosition>;
};

export type UserCollectsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Collect_Filter>;
};

export type UserLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type UserBinLiquidity = {
  __typename?: "UserBinLiquidity";
  binId: Scalars["BigInt"];
  block: Scalars["Int"];
  id: Scalars["ID"];
  liquidity: Scalars["BigInt"];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars["Int"];
};

export type UserBinLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserBinLiquidity_Filter>>>;
  binId?: InputMaybe<Scalars["BigInt"]>;
  binId_gt?: InputMaybe<Scalars["BigInt"]>;
  binId_gte?: InputMaybe<Scalars["BigInt"]>;
  binId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  binId_lt?: InputMaybe<Scalars["BigInt"]>;
  binId_lte?: InputMaybe<Scalars["BigInt"]>;
  binId_not?: InputMaybe<Scalars["BigInt"]>;
  binId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block?: InputMaybe<Scalars["Int"]>;
  block_gt?: InputMaybe<Scalars["Int"]>;
  block_gte?: InputMaybe<Scalars["Int"]>;
  block_in?: InputMaybe<Array<Scalars["Int"]>>;
  block_lt?: InputMaybe<Scalars["Int"]>;
  block_lte?: InputMaybe<Scalars["Int"]>;
  block_not?: InputMaybe<Scalars["Int"]>;
  block_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidityPosition?: InputMaybe<Scalars["String"]>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_Filter>;
  liquidityPosition_contains?: InputMaybe<Scalars["String"]>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityPosition_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityPosition_gt?: InputMaybe<Scalars["String"]>;
  liquidityPosition_gte?: InputMaybe<Scalars["String"]>;
  liquidityPosition_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityPosition_lt?: InputMaybe<Scalars["String"]>;
  liquidityPosition_lte?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_contains?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityPosition_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<UserBinLiquidity_Filter>>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum UserBinLiquidity_OrderBy {
  BinId = "binId",
  Block = "block",
  Id = "id",
  Liquidity = "liquidity",
  LiquidityPosition = "liquidityPosition",
  LiquidityPositionBinsCount = "liquidityPosition__binsCount",
  LiquidityPositionBlock = "liquidityPosition__block",
  LiquidityPositionId = "liquidityPosition__id",
  LiquidityPositionTimestamp = "liquidityPosition__timestamp",
  Timestamp = "timestamp",
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  collects_?: InputMaybe<Collect_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lbTokenApprovals?: InputMaybe<Array<Scalars["Bytes"]>>;
  lbTokenApprovals_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  lbTokenApprovals_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  lbTokenApprovals_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  lbTokenApprovals_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  lbTokenApprovals_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_Filter>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
};

export enum User_OrderBy {
  Collects = "collects",
  Id = "id",
  LbTokenApprovals = "lbTokenApprovals",
  LiquidityPositions = "liquidityPositions",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type LbPairFieldsFragment = {
  __typename?: "LBPair";
  id: string;
  name: string;
  binStep: any;
  baseFeePct: any;
  tokenXPrice: any;
  tokenYPrice: any;
  reserveX: any;
  reserveY: any;
  totalValueLockedUSD: any;
  volumeUSD: any;
  timestamp: any;
  activeId: any;
  tokenX: { __typename?: "Token"; id: string; symbol: string; decimals: any };
  tokenY: { __typename?: "Token"; id: string; symbol: string; decimals: any };
};

export type JoeInfoQueryVariables = Exact<{
  pair: Scalars["String"];
  user: Scalars["String"];
}>;

export type JoeInfoQuery = {
  __typename?: "Query";
  liquidityPositions: Array<{
    __typename?: "LiquidityPosition";
    id: string;
    binsCount: any;
    userBinLiquidities: Array<{
      __typename?: "UserBinLiquidity";
      liquidity: any;
      binId: any;
    }>;
    user: { __typename?: "User"; id: string };
    lbPair: {
      __typename?: "LBPair";
      id: string;
      name: string;
      binStep: any;
      baseFeePct: any;
      tokenXPrice: any;
      tokenYPrice: any;
      reserveX: any;
      reserveY: any;
      totalValueLockedUSD: any;
      volumeUSD: any;
      timestamp: any;
      activeId: any;
      tokenX: {
        __typename?: "Token";
        id: string;
        symbol: string;
        decimals: any;
      };
      tokenY: {
        __typename?: "Token";
        id: string;
        symbol: string;
        decimals: any;
      };
    };
  }>;
};

export const LbPairFieldsFragmentDoc = gql`
  fragment lbPairFields on LBPair {
    id
    name
    binStep
    baseFeePct
    tokenXPrice
    tokenYPrice
    tokenX {
      id
      symbol
      decimals
    }
    tokenY {
      id
      symbol
      decimals
    }
    reserveX
    reserveY
    totalValueLockedUSD
    volumeUSD
    timestamp
    activeId
  }
`;
export const JoeInfoDocument = gql`
  query JoeInfo($pair: String!, $user: String!) {
    liquidityPositions(
      first: 1000
      where: { lbPair: $pair, user: $user, binsCount_gt: 0 }
    ) {
      id
      binsCount
      userBinLiquidities(first: 1000, where: { liquidity_gt: 0 }) {
        liquidity
        binId
      }
      user {
        id
      }
      lbPair {
        ...lbPairFields
      }
    }
  }
  ${LbPairFieldsFragmentDoc}
`;

/**
 * __useJoeInfoQuery__
 *
 * To run a query within a React component, call `useJoeInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useJoeInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJoeInfoQuery({
 *   variables: {
 *      pair: // value for 'pair'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useJoeInfoQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    JoeInfoQuery,
    JoeInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<JoeInfoQuery, JoeInfoQueryVariables>(
    JoeInfoDocument,
    options
  );
}
export function useJoeInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    JoeInfoQuery,
    JoeInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<JoeInfoQuery, JoeInfoQueryVariables>(
    JoeInfoDocument,
    options
  );
}
export type JoeInfoQueryHookResult = ReturnType<typeof useJoeInfoQuery>;
export type JoeInfoLazyQueryHookResult = ReturnType<typeof useJoeInfoLazyQuery>;
export type JoeInfoQueryResult = Apollo.QueryResult<
  JoeInfoQuery,
  JoeInfoQueryVariables
>;
