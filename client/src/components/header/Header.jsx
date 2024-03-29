import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
     height : 50px;
     box-shadow : none;
`
const Component = styled(Box)`
    margin-left : 14%;
    line-height : 0;
`
const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
`
const PlusImage = styled('img')({
    width : 10,
    height : 10,
    marginLeft : 4,
})

const ToolbarWrapper = styled(Toolbar)`
    display : flex;
    min-height : 50px !important;   
`

const CustomButtonWrapper = styled(Box)`
    margin : 0 5% 0 auto;
`

function Header() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div>
            <StyledHeader>
                <ToolbarWrapper>
                <Component> {/* For the flipkart logo */}
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{display : 'flex'}}> 
                        <SubHeading> Explore 
                            <Box component="span" style={{color : '#FFE500'}}> Plus
                            <PlusImage src={subURL} alt="plus"/>
                            </Box>
                        </SubHeading>
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
                </ToolbarWrapper>   
            </StyledHeader>
        </div>
    )
}

export default Header;