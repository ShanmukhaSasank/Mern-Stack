
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import { yellow } from '@mui/material/colors';
import Search from './Search';


const StyledHeader = styled(AppBar)`
    background : #2874f0;
     height : 60px;
`
const Component = styled(Box)`
    margin-left : 12%;
    line-height : 0;
`
const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
`
const PlusImage = styled('img')`
    width : 10px;
    height : 10px;
`

function Header() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div>
            <StyledHeader>
                <Toolbar style={{minheight : 55}}>
                <Component>

                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{display : 'flex'}}> 
                        <SubHeading> Explore 
                            <Box component="span" style={{color : '#FFE500'}}> Plus
                            <PlusImage src={subURL} alt="plus"/>
                            </Box>
                        </SubHeading>
                    </Box>
                </Component>
                <Search />
                </Toolbar>
            </StyledHeader>
        </div>
    )
}

export default Header;