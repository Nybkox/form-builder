import { HandleDot, HandleRoot } from './styled';

const Handle = (props) => (
  <HandleRoot {...props}>
    <HandleDot />
    <HandleDot />
    <HandleDot />
    <HandleDot />
    <HandleDot />
    <HandleDot />
  </HandleRoot>
);

export default Handle;
