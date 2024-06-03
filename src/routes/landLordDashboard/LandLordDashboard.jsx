import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "../../components/header/Header";
import BarChart from "../../components/barChart/BarChart";
import StatBox from "../../components/statBox/StatBox";

const cardStyle = {
    backgroundColor: "rgba(254, 205, 81, 0.209)",
    color: "black",
};

const LandLordDashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="10px" height="calc(100vh - 40px)" overflow="auto" p="50px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Real Estate Dashboard" subtitle="Insights for Landlords and Agents" />
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
                gridAutoRows="minmax(140px, auto)"
                gap="20px"
            >
                <Box
                    gridColumn="span 6"
                    sx={cardStyle}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="15"
                        subtitle="Properties Listed"
                        progress="0.75"
                        increase={
                            <Box display="flex" alignItems="center">
                                +5%
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
                    gridColumn="span 6"
                    sx={cardStyle}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="120"
                        subtitle="Inquiries"
                        progress="0.60"
                        increase={
                            <Box display="flex" alignItems="center">
                                +20%
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
                    gridColumn="span 12"
                    sx={cardStyle}
                    height="350px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "10px 30px 0 30px" }}
                    >
                        Income Overview
                    </Typography>
                    <Box height="100%" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                {/* RECENT TRANSACTIONS */}
                <Box
                    gridColumn="span 12"
                    sx={cardStyle}
                    overflow="auto"
                    height="350px"
                    mt="20px"
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
            </Box>
        </Box>
    );
};

export default LandLordDashboard;
