import Navbar from "./Navbar";
import Banner from "./Banner";
import { Fragment } from "react";
import { Box, styled} from "@mui/material";

const Container = styled(Box)`
    padding : 10px;
    background : #f2f2f2;
`

const Home = () => {
    return(
        <Fragment>
            <Navbar/>
            <Container>
            <Banner/>
            </Container>
        </Fragment>
        );
}

export default Home;