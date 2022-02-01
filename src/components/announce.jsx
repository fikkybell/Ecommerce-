import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color:pink;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px
font-weight: 500;
`

const Announce = () => {
    return (
        <div>
           <Container>
               Get your best ready to wear outfits here!
               </Container> 
        </div>
    )
}

export default Announce
