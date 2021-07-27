import { push } from 'connected-react-router';
import { createQueryTags } from 'services/apiUtils';
import { ENDPOINTS, generalFeedTags } from 'services/constants';
import { errorToast } from 'utils/toast';

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
