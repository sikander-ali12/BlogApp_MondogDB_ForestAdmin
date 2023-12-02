/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type CommentsLikeCustomizer = CollectionCustomizer<Schema, 'commentsLike'>;
export type CommentsLikeRecord = TPartialRow<Schema, 'commentsLike'>;
export type CommentsLikeConditionTree = TConditionTree<Schema, 'commentsLike'>;
export type CommentsLikeFilter = TPaginatedFilter<Schema, 'commentsLike'>;
export type CommentsLikeSortClause = TSortClause<Schema, 'commentsLike'>;
export type CommentsLikeAggregation = TAggregation<Schema, 'commentsLike'>;

export type CommentsCustomizer = CollectionCustomizer<Schema, 'comments'>;
export type CommentsRecord = TPartialRow<Schema, 'comments'>;
export type CommentsConditionTree = TConditionTree<Schema, 'comments'>;
export type CommentsFilter = TPaginatedFilter<Schema, 'comments'>;
export type CommentsSortClause = TSortClause<Schema, 'comments'>;
export type CommentsAggregation = TAggregation<Schema, 'comments'>;

export type CommentsreportsCustomizer = CollectionCustomizer<Schema, 'commentsreports'>;
export type CommentsreportsRecord = TPartialRow<Schema, 'commentsreports'>;
export type CommentsreportsConditionTree = TConditionTree<Schema, 'commentsreports'>;
export type CommentsreportsFilter = TPaginatedFilter<Schema, 'commentsreports'>;
export type CommentsreportsSortClause = TSortClause<Schema, 'commentsreports'>;
export type CommentsreportsAggregation = TAggregation<Schema, 'commentsreports'>;

export type ModeratorsCustomizer = CollectionCustomizer<Schema, 'moderators'>;
export type ModeratorsRecord = TPartialRow<Schema, 'moderators'>;
export type ModeratorsConditionTree = TConditionTree<Schema, 'moderators'>;
export type ModeratorsFilter = TPaginatedFilter<Schema, 'moderators'>;
export type ModeratorsSortClause = TSortClause<Schema, 'moderators'>;
export type ModeratorsAggregation = TAggregation<Schema, 'moderators'>;

export type PostreportsCustomizer = CollectionCustomizer<Schema, 'postreports'>;
export type PostreportsRecord = TPartialRow<Schema, 'postreports'>;
export type PostreportsConditionTree = TConditionTree<Schema, 'postreports'>;
export type PostreportsFilter = TPaginatedFilter<Schema, 'postreports'>;
export type PostreportsSortClause = TSortClause<Schema, 'postreports'>;
export type PostreportsAggregation = TAggregation<Schema, 'postreports'>;

export type PostsLikesCustomizer = CollectionCustomizer<Schema, 'postsLikes'>;
export type PostsLikesRecord = TPartialRow<Schema, 'postsLikes'>;
export type PostsLikesConditionTree = TConditionTree<Schema, 'postsLikes'>;
export type PostsLikesFilter = TPaginatedFilter<Schema, 'postsLikes'>;
export type PostsLikesSortClause = TSortClause<Schema, 'postsLikes'>;
export type PostsLikesAggregation = TAggregation<Schema, 'postsLikes'>;

export type PostsCustomizer = CollectionCustomizer<Schema, 'posts'>;
export type PostsRecord = TPartialRow<Schema, 'posts'>;
export type PostsConditionTree = TConditionTree<Schema, 'posts'>;
export type PostsFilter = TPaginatedFilter<Schema, 'posts'>;
export type PostsSortClause = TSortClause<Schema, 'posts'>;
export type PostsAggregation = TAggregation<Schema, 'posts'>;

export type RepliedCommentsCustomizer = CollectionCustomizer<Schema, 'repliedComments'>;
export type RepliedCommentsRecord = TPartialRow<Schema, 'repliedComments'>;
export type RepliedCommentsConditionTree = TConditionTree<Schema, 'repliedComments'>;
export type RepliedCommentsFilter = TPaginatedFilter<Schema, 'repliedComments'>;
export type RepliedCommentsSortClause = TSortClause<Schema, 'repliedComments'>;
export type RepliedCommentsAggregation = TAggregation<Schema, 'repliedComments'>;

export type RepliedSuggestionsCustomizer = CollectionCustomizer<Schema, 'repliedSuggestions'>;
export type RepliedSuggestionsRecord = TPartialRow<Schema, 'repliedSuggestions'>;
export type RepliedSuggestionsConditionTree = TConditionTree<Schema, 'repliedSuggestions'>;
export type RepliedSuggestionsFilter = TPaginatedFilter<Schema, 'repliedSuggestions'>;
export type RepliedSuggestionsSortClause = TSortClause<Schema, 'repliedSuggestions'>;
export type RepliedSuggestionsAggregation = TAggregation<Schema, 'repliedSuggestions'>;

export type SuggestionsCustomizer = CollectionCustomizer<Schema, 'suggestions'>;
export type SuggestionsRecord = TPartialRow<Schema, 'suggestions'>;
export type SuggestionsConditionTree = TConditionTree<Schema, 'suggestions'>;
export type SuggestionsFilter = TPaginatedFilter<Schema, 'suggestions'>;
export type SuggestionsSortClause = TSortClause<Schema, 'suggestions'>;
export type SuggestionsAggregation = TAggregation<Schema, 'suggestions'>;

export type UsersCustomizer = CollectionCustomizer<Schema, 'users'>;
export type UsersRecord = TPartialRow<Schema, 'users'>;
export type UsersConditionTree = TConditionTree<Schema, 'users'>;
export type UsersFilter = TPaginatedFilter<Schema, 'users'>;
export type UsersSortClause = TSortClause<Schema, 'users'>;
export type UsersAggregation = TAggregation<Schema, 'users'>;


export type Schema = {
  'comments': {
    plain: {
      '_id': string;
      'body': string;
      'comment_id': number;
      'date': string;
      'id': number;
      'likeCount': number;
      'post_id': number;
      'time': string;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'commentsLike': {
    plain: {
      '_id': string;
      'comment_id': number;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'commentsreports': {
    plain: {
      '_id': string;
      'comment_id': number;
      'reason': string;
    };
    nested: {};
    flat: {};
  };
  'moderators': {
    plain: {
      '_id': string;
      'email': string;
      'name': string;
      'pass': string;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'postreports': {
    plain: {
      '_id': string;
      'post_id': number;
      'reason': string;
    };
    nested: {};
    flat: {};
  };
  'posts': {
    plain: {
      '_id': string;
      'body': string;
      'date': string;
      'likeCount': number;
      'post_id': number;
      'status': string;
      'time': string;
      'title': string;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'postsLikes': {
    plain: {
      '_id': string;
      'post_id': number;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'repliedComments': {
    plain: {
      '_id': string;
      'body': string;
      'realcomment_id': number;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'repliedSuggestions': {
    plain: {
      '_id': string;
      'body': string;
      'from': number;
      'realsug_id': number;
      'to': number;
    };
    nested: {};
    flat: {};
  };
  'suggestions': {
    plain: {
      '_id': string;
      'body': string;
      'from': number;
      'post_id': number;
      'status': string;
      'sug_id': number;
      'to': number;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
  'users': {
    plain: {
      '_id': string;
      'email': string;
      'name': string;
      'pass': string;
      'password': string;
      'user_id': number;
    };
    nested: {};
    flat: {};
  };
};
