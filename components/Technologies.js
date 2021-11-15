import React from "react";
import { Grid } from "@chakra-ui/react";
import Technology from "./Technology";

const Technologies = (props) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "50% 50%" }}
      gap={2}
      mt={2}
      textColor="gray.500"
    >
      {props.items.map((i) => {
        return (
          <Technology
            title={i.name}
            key={i.name}
            src={i.src}
            description={i.description}
            fontSize={{ base: "0.8em", md: "0.9em" }}
          />
        );
      })}
    </Grid>
  );
};

export default Technologies;
