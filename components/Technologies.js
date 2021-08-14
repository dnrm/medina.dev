import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const Technologies = (props) => {
    return (
        <UnorderedList textColor="gray.500">
            {props.items.map((i) => {
                return (
                    <ListItem key={i} fontSize={{ base: "0.8em", md: "0.9em" }}>
                        {i}
                    </ListItem>
                );
            })}
        </UnorderedList>
    );
};

export default Technologies;
