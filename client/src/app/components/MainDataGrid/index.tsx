import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { IPackage, ISpinnerError } from 'types';
import { useSearchSlice } from '../../slice';
import { selectSearch } from '../../slice/selectors';
import { createPackageObj } from 'utils/createPackageObj';

interface Props {
  npmPackage: IPackage | undefined;
  setNpmPackage: React.SetStateAction<any>;
}
interface Size {
  size: number;
}

export function MainDataGrid(props: Props) {
  const { npmPackage, setNpmPackage } = props;
  const { searches } = useSelector(selectSearch);

  const [showBackBtn, setshowBackBtn] = React.useState(searches.length > 0);

  const {
    actions: { addToHistory, removeFromHistory },
  } = useSearchSlice();
  const dispatch = useDispatch();

  const handleCellClick = (e: GridCellParams) => {
    const name = e.getValue(e.id, 'name') as string;
    const version = e.getValue(e.id, 'version') as string;
    const dependencies = e.getValue(e.id, 'dependencies');
    if (Array.isArray(dependencies) && name && version) {
      const newPackage = createPackageObj(name, version, dependencies);
      setNpmPackage(newPackage);
      dispatch(addToHistory(newPackage));
    } else {
      setNpmPackage({
        name,
        version,
        dependencies: [{ name: 'No dependencies', version: '', id: 1 }],
      });
    }
  };

  return npmPackage && npmPackage.dependencies ? (
    <DataGridFrame size={npmPackage.dependencies?.length}>
      {showBackBtn && (
        <GoBtnFrame>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => {
                dispatch(removeFromHistory());
                let lastPackage = searches[searches.length - 1];
                if (lastPackage.name === npmPackage.name) {
                  lastPackage = searches[0];
                }
                if (!lastPackage || !lastPackage.dependencies) return;
                setNpmPackage(
                  createPackageObj(
                    lastPackage.name,
                    lastPackage.version,
                    lastPackage.dependencies,
                  ),
                );
              }}
            >
              Back
            </Button>
          </Stack>
        </GoBtnFrame>
      )}
      <DataGridTitle>
        <h3>
          For {npmPackage.name}, version {npmPackage.version}
        </h3>
      </DataGridTitle>
      <DataGrid
        onCellClick={e => {
          handleCellClick(e);
        }}
        columns={[
          { field: 'name', width: 250 },
          { field: 'version', width: 250 },
        ]}
        rows={npmPackage.dependencies}
      />
    </DataGridFrame>
  ) : null;
}

const DataGridFrame = styled.div<Size>`
  margin-top: 20px;
  height: ${({ size }) => `${size * 70 + 100}px`};
  max-height: 600px;
`;
const DataGridTitle = styled.div``;
const GoBtnFrame = styled.div`
  margin-top: 15px;
  margin-left: 5px;
`;
