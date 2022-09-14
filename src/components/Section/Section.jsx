import Button from '@/components/common/Button';
import Handle from '@/components/common/Handle';
import List from '@/components/List';
import { Draggable } from 'react-beautiful-dnd';
import useSectionData from './hook';
import { Actions, Content, Header, HeaderContent, Name, Root } from './styled';

const Section = ({ id, fields, name, index }) => {
  const { isEditingThisField, handleEdit, handleCancelEdit, handleDelete } = useSectionData(id);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Root ref={provided.innerRef} {...provided.draggableProps} isDragging={snapshot.isDragging}>
          <Header>
            <HeaderContent>
              <Handle {...provided.dragHandleProps} />
              <Name>{name}</Name>
            </HeaderContent>
            <Actions>
              {isEditingThisField ? (
                <Button onClick={handleCancelEdit}>cancel edit</Button>
              ) : (
                <Button onClick={handleEdit}>edit</Button>
              )}
              <Button onClick={handleDelete}>delete</Button>
            </Actions>
          </Header>
          <Content>
            <List id={id} fields={fields} />
          </Content>
        </Root>
      )}
    </Draggable>
  );
};

export default Section;
