import React, { useEffect, useState } from "react";
import { Button, Container, Grid, GridItem } from "@chakra-ui/react";
import "./index.css";
import Vector from "../../assets/images/Vector.png";
import truck from "../../assets/images/truk.png";

const Banner = () => {
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
    <div className="banner">
      <Button colorScheme="red" className="topButton">
        Get In Touch
      </Button>
      <Grid
        templateColumns={`repeat(${screenWidth > 800 ? "2" : "1"}, 1fr)`}
        gap={6}
      >
        {screenWidth <= 800 && (
          <GridItem w="100%">
            <div className="pizza">
              <img src={Vector} alt="Vector" />
            </div>
          </GridItem>
        )}

        <GridItem w="100%">
          <Container>
            <div
              className="leftBanner"
              style={{
                textAlign: screenWidth <= 800 && "center",
              }}
            >
              {screenWidth > 800 && (
                <img src={truck} alt="truck" style={{ marginBottom: 20 }} />
              )}
              <h3 style={{ margin: screenWidth <= 800 && "auto" }}>
                Discover the <span>Best</span> Food and Drinks
              </h3>
              <p style={{ margin: screenWidth <= 800 && "auto" }}>
                Naturally made Healthcare Products for the better care & support
                of your body.
              </p>
              <Button colorScheme="red">Explore Now!</Button>
            </div>
          </Container>
        </GridItem>

        {screenWidth > 800 && (
          <GridItem w="100%">
            <div className="pizza">
              <img src={Vector} alt="Vector" />
            </div>
          </GridItem>
        )}
      </Grid>
    </div>
  );
};

export default Banner;
