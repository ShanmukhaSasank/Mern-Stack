import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LoginButton = styled(Button)`
    background : #ffffff;
    color : #2874f0;
    text-transform : none;
    font-weight : 600;
    margin-left : 5%;
    padding : 5px 40px;
    box-shadow : none;
    border-radius : 4px;
    height : 32px;
    margin-right : auto;
`

const Wrapper = styled(Box)`
    display : flex;
    margin : 0 2% 0 auto;
     &>button, &>p , &>div{
        margin-right : 40px;
        font-size : 14px;
        align : center;
     }

`

const Container = styled(Box)`
    display : flex;
    font-size : 14px;
`

const CustomButtons = () =>{
    return (
        <Wrapper>
            <LoginButton variant="contained"> 
                Login
            </LoginButton>
            <Typography style = {{marginTop : 3, width : 135}}> Become a seller! </Typography>
            <Typography style = {{marginTop : 3}}> More </Typography>
            <Container>
                <ShoppingCartIcon/>
                <Typography> Cart </Typography>
            </Container>
        </Wrapper>
    );
}

export default CustomButtons;