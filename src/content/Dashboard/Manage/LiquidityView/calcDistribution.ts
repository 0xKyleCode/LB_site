import { JoeInfoQuery } from "src/graphql/generated";
import { LiquidityBookToken__factory } from "src/contracts/types";
import { useContractRead } from "wagmi";
import { utils } from "ethers";
import { contracts } from "@/util/constants";

type Prices = {
  AVAX: number;
  USDT: number;
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
    const avaxReserves = Number(utils.formatEther(centralBinData?.reserveX));
    const usdtReserves = Number(utils.formatUnits(centralBinData?.reserveY, 6));
    const avaxUSD = avaxReserves * prices.AVAX;
    const usdtUSD = usdtReserves * prices.USDT;
    const totalUSD = avaxUSD + usdtUSD;

    const binLiquiditiesUpdate = binLiquidities.map((value) => {
      if (value.binId < centralBin)
        return {
          binId: Number(value.binId),
          avax: Number(
            Number(utils.formatUnits(value.liquidity, 6)).toFixed(2)
          ),
          usdt: 0,
        };
      else if (value.binId > centralBin)
        return {
          binId: Number(value.binId),
          avax: 0,
          usdt: Number(
            Number(utils.formatUnits(value.liquidity, 6)).toFixed(2)
          ),
        };
      else
        return {
          binId: Number(value.binId),
          avax: Number(
            (
              (avaxUSD / totalUSD) *
              Number(utils.formatUnits(value.liquidity, 6))
            ).toFixed(2)
          ),
          usdt: Number(
            (
              (usdtUSD / totalUSD) *
              Number(utils.formatUnits(value.liquidity, 6))
            ).toFixed(2)
          ),
        };
    });

    return binLiquiditiesUpdate;
  }
  return [];
};
