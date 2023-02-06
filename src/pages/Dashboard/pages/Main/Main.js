
import React from "react";
// ** MUI Import
import Grid from "@mui/material/Grid";
import CardOfDetails from "../../components/CardOfDetails";
import Dashboard from "../../Dashboard";
import CardStatisticsTransactions from "../../components/CardStatisticsTransactions";
import ApexLineChart from "../../components/ApexLineChart";

// ** Custom Component Import
// import KeenSliderWrapper from "src/@core/styles/libs/keen-slider";
// import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// import CardStatisticsTransactions from "src/views/ui/cards/statistics/CardStatisticsTransactions";
// import ApexLineChart from "src/views/charts/apex-charts/ApexLineChart";
// import CardAppleWatch from "src/views/ui/cards/basic/CardAppleWatch";

const Main = () => {
  return (
    <Dashboard>
      <Grid>
  
        {/* <KeenSliderWrapper> */}
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={4}>
              <CardOfDetails />
            </Grid>
            <Grid item xs={12} md={6} lg={8} container spacing={5}>
              <Grid item xs={12}>
                <CardStatisticsTransactions />
              </Grid>
              <Grid item xs={12}>
                <ApexLineChart />
              </Grid>
            </Grid>
          </Grid>
        {/* </KeenSliderWrapper> */}

        {/* <KeenSliderWrapper>
          <h2>Store</h2>
          <Grid container spacing={6}>
            {productsData.data.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <CardAppleWatch item={item} />
              </Grid>
            ))}
          </Grid>
        </KeenSliderWrapper> */}
      </Grid>
    </Dashboard>
  );
};

export default Main;
