import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { FC } from "react";
import { Grid, Box } from "@mui/material";

const AddLiquidity: FC = () => {
  return (
    <Box width="100%">
      <FormContainer defaultValues={{ avax: 0, usdt: 0 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} mb={1}>
            <TextFieldElement
              name="avax"
              label="Enter Amount"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} mb={1}>
            <TextFieldElement
              name="usdt"
              label="Enter Amount"
              required
              fullWidth
            />
          </Grid>
        </Grid>
      </FormContainer>
    </Box>
  );
};

export default AddLiquidity;
