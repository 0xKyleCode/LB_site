import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { JoeInfoQuery, useJoeInfoQuery } from "src/graphql/generated";
import { contracts } from "src/util/constants";
import { useContractRead } from "wagmi";
import { StrategyTJLiquidityBookLB__factory } from "src/contracts/types";
import axios from "axios";
import { useCalcDistribution } from "./LiquidityView/calcDistribution";
import Liquidity from "./LiquidityView";
import { BigNumber, utils } from "ethers";

type Prices = {
  AVAX: number;
  USDT: number;
  JOE: number;
};

type USDPrices = {
  USD: Prices;
};

const MyLiquidity: FC = () => {
  const [joeData, setJoeData] = useState<JoeInfoQuery>({
    liquidityPositions: [
      { lbPair: { activeId: 0 }, binsCount: 0, userBinLiquidities: [] },
    ],
  });

  const [currentBins, setCurrentBins] = useState<BigNumber[]>([]);
  const [rewardsAvailable, setRewardsAvailable] = useState<{
    avax: BigNumber;
    joe: BigNumber;
  }>({
    avax: BigNumber.from(0),
    joe: BigNumber.from(0),
  });

  const [prices, setPrices] = useState<Prices>({ AVAX: 0, USDT: 0, JOE: 0 });

  const { loading } = useJoeInfoQuery({
    variables: {
      pair: contracts.pair,
      user: contracts.strat,
    },
    onCompleted(data) {
      setJoeData(data);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get<USDPrices>(
        "https://stargate.finance/.netlify/functions/fiat?symbol=USD"
      );
      setPrices({
        AVAX: data.data.USD.AVAX,
        USDT: data.data.USD.USDT,
        JOE: data.data.USD.JOE,
      });
    };

    fetchData();
  }, []);

  const distribution = useCalcDistribution(joeData, prices);
  console.log(distribution);

  useContractRead({
    abi: StrategyTJLiquidityBookLB__factory.abi,
    address: contracts.strat,
    functionName: "strategyActiveBins",
    onSuccess(data) {
      setCurrentBins(data.map((value) => value, 0));
    },
  });

  useContractRead({
    abi: StrategyTJLiquidityBookLB__factory.abi,
    address: contracts.strat,
    functionName: "rewardsAvailable",
    args: [currentBins],
    onSuccess(data) {
      setRewardsAvailable({ avax: data.rewardsY, joe: data.rewardsX });
    },
  });
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} justifyContent="flex-start">
        <Typography variant="h3" component="h3">
          My liquidity
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        {!loading || distribution.length > 0 ? (
          <Liquidity distribution={distribution} />
        ) : (
          <Box py={12}>You have no liquidity in this pool</Box>
        )}
      </Grid>
      <Grid
        container
        item
        xs={12}
        border={1}
        my={2}
        p={2}
        borderRadius={1}
        borderColor="grey.800"
        alignItems="center"
      >
        <Grid xs={6} pb={1}>
          <Typography variant="h4" component="h4">
            Deposit Balance
          </Typography>
        </Grid>
        <Grid container item xs={6} pb={1} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            $
            {distribution.length > 0
              ? distribution
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.avax + currentValue.joe,
                    0
                  )
                  .toFixed(2)
              : 0}
          </Typography>
        </Grid>

        <Grid container item xs={4} justifyContent="flex-start" pb={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/joe.svg"
              height={24}
              width={24}
              alt="JOE"
            />{" "}
            <Typography variant="h5" component="h5">
              JOE
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            {distribution.length > 0
              ? distribution
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.joe / prices.JOE,
                    0
                  )
                  .toFixed(2)
              : 0}
          </Typography>
        </Grid>
        <Grid container item xs={4} justifyContent="flex-start">
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/avax.svg"
              height={24}
              width={24}
              alt="AVAX"
            />{" "}
            <Typography variant="h5" component="h5">
              AVAX
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            {distribution.length > 0
              ? distribution
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.avax / prices.AVAX,
                    0
                  )
                  .toFixed(2)
              : 0}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        border={1}
        my={1}
        p={2}
        borderRadius={1}
        borderColor="grey.800"
      >
        <Grid item xs={6} py={1}>
          <Typography variant="h4" component="h4">
            Claimable Fees
          </Typography>
        </Grid>
        <Grid container item xs={6} py={1} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            $
            {(
              Number(utils.formatEther(rewardsAvailable.avax)) * prices.AVAX +
              Number(utils.formatEther(rewardsAvailable.joe)) * prices.JOE
            ).toFixed(2)}
          </Typography>
        </Grid>
        <Grid container item xs={4} justifyContent="flex-start" pb={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/joe.svg"
              height={24}
              width={24}
              alt="JOE"
            />{" "}
            <Typography variant="h5" component="h5">
              JOE
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            {Number(utils.formatEther(rewardsAvailable.joe)).toFixed(2)}
          </Typography>
        </Grid>
        <Grid container item xs={4} justifyContent="flex-start">
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/avax.svg"
              height={24}
              width={24}
              alt="AVAX"
            />{" "}
            <Typography variant="h5" component="h5">
              AVAX
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            {Number(utils.formatEther(rewardsAvailable.avax)).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyLiquidity;
