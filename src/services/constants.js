export const ENDPOINTS = {
  PROFILES: 'profiles',
  USER: 'user',
  LOGIN: 'users/login',
  REGISTER: 'users',
  ARTICLES: 'articles',
  FEED_ARTICLES: 'articles/feed',
  TAGS: 'tags',
};

export const TAG_TYPES = {
  POST: 'POST',
  POST_COMMENTS: 'POST_COMMENTS',
  PROFILE: 'PROFILE',
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};

export const GENERAL_FEED_TAG = {
  FAVORITED_FEED: 'FAVORITED_FEED',
  SUBSCRIBED_FEED: 'SUBSCRIBED_FEED',
  USER_OWNED_FEED: 'USER_OWNED_FEED',
  TAG_FEED: 'TAG_FEED',
  GLOBAL_FEED: 'GLOBAL_FEED',
};

export const generalFeedTags = Object.values(GENERAL_FEED_TAG).map((tagId) => ({
  type: TAG_TYPES.POST,
  id: tagId,
}));
