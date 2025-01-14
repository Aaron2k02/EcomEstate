import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Import ArrowUpwardIcon
import Header from "../../components/header/Header";
import LineChart from "../../components/lineChart/LineChart";
import GeographyChart from "../../components/geoChart/GeoChart";
import BarChart from "../../components/barChart/BarChart";
import StatBox from "../../components/statBox/StatBox";
import ProgressCircle from "../../components/progressCircle/ProgressCircle";

const cardStyle = {
    backgroundColor: "rgba(254, 205, 81, 0.209)",
    color: "black",
};

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="10px" height="calc(100vh - 40px)" overflow="auto" p="50px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">

                <Header title="Real Estate Dashboard Analytics" subtitle="Welcome to your personalized insights" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: "#fece51",
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    sx={cardStyle}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="Inquiries"
                        progress="0.75"
                        increase={
                            <Box display="flex" alignItems="center">
                                +14%
                                <ArrowUpwardIcon sx={{ color: "green", ml: "5px" }} />
                            </Box>
                        }
                        icon={
                            <EmailIcon
                                sx={{ color: "#fece51", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    sx={cardStyle}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales"
                        progress="0.50"
                        increase={
                            <Box display="flex" alignItems="center">
                                +21%
                                <ArrowUpwardIcon sx={{ color: "green", ml: "5px" }} />
                            </Box>
                        }
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: "#fece51", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    sx={cardStyle}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase={
                            <Box display="flex" alignItems="center">
                                +5%
                                <ArrowUpwardIcon sx={{ color: "green", ml: "5px" }} />
                            </Box>
                        }
                        icon={
                            <PersonAddIcon
                                sx={{ color: "#fece51", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    sx={cardStyle}
                    display="flex" alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic"
                        progress="0.80"
                        increase={
                            <Box display="flex" alignItems="center">
                                +43%
                                <ArrowUpwardIcon sx={{ color: "green", ml: "5px" }} />
                            </Box>
                        }
                        icon={
                            <TrafficIcon
                                sx={{ color: "#fece51", fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    sx={cardStyle}
                >
                    <Box
                        mt="5px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        overflow="hidden"
                    >
                        <Box flex="1">
                            <Typography
                                variant="h5"
                                fontWeight="600"
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={cardStyle}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Typography variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography variant="h5" fontWeight="600">
                                    {transaction.txId}
                                </Typography>
                                <Typography>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={cardStyle}
                    p="10px"
                >
                    <Typography variant="h5" fontWeight="600" textAlign="center">
                        Marketing Campaigns
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="10px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={cardStyle}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "10px 30px 0 30px" }}
                        textAlign="center"
                    >
                        Property Sales Volume
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={cardStyle}
                    padding="10px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "10px" }}
                        textAlign="center"
                    >
                        Regional Property Interest
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
