
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, styled } from "@mui/material";

//you cannot return two parent components in jsx
//wrapping two parent componets in div to make div a parent component and navbar, banner will become child components
//if we use div as parent component there is a problem that extra div tag is created
//so to get rid of it we use fragments from react.
//fragments work faster than html tags
//instead of fragmnts we can use empty tags so we remove import fragments

const Container = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () =>{
    return(
        <>
            <NavBar />
            <Container>
                <Banner />
            </Container>
        </>

    )
}

export default Home;