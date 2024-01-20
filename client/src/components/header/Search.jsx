import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SeachContainer = styled(Box)`
    background: #fff;
    width: 35%;
    margin-left: 10px;
    border-radius: 2px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    font-size: unset;
    
`;

const SearchIconWrapper = styled(Box)`
    color : blue;
    padding: 5px;
`

const Search = () => {
    return(
        <SeachContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SeachContainer>
    )
}

export default Search;