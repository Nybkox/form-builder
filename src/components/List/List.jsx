import { Column } from '@/components/common/styled';
import Item from '@/components/Item';
import { DROPPABLE_TYPES } from '@/constants/dnd';
import { Droppable } from 'react-beautiful-dnd';

const List = ({ id, fields }) => (
  <Droppable type={DROPPABLE_TYPES.LIST} droppableId={id}>
    {(provided) => (
      <Column ref={provided.innerRef} {...provided.droppableProps}>
        {fields.map((field, index) => (
          <Item {...field} key={field.id} index={index} />
        ))}
        {provided.placeholder}
      </Column>
    )}
  </Droppable>
);
export default List;
