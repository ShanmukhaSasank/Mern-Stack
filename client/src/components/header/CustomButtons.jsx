import { Box, Button, Typography, styled } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

const Wrapper = styled(Box)`
    display : flex;
    margin: 0 2% 0 auto;
    & > button, & > p, & > div{
        margin-right : 40px;
        font-size : 14px;
        align: center;
    }
`

const Container = styled(Box)`
    display:flex;
    font-size : 14px;
`

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #FFFFFF;
    text-transform : none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    margin-left:5%;
    margin-right:auto;

`

const CustomButton = () =>{
    return(
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>

            <Typography style={{marginTop: 3, width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButton;