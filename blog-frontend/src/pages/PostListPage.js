import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import { Helmet } from 'react-helmet-async';

const PostListPage = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
