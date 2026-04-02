import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function Documents() {
  return (
    <MDBox py={3}>
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3} display="flex" justifyContent="space-between" alignItems="center">
                <MDTypography variant="h5">Documents</MDTypography>
                <MDButton variant="gradient" color="info">
                  Upload Document
                </MDButton>
              </MDBox>

              <MDBox px={3} pb={3}>
                <MDTypography variant="button" color="text">
                  This page will store contracts, legal opinions, case files, memos, and policies.
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}