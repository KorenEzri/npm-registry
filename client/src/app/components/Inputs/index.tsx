import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components/macro';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { publicFetch } from 'network';
import { IPackage } from 'types';
import { useSearchSlice } from '../../slice';

interface Props {
  setNpmPackage: React.SetStateAction<any>;
}

export function Inputs(props: Props) {
  const [errors, setErrors] = React.useState({ name: false, version: false });
  const [helperTexts, setHelperTexts] = React.useState({
    name: 'Package name (IE puppeteer)',
    version: 'The symantic version (IE: 1.0.1)',
  });
  const nameValueRef = React.useRef<HTMLInputElement>(null);
  const versionValueRef = React.useRef<HTMLInputElement>(null);
  const { setNpmPackage } = props;
  const {
    actions: { addToHistory },
  } = useSearchSlice();
  const dispatch = useDispatch();

  const sendValue = async () => {
    if (!nameValueRef || !versionValueRef) return;
    const name = nameValueRef.current?.value;
    const version = versionValueRef.current?.value;
    try {
      const allDependencies: IPackage[] = await publicFetch(
        `/package/getDependencies/${name}/${version}`,
      );
      if (allDependencies && name && version) {
        const newPackage = {
          name,
          version,
          dependencies: allDependencies.map((dep, index) => {
            dep.id = index;
            return dep;
          }),
        }
        setNpmPackage(newPackage);
        dispatch(addToHistory(newPackage))
      }
    } catch ({ message }) {
      if (message === 'Unexpected token N in JSON at position 0') {
        setNpmPackage({
          name,
          version,
          dependencies: [{ name: 'No dependencies', version: '', id: 1 }],
        });
      } else console.log(message);
    }
  };

  return (
    <InputsFrame>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate={false}
        autoComplete="off"
      >
        <div>
          <TextField
            error={errors.name}
            id="filled-error-helper-text"
            label="Package name"
            helperText={helperTexts.name}
            variant="filled"
            inputRef={nameValueRef}
          />
          <TextField
            error={errors.version}
            id="filled-error-helper-text"
            label="Package version"
            helperText={helperTexts.version}
            variant="filled"
            inputRef={versionValueRef}
          />
        </div>
      </Box>
      <GoBtnFrame>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={sendValue}>
            Go
          </Button>
        </Stack>
      </GoBtnFrame>
    </InputsFrame>
  );
}

const InputsFrame = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: unset;
  }
`;
const GoBtnFrame = styled.div`
  margin-top: 15px;
  margin-left: 5px;
`;
