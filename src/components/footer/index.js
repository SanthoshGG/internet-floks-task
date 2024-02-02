import React, { useEffect, useState } from "react";
import "./index.css";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Truck from "../../assets/images/truk.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitchOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <Container maxW="8xl">
        <Grid
          templateColumns={`repeat(${screenWidth > 800 ? "4" : "1"}, 1fr)`}
          gap={6}
        >
          <GridItem w="100%">
            <img
              src={Truck}
              alt="Truck"
              style={{ margin: screenWidth <= 800 && "auto" }}
            />
          </GridItem>
          <GridItem w="100%">
            <div className="title">Contact Us</div>
            <div className="lists">
              <p>
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </p>
              <p>example2020@gmail.com</p>
              <p>(904) 443-0343</p>
            </div>
          </GridItem>
          <GridItem w="100%">
            <div className="title">More</div>
            <div className="lists">
              <p>About Us</p>
              <p>Products</p>
              <p>career</p>
              <p>Contact Us</p>
            </div>
          </GridItem>
          <GridItem w="100%">
            {screenWidth <= 800 ? (
              <div>
                <div className="lists" style={{ textAlign: "center" }}>
                  <p>© 2022 Food Truck Example</p>
                  <div style={{ justifyContent: "center" }}>
                    <InstagramOutlined />
                    <TwitchOutlined />
                    <FacebookOutlined />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="title">Social Links</div>
                <div className="lists">
                  <div>
                    <InstagramOutlined />
                    <TwitchOutlined />
                    <FacebookOutlined />
                  </div>
                  <p>© 2022 Food Truck Example</p>
                </div>
              </div>
            )}
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
