import React from 'react'
import styled from 'styled-components'

const UserCard = props => {
    return (
        <User>
            <img src={props.user.avatar_url} alt={props.user.avatar_url}/>
            <h1>{props.user.login}</h1>
        </User>
    )
}

export default UserCard


const User = styled.div`
padding-top: 20px`