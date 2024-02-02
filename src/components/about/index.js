import React, { useEffect, useState } from "react";
import { Button, Container } from "@chakra-ui/react";
import Abt from "../../assets/images/about.png";
import { Grid, GridItem } from "@chakra-ui/react";
import "./index.css";

const About = () => {
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
    <div className="about">
      <Container maxW={`${screenWidth > 800 ? "5xl" : "xl"}`}>
        <Grid
          templateColumns={`${
            screenWidth > 800 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
          }`}
          gap={6}
          className="gridView"
        >
          {screenWidth > 800 && (
            <GridItem w="100%">
              <img src={Abt} alt="abt" />
            </GridItem>
          )}
          <GridItem w="100%">
            <div
              className="content"
              style={{ textAlign: screenWidth <= 800 && "center" }}
            >
              <h3>About Us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </p>
              <Button colorScheme="red">Read More</Button>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
