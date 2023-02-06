// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
// import CustomAvatar from 'src/@core/components/mui/avatar'

import { AiFillPieChart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const data = [
  {
    stats: "230k",
    title: "Visitors",

    icon: <AiFillPieChart color="#1976d2" />,
  },
  {
    stats: "8.549k",
    title: "Shares",
    icon: <FaUsers color="#1976d2" />,
  },
  {
    stats: "1.423k",
    title: "Products",
    icon: <AiOutlineShoppingCart color="#1976d2" />,
  },
  {
    stats: "$9745",
    title: "Click to Call",
    icon: <BsCurrencyDollar color="#1976d2" />,
  },
];

const renderStats = () => {
  return data.map((sale, index) => (
    <Grid item xs={6} md={3} key={index}>
      <Box
        key={index}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="charts__icon mb-2">{sale.icon}</div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">{sale.stats}</Typography>
          <Typography variant="body2">{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const CardStatisticsTransactions = () => {
  return (
    <div className="box__shadow">
      <Card>
        <CardHeader
          title="Statistics"
          sx={{ "& .MuiCardHeader-action": { m: 0, alignSelf: "center" } }}
          action={
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Updated 1 month ago
            </Typography>
          }
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(0.5)} !important` }}>
          <Grid container spacing={6}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardStatisticsTransactions;
