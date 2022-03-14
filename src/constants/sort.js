const SORT_OPTIONS = Object.freeze([
  { name: '최신순', value: 'recent' },
  { name: '좋아요 많은순', value: 'likes' },
  { name: '댓글 많은순', value: 'comments' },
  { name: '랜덤순', value: 'random' },
]);

SORT_OPTIONS.forEach(Object.freeze);

export default SORT_OPTIONS;
