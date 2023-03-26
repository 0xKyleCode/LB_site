import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

const MyLiquidity: FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} justifyContent="flex-start">
        <Typography variant="h3" component="h3">
          My liquidity
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Box py={12}>You have no liquidity in this pool</Box>
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
        <Grid xs={12} pb={1}>
          <Typography variant="h4" component="h4">
            Deposit Balance
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
            0
          </Typography>
        </Grid>
        <Grid container item xs={4} justifyContent="flex-start" pt={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/tether.svg"
              height={24}
              width={24}
              alt="USDT"
            />{" "}
            <Typography variant="h5" component="h5">
              USDT
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            0
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
        <Grid xs={12} py={1}>
          <Typography variant="h4" component="h4">
            Claimable Fees
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
            0
          </Typography>
        </Grid>
        <Grid container item xs={4} justifyContent="flex-start" pt={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src="static/icons/tether.svg"
              height={24}
              width={24}
              alt="USDT"
            />{" "}
            <Typography variant="h5" component="h5">
              USDT
            </Typography>
          </Stack>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end">
          <Typography variant="h4" component="h4">
            0
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyLiquidity;
