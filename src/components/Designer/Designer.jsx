import { DROPPABLE_TYPES } from '@/constants/dnd';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Column, ColumnTitle } from '../common/styled';
import Section from '../Section';
import useDesignerData from './hook';

const Designer = () => {
  const { handleDragEnd, sectionsWithFields } = useDesignerData();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable ignoreContainerClipping type={DROPPABLE_TYPES.ROOT} droppableId="root">
        {(provided) => (
          <Column ref={provided.innerRef} {...provided.droppableProps}>
            <ColumnTitle>Layout</ColumnTitle>
            {sectionsWithFields.map((section, index) => (
              <Section {...section} key={section.id} index={index} />
            ))}
            {provided.placeholder}
          </Column>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Designer;
