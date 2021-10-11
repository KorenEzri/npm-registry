import * as React from 'react';
import styled from 'styled-components/macro';
import { Inputs, MainDataGrid } from "app/components"
import { IPackage } from 'types';

interface Props {}

export function MainContentFrame(props: Props) {
  const [ npmPackage, setNpmPackage ] = React.useState<IPackage>()

  return (
  <MainContentDiv>
    <Inputs setNpmPackage={setNpmPackage} />
    <MainDataGrid npmPackage={npmPackage} setNpmPackage={setNpmPackage}/>
  </MainContentDiv>
  );

};

const MainContentDiv = styled.div`
margin: 20px;
user-select: none;
`;