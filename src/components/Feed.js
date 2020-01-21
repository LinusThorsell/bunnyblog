import React from 'react'
import styled from 'styled-components';
import Post from './Post'

const Container = styled.div`
    width: 100vw;
    height: 92vh;
    overflow-y: scroll;
    background-color: ${props => props.theme.bgcolor};
`;

const posts = [];
for (let i = 0; i < 15; i++) {
    posts.push(<Post
        key={'post' + i}
        title={'Super Base ' + i}
        previewtext={'totally not a spam article made for memes'}
        date={new Date().toLocaleDateString()}
    />);
}

export default function Feed() {
    return (
        <Container>
            {posts}
        </Container>
    )
}
