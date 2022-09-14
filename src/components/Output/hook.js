import createOutputSchema from '@/helpers/createOutputSchema';
import { sectionsWithFieldsState } from '@/state/selectors';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';

const useOutputData = () => {
  const sectionsWithfields = useRecoilValue(sectionsWithFieldsState);

  const outputSchema = useMemo(() => createOutputSchema(sectionsWithfields), [sectionsWithfields]);
  const handleCopyClick = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(outputSchema));
    toast.info('Schema copied to the clipboard', {
      theme: 'dark',
    });
  }, [outputSchema]);

  return {
    outputSchema,
    handleCopyClick,
  };
};

export default useOutputData;
