import { editSectionTargetState, isEditingSectionState, sectionsState } from '@/state/atoms';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

const useSectionData = (id) => {
  const [sections, setSections] = useRecoilState(sectionsState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingSectionState);
  const [editTarget, setEditTarget] = useRecoilState(editSectionTargetState);

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
    const targetSection = sections.find((section) => section.id === id);
    if (targetSection.fields.length) {
      toast.error('Can not delete section with fields', { theme: 'dark' });
      return;
    }

    setSections((prev) => prev.filter((section) => section.id !== id));
  }, [id, sections, setSections]);

  return {
    isEditingThisField,
    handleEdit,
    handleCancelEdit,
    handleDelete,
  };
};

export default useSectionData;
