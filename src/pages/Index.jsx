// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, Textarea, Heading, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaSearch, FaLink } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [vcData, setVcData] = useState(null);
  const [similarVcs, setSimilarVcs] = useState([]);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const fetchVcData = async () => {
    // Simulate fetching data
    const fetchedData = {
      name: "Example VC",
      contacts: "info@examplevc.com",
      industries: "Technology, Healthcare",
      investmentRounds: "Series A, Series B",
    };

    const fetchedSimilarVcs = [
      { name: "VC One", url: "https://www.vcone.com" },
      { name: "VC Two", url: "https://www.vctwo.com" },
      { name: "VC Three", url: "https://www.vcthree.com" },
    ];

    setVcData(fetchedData);
    setSimilarVcs(fetchedSimilarVcs);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          VC Information Extractor
        </Heading>
        <Text>Enter the URL of a Venture Capital firm to extract information and find similar VCs.</Text>

        <FormControl>
          <FormLabel htmlFor="url">VC Website URL</FormLabel>
          <Input id="url" type="url" value={url} onChange={handleUrlChange} placeholder="Enter URL" />
        </FormControl>

        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={fetchVcData}>
          Extract Information
        </Button>

        {vcData && (
          <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">VC Information:</Text>
            <Textarea value={JSON.stringify(vcData, null, 2)} readOnly />
          </Box>
        )}

        {similarVcs.length > 0 && (
          <>
            <Text fontWeight="bold">Similar VCs:</Text>
            <List spacing={3}>
              {similarVcs.map((vc, index) => (
                <ListItem key={index}>
                  <ListIcon as={FaLink} color="green.500" />
                  <Link href={vc.url} isExternal>
                    {vc.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
