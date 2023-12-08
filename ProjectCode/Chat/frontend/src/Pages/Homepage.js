import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      
      <Box
        d="flex"
        justifyContent="center"
        p={4}
        // bg="white"
        bg="rgba(0,0,0,.5)"
        w="100%"
        m="100px 0 0 0"
        borderRadius="lg"
      // borderWidth="1px"
      >
        <Text fontSize="5xl" fontFamily="Chatterbox Beige" style={{ color: "white" }} >
          Edu Verse
        </Text>
      </Box>
      <Box bg="rgba(0,0,0,.5)" w="100%" p={4} borderRadius="lg" style={{ color: "white" }} >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <script src="//code.tidio.co/njgj8c8twyghns3v3zxydyu9udu1os1e.js" async></script>
      {/* <script type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script> */}
    </Container>
    // <script type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
    // <zapier-interfaces-page-embed page-id='clohjq93x002ijs0qy4u26pwz' no-background='false'  style='max-width: 900px; height: 500px;'></zapier-interfaces-page-embed>
  );
}

export default Homepage;
