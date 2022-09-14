import Button from '@/components/common/Button';
import { Column, ColumnContent, ColumnTitle } from '@/components/common/styled';
import ReactJson from 'react-json-view';
import useOutputData from './hook';
import { JsonContainer } from './styled';

const Output = () => {
  const { outputSchema, handleCopyClick } = useOutputData();

  return (
    <Column>
      <ColumnTitle>Output</ColumnTitle>
      <ColumnContent>
        <JsonContainer>
          <ReactJson name={null} src={outputSchema} theme="tomorrow" />
        </JsonContainer>
        <Button onClick={handleCopyClick} variant="secondary">
          copy
        </Button>
      </ColumnContent>
    </Column>
  );
};

export default Output;
