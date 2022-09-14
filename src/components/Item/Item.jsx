import Button from '@/components/common/Button';
import { TECH_FIELDS } from '@/constants/fields';
import { Draggable } from 'react-beautiful-dnd';
import Handle from '@/components/common/Handle';
import useItemData from './hook';
import { Actions, Content, Name, Root } from './styled';

const Item = ({
  id,
  name,
  index,
  [TECH_FIELDS.useCustomName]: useCustomName,
  [TECH_FIELDS.custom_name]: customName,
}) => {
  const { isEditingThisField, handleEdit, handleCancelEdit, handleDelete } = useItemData(id);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Root ref={provided.innerRef} {...provided.draggableProps} isDragging={snapshot.isDragging}>
          <Content>
            <Handle {...provided.dragHandleProps} />
            <Name>{useCustomName ? customName : name}</Name>
          </Content>

          <Actions>
            {isEditingThisField ? (
              <Button variant="secondary" onClick={handleCancelEdit}>
                cancel edit
              </Button>
            ) : (
              <Button onClick={handleEdit}>edit</Button>
            )}
            <Button onClick={handleDelete}>delete</Button>
          </Actions>
        </Root>
      )}
    </Draggable>
  );
};

export default Item;
