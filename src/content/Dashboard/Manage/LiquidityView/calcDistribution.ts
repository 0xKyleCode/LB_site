import { JoeInfoQuery } from "src/graphql/generated";
import { LiquidityBookToken__factory } from "src/contracts/types";
import { useContractRead } from "wagmi";
import { utils } from "ethers";
import { contracts } from "@/util/constants";

type Prices = {
  AVAX: number;
  USDT: number;
  JOE: number;
};

export const useCalcDistribution = (joeData: JoeInfoQuery, prices: Prices) => {
  const binLiquidities = joeData.liquidityPositions[0].userBinLiquidities;
  const centralBin = joeData.liquidityPositions[0].lbPair.activeId;

  const { data: centralBinData, isLoading } = useContractRead({
    address: contracts.pair,
    abi: LiquidityBookToken__factory.abi,
    functionName: "getBin",
    args: [centralBin],
  });

  if (!isLoading && centralBinData) {
    const joeReserves = Number(utils.formatEther(centralBinData?.reserveX));
    const avaxReserves = Number(utils.formatEther(centralBinData?.reserveY));
    const avaxUSD = avaxReserves * prices.AVAX;
    const joeUSD = joeReserves * prices.JOE;
    const totalUSD = avaxUSD + joeUSD;
    console.log(joeUSD / totalUSD);
    const binLiquiditiesUpdate = binLiquidities.map((value) => {
      if (value.binId < centralBin)
        return {
          binId: Number(value.binId),
          avax: Number(
            (Number(utils.formatEther(value.liquidity)) * prices.AVAX).toFixed(
              2
            )
          ),
          joe: 0,
        };
      else if (value.binId > centralBin)
        return {
          binId: Number(value.binId),
          avax: 0,
          joe: Number(
            (
              Number(utils.formatEther(value.liquidity)) *
              prices.AVAX *
              (1 - (0.15 * (value.binId - centralBin)) / 100)
            ).toFixed(2)
          ),
        };
      else
        return {
          binId: Number(value.binId),
          avax: Number(
            (
              (avaxUSD / totalUSD) *
              Number(utils.formatEther(value.liquidity)) *
              prices.AVAX
            ).toFixed(2)
          ),
          joe: Number(
            (
              (joeUSD / totalUSD) *
              Number(utils.formatEther(value.liquidity)) *
              prices.AVAX
            ).toFixed(2)
          ),
        };
    });

    return binLiquiditiesUpdate;
  }
  return [];
};
