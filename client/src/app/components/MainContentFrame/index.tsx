import * as React from 'react';
import styled from 'styled-components/macro';
import { Inputs, MainDataGrid } from "app/components"
import { IPackage, ISpinnerError } from 'types';
import { Spinner } from "app/components"

interface Props {}

export function MainContentFrame(props: Props) {
  const [ npmPackage, setNpmPackage ] = React.useState<IPackage>()
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [spinnerError, setSpinnerError] = React.useState<ISpinnerError>();

  return (
  <MainContentDiv>
    <Inputs setNpmPackage={setNpmPackage} setShowSpinner={setShowSpinner} setSpinnerError={setSpinnerError} />
    <Spinner
            showSpinner={showSpinner}
            error={spinnerError}
            VisualComponent={false}
            submitLoader={false}
      >
    <MainDataGrid npmPackage={npmPackage} setNpmPackage={setNpmPackage}/>
      </Spinner>
  </MainContentDiv>
  );

};

const MainContentDiv = styled.div`
margin: 20px;
user-select: none;
`;