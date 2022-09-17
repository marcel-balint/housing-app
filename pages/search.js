import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Flexm, Box, Text, Icon, Flex } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      ></Flex>
      {searchFilters && <SearchFilters />}
      <Text>Search Property By Filters</Text>
      <Icon paddingLeft="2" w="7" as={BsFilter} />
    </Box>
  );
};

export default Search;
