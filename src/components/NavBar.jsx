import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {Link} from 'react-router-dom';


const Container = styled.div`
 height: 60px;

 
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items:center;
  
`

const Left = styled.div`
flex: 1;
display: flex;
  
 
`

const SearchBar = styled.div`
border: 0.5px border lightgray;
display: flex;
align-items:center;
margin-left:25px;
padding: 5px;
  
 
`

const Input = styled.input`
 border: none;
  
 
`
const Right = styled.div`
flex: 1;
display: flex;
align-item: center;
justify-content: flex-end;
  
 
`
const Centre = styled.div`
flex: 2;
text-align: center;
  
 
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px; 
 
`
const Logo = styled.h1`
font-weight: bold;
tect-align : center;

  
 
`
const NavBar = () => {
    return (
      <Container>
         <Wrapper>  
             <Left>Left
                <SearchBar>
                   <Input/>
                    <Search style ={{color:'gray', fontSize:16}}/>
                </SearchBar>
               
             </Left>
             <Centre><Logo>FikLab.</Logo></Centre>
             <Right>
                 <Link to='/Register'>  
                 <MenuItem>
                 Register</MenuItem>
                 </Link>
                
                <Link to = "/Login">
                <MenuItem>Sign In</MenuItem>
                </Link>
                 
                 <MenuItem>
                 <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
             </Right>
              </Wrapper> 
         </Container>
    )
}

export default NavBar
