import { useQuery } from 'react-query';

import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
}

export function useTreatments(): Treatment[] {
  const toast = useCustomToast();

  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments, {
    onError: (error) => {
      console.log('error pak');
      // checking erro type
      const title =
        error instanceof Error
          ? error.toString().replace(/^Error:\s*/, '')
          : 'error connecting to the server';
      toast({ title, status: 'error' });
    },
  });
  return data;
}
