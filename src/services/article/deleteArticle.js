import { push } from 'connected-react-router';
import { ENDPOINTS, generalFeedTags } from '@/constants';
import { errorToast } from 'libs/toast';
import { createQueryTags } from 'utils/query';

const deleteArticleMutation = {
  queryFn: async (slug, { dispatch }, _options, baseQuery) => {
    const deleteArticleResult = await baseQuery({
      method: 'DELETE',
      url: `${ENDPOINTS.ARTICLES}/${slug}`,
    });
    const { data, error } = deleteArticleResult || {};

    if (data) {
      dispatch(push('/'));
    }

    if (error) {
      const { data: { status } = {} } = error || {};

      if (status === 401) {
      } else if (status === 404) {
        errorToast(`This article is no longer available!`);
      }
    }

    return deleteArticleResult;
  },
  invalidatesTags: createQueryTags({ defaultTags: generalFeedTags }),
};

export default deleteArticleMutation;
