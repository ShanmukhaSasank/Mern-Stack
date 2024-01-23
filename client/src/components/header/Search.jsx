import { styled, Box, InputBase } from "@mui/material"; 
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background : #ffffff;
    width : 37%;
    display : flex;
    margin-left : 10px;
    border-radius : 4px;
`
const InputSearchBase = styled(InputBase)`
    width : 100%;
    padding-left : 20px;
`  
const SearchIconWrapper = styled(Box)`
    color : blue;
    display : flex;
    padding : 5px;
`

const Search = () =>{
    return(

        <SearchContainer>
            <InputSearchBase placeholder="Search for products,brands and more" />
            <SearchIconWrapper> 
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search; 