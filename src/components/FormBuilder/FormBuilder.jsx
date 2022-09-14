import Creator from '@/components/Creator';
import Output from '@/components/Output';
import Designer from '../Designer';
import { Root } from './styled';

const FormBuilder = () => (
  <Root>
    <Designer />
    <Creator />
    <Output />
  </Root>
);

export default FormBuilder;
