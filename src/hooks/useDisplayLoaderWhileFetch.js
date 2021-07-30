import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayLoader } from 'features/loader/loaderSlice';

export default function useDisplayLoaderWhileFetch(isFetching, isLoading) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetching && !isLoading) {
      dispatch(displayLoader());
    }
  }, [isFetching, isLoading, dispatch]);
}
