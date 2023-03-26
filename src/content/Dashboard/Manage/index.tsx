import { Box, Grid, styled, Tabs, Tab } from "@mui/material";
import { ChangeEvent, useState } from "react";

import MyLiquidity from "./MyLiquidity";
import AddLiquidity from "./AddLiquidity";
import RemoveLiquidity from "./RemoveLiquidity";

import { useJoeInfoQuery } from "src/graphql/generated";

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      position: relative;
      border: 1px solid;
      border-radius: ${theme.general.borderRadiusLg};
      margin-bottom: 10px;
      padding: 4px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
        
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          background: none;
          border: 0;

      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-radius: ${theme.general.borderRadiusLg};
              position: relative;
              font-size: ${theme.typography.pxToRem(20)};
              color: ${theme.colors.alpha.black[70]};
              width: 50%;
              .MuiTouchRipple-root {
                opacity: .1;
              }

              
              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.primary.lighter};
          }
      }
  `
);

export default function ManageLiquidity() {
  const [currentTab, setCurrentTab] = useState<string>("add");

  const tabs = [
    { value: "add", label: "Add Liquidity" },
    { value: "remove", label: "Remove Liquidity" },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box p={3}>
          <MyLiquidity />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={3}>
          <TabsContainerWrapper>
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="fullWidth"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </TabsContainerWrapper>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
            >
              {currentTab === "add" && <AddLiquidity />}
              {currentTab === "remove" && <RemoveLiquidity />}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
