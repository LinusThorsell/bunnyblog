import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: fit-content;
    margin-top: 0.5vh;
    margin-left: 0.5vh;
    margin-right: 0.5vh;

    background-color: ${props => props.theme.postcolor};
    border-radius: 0.3rem
`;

const PostTitle = styled.h1`
    margin: 0;
    padding-right: 0.2rem;
    font-size: 1.5em;
    width: fit-content;

    padding-left: 0.2rem;
    text-decoration: underline ${props => props.theme.accentedcolor};

    color: ${props => props.theme.darkercolor};
`;
const PostDescription = styled.h2`
    margin: 0;
    font-size: 1em;

    padding-left: 0.2rem;
`;
const PostDate = styled.h3`
    margin: 0;
    font-size: 0.8em;
    
    padding-left: 0.2rem;
`;

export default function Post({title, previewtext, date}) {
    return (
        <Container>
            <PostTitle>{title}</PostTitle>
            <PostDescription>{previewtext}</PostDescription>
            <PostDate>Posted {date}</PostDate>
        </Container>
    )
}
