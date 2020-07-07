import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "w3-css/3/w3.css";
import img1 from "../../assets/img/arret-bus.jpg";
import img2 from "../../assets/img/dakar-dem-dik.jpg";
import img4 from "../../assets/img/photo/bus-tata.jpg";
import img3 from "../../assets/img/photo/tata-stop.jpg";
import img5 from "../../assets/img/taxi_.jpg";
import img6 from "../../assets/img/taxi-aibd.jpg";
import AOS from "aos";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "gray",
    color: "white",
    //theme.palette.background.paper,
    width: "100%",
  },
}));

function Stop() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    AOS.init({ animation: 2000 });
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="col-md-6">
      <div className="w3-container w3-card w3-white  w3-margin-bottom m3 cus-h">
        <div className="text-center" data-aos="fade-in">
          {" "}
          Vehicle and Stop{" "}
        </div>
        <br />
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Public Bus" {...a11yProps(0)} />
              <Tab label="Private Bus" {...a11yProps(1)} />
              <Tab label="Taxi " {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="row">
                <div className="col-md-6 text-center mt-5">Stop</div>
                <div className="col-md-6">
                  <img
                    src={img1}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-6 text-center mt-5">Bus</div>
                <div className="col-md-6">
                  <img
                    src={img2}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="row">
                <div className="col-md-6 text-center mt-5">Stop</div>
                <div className="col-md-6">
                  <img
                    src={img3}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-6 text-center mt-5">Bus</div>
                <div className="col-md-6">
                  <img
                    src={img4}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={2} dir={theme.direction}>
              <div className="row mt-1">
                <div className="col-md-6 text-center mt-5">Taxi</div>
                <div className="col-md-6">
                  <img
                    src={img5}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
                <div className="col-md-6 text-center mt-5">Taxi AIBD</div>
                <div className="col-md-6">
                  <img
                    src={img6}
                    alt="Forest"
                    style={{ width: "288px", height: "150px" }}
                  />
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
export default Stop;
