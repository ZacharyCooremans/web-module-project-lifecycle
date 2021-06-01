import React from 'react'
import styled from 'styled-components'

const FriendCard = props => {
    return(
        <IndividualCard>
            <img src={props.person.avatar_url} alt={props.person.avatar_url}/>
            <h2>{props.person.login}</h2>
            <p>{props.person.html_url}</p>
        </IndividualCard>
    )
}

export default FriendCard

const IndividualCard = styled.div`
    padding: 10px;
`