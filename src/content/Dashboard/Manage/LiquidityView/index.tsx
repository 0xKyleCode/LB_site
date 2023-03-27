import { FC } from "react";
import { Box, alpha, styled, useTheme } from "@mui/material";
import { Chart } from "src/components/Chart";
import type { ApexOptions } from "apexcharts";
import { fShortenNumber } from "@/util/format";

const DotPrimaryLight = styled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

type BinDistribution = {
  binId: number;
  avax: number;
  usdt: number;
};

type Props = {
  distribution: BinDistribution[];
};

const Liquidity: FC<Props> = ({ distribution }) => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: "100%",
      },
    },
    colors: [theme.colors.error.dark, theme.colors.success.dark],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    theme: {
      mode: theme.palette.mode,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    legend: {
      show: false,
    },

    grid: {
      strokeDashArray: 1,
      borderColor: theme.palette.divider,
    },
    xaxis: {
      categories: distribution.map((value) => value.binId),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return "$ " + fShortenNumber(val);
        },
      },
      theme: "dark",
    },
  };

  const series = [
    { name: "AVAX", data: distribution.map((values) => values.avax) },
    { name: "USDT", data: distribution.map((values) => values.usdt) },
  ];
  return (
    <Box width="100%">
      <Chart options={chartOptions} series={series} type="bar" width="100%" />
    </Box>
  );
};

export default Liquidity;
