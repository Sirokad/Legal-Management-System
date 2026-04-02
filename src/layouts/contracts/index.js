import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function Contracts() {
  return (
    <MDBox py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <MDBox p={3} display="flex" justifyContent="space-between" alignItems="center">
              <MDTypography variant="h5">Contracts</MDTypography>
              <MDButton variant="gradient" color="info">
                New Contract
              </MDButton>
            </MDBox>

            <MDBox px={3} pb={3}>
              <MDTypography variant="button" color="text">
                Track active contracts, expiries, renewals, counterparties, and approval status.
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}