import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import meal1 from "../../assets/images/meal1.png";
import meal2 from "../../assets/images/meal2.png";
import meal3 from "../../assets/images/meal3.png";
import meal4 from "../../assets/images/meal4.png";
import meal5 from "../../assets/images/meal5.png";
import meal6 from "../../assets/images/meal6.png";

const Article = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [page, setpage] = useState(1);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const first = [
    {
      title: "Grilled Tomatoes at Home",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal1,
    },
    {
      title: "Snacks for Travel",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal2,
    },
    {
      title: "How To Grill Corn",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal3,
    },
  ];

  const second = [
    {
      title: "How To Grill Corn",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal4,
    },
    {
      title: "Crunchwrap Supreme",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal5,
    },
    {
      title: "Broccoli Cheese Soup",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      imgage: meal6,
    },
  ];

  const data = page === 1 ? first : second;
  return (
    <div className="article">
      <Container maxW="7xl">
        <h3
          className="titles"
          style={{ textAlign: screenWidth <= 800 && "center" }}
        >
          Latest Articles
        </h3>
        <Grid
          templateColumns={`repeat(${screenWidth > 800 ? "3" : "1"}, 1fr)`}
          gap={6}
        >
          {data.map((item, i) => (
            <GridItem w="100%" key={i} borderRadius="2xl">
              <Card maxW="sm" style={{ margin: "auto" }}>
                <CardBody>
                  <Image
                    src={item.imgage}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" color={"#0e2368"}>
                      {item.title}
                    </Heading>
                    <Text>{item.content}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    style={{ borderRadius: "25px" }}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
        <div className="foot">
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setpage(1)}
            className={page === 1 && "bottomButton"}
          >
            {"<"}
          </Button>
          <div>{page}/2</div>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setpage(2)}
            className={page === 2 && "bottomButton"}
          >
            {">"}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Article;
