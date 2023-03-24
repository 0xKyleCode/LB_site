import {
  Box,
  Tooltip,
  Badge,
  TooltipProps,
  tooltipClasses,
  styled,
  useTheme,
} from "@mui/material";
import Link from "src/components/Link";

const LogoWrapper = styled(Link)(
  ({ theme }) => `
          color: ${theme.palette.text.primary};
          display: flex;
          text-decoration: none;
          width: 53px;
          margin: 0 auto;
          font-weight: ${theme.typography.fontWeightBold};
  `
);

const LogoSignWrapper = styled(Box)(
  () => `
          width: 52px;
          height: 38px;
  `
);

const LogoSign = styled(Box)(
  ({ theme }) => `
          background: ${theme.colors.gradients.purple3};
          width: 30px;
          height: 30px;
          border-radius: ${theme.general.borderRadiusXl};
          position: relative;
          margin: 12px 12px 0 0;
  
          &:before {
            content: "LB";
            position: absolute;
            text-align: center;
            color: ${theme.colors.primary.dark};
            bottom: 12px;
            left: 12px;
            width: 30px;
            height: 30px;
            background: ${theme.colors.gradients.orange1};
            border-radius: ${theme.general.borderRadiusSm};;
            border: 3px solid ${theme.header.background};
          }

  `
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: "bold",
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      "0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100],
  },
}));

function Logo() {
  return (
    <TooltipWrapper title="Personal Liquidity Book" arrow>
      <LogoWrapper href="/">
        <LogoSignWrapper>
          <LogoSign />
        </LogoSignWrapper>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
