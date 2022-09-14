import { DROPPABLE_TYPES } from '@/constants/dnd';
import { reorder } from '@/helpers/reorder';
import { sectionsState } from '@/state/atoms';
import { sectionsWithFieldsState } from '@/state/selectors';
import insert from '@/utils/insert';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const useDesignerData = () => {
  const sectionsWithFields = useRecoilValue(sectionsWithFieldsState);
  const setSections = useSetRecoilState(sectionsState);

  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const { source, destination } = result;

      if (source.droppableId === destination.droppableId && source.index === destination.index) return;

      // reorder sections
      if (result.type === DROPPABLE_TYPES.ROOT) {
        setSections((prev) => reorder(prev, source.index, destination.index));
        return;
      }

      // reorder a column
      if (result.type === DROPPABLE_TYPES.LIST && source.droppableId === destination.droppableId) {
        setSections((prev) => {
          const targetSection = prev.find((section) => section.id === source.droppableId);
          const newFields = reorder(targetSection.fields, source.index, destination.index);
          const newSections = prev.map((section) =>
            section.id === targetSection.id ? { ...section, fields: newFields } : section
          );

          return newSections;
        });

        return;
      }

      // reordering different columns
      setSections((prev) => {
        const sourceSection = prev.find((section) => section.id === source.droppableId);
        const destinationSection = prev.find((section) => section.id === destination.droppableId);

        const newSourceFields = sourceSection.fields.filter((fieldId) => fieldId !== result.draggableId);
        const newDestinationFields = insert(destinationSection.fields, result.draggableId, destination.index);

        const newSections = prev.map((section) => {
          if (section.id === sourceSection.id) return { ...section, fields: newSourceFields };
          if (section.id === destinationSection.id) return { ...section, fields: newDestinationFields };
          return section;
        });

        return newSections;
      });
    },
    [setSections]
  );

  return {
    handleDragEnd,
    sectionsWithFields,
  };
};

export default useDesignerData;
