import { editFieldTargetState, fieldsState, isEditingFieldState, sectionsState } from '@/state/atoms';
import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const useItemData = (id) => {
  const setFields = useSetRecoilState(fieldsState);
  const setSections = useSetRecoilState(sectionsState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingFieldState);
  const [editTarget, setEditTarget] = useRecoilState(editFieldTargetState);

  const isEditingThisField = isEditing && editTarget === id;

  const handleEdit = useCallback(() => {
    setIsEditing(true);
    setEditTarget(id);
  }, [id, setEditTarget, setIsEditing]);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditTarget(null);
  }, [setEditTarget, setIsEditing]);

  const handleDelete = useCallback(() => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.fields.includes(id))
          return { ...section, fields: section.fields.filter((fieldId) => fieldId !== id) };
        return section;
      })
    );
    setFields((prev) => prev.filter((field) => field.id !== id));
  }, [id, setFields, setSections]);

  return {
    isEditingThisField,
    handleEdit,
    handleCancelEdit,
    handleDelete,
  };
};

export default useItemData;
