import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Container = styled(Box)`
    text-align : center;
    padding : 12px 8px;
`
const Components = styled(Box)`
    display: flex;
    justify-content : space-between;
    margin : 50px 100px 0px 100px;
`
const Text = styled(Typography)`
    font-weight : 600;
    font-size : 14px;
    font-family : inherit;
`

const Navbar = () => {
    return(
        <Components>
            {
                navData.map(data=>(
                    <Container>
                    <img src={data.url} alt="Navpics" style = {{width : 65}}/>
                    <Text>
                        {data.text}
                    </Text>
                    </Container>
                ))
            }
        </Components>
    );
}

export default Navbar;