import FieldCreator from '../FieldCreator';
import SectionCreator from '../SectionCreator/SectionCreator';
import { Root } from './styled';

const Creator = () => (
  <Root>
    <FieldCreator />
    <SectionCreator />
  </Root>
);

export default Creator;
