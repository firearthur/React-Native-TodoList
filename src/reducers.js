const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

export const reddit = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
      break;
    case FETCH_POSTS_COMPLETE:
      return action.payload;
      break;
    default:
      return state;
  }
  return state;
};

