import { useEffect } from 'react';
import { errorToast } from 'utils/toast';

export default function useErrorNotification({ message, toastId, isError }) {
  useEffect(() => {
    if (isError) {
      errorToast(message, { toastId });
    }
  }, [isError]);
}
