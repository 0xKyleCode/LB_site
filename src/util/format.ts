import type { BigNumberish } from "@ethersproject/bignumber";
import { utils } from "ethers";

const CCHAIN_PREFIXES: { [index: number]: string } = {
  43113: "testnet.",
  43114: "",
};

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${CCHAIN_PREFIXES[chainId]}snowtrace.io/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${CCHAIN_PREFIXES[chainId]}snowtrace.io/tx/${hash}`;
    }
  }
}
export const parseBalance = (balance: BigNumberish, decimals = 18) =>
  fShortenNumber(Number(utils.formatUnits(balance, decimals)));

export const fCurrency = (value: number | string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
};

export const fPercent = (number: number | string) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(number) / 100);
};

export const fNumber = (
  number: number | string,
  mantissa = 4,
  thousandSeparated = false
) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: mantissa,
    useGrouping: thousandSeparated,
  }).format(Number(number));
};

export const fShortenNumber = (number: number | string, mantissa = 2) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: mantissa,
    useGrouping: true,
    notation: "compact",
  }).format(Number(number));
};
