'use client';
import styled from 'styled-components';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider({children}: Props) {
    return <GlobalStyles>{children}</GlobalStyles>;
}

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;

  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5
  }
`;

export default GlobalStyleProvider;