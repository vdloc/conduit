import { TAG_TYPES } from '@/constants';

export function createQueryTags({
  resultTagsReducer,
  errorTagsReducer,
  defaultTags = [],
}) {
  return function (result, error, args) {
    let tags;

    if (error) {
      if (typeof errorTagsReducer === 'function') {
        tags = errorTagsReducer(error, args);
      }

      return error?.status === 401
        ? TAG_TYPES.UNAUTHORIZED
        : TAG_TYPES.UNKNOWN_ERROR;
    }

    if (result && typeof resultTagsReducer === 'function') {
      tags = resultTagsReducer(result, args);
    }

    return tags ? [...tags, ...defaultTags] : defaultTags;
  };
}
