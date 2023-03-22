import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default BaseLayout;
