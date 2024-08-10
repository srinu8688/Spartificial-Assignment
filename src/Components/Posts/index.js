import React, { useState, useEffect, useMemo } from 'react';
import Header from "../Header";
import "./index.css";

const generatePostData = (num) => {
  const captions = [
    'Check out this awesome sunset!',
    'Just finished reading a great book.',
    'Had a fantastic meal at a new restaurant.',
    'Loving the new movie I watched yesterday.',
    'My pet is so adorable!',
    'Just completed a challenging workout.',
    'Exploring a new hiking trail today.',
    'Trying out a new recipe at home.',
    'Caught up with an old friend recently.',
    'Enjoying a relaxing day at the beach.'
  ];

  const getRandomCaption = () => captions[Math.floor(Math.random() * captions.length)];
  const getRandomMediaUrl = () => `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/400/300`;

  return Array.from({ length: num }, (_, i) => ({
    postId: i + 1,
    caption: getRandomCaption(),
    mediaUrl: getRandomMediaUrl()
  }));
};

const dummyPosts = generatePostData(1000);

const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [hiddenPosts, setHiddenPosts] = useState(new Set());

  const postsPerPage = 10;

  useEffect(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = dummyPosts
      .filter(post => !hiddenPosts.has(post.postId)) 
      .slice(startIndex, startIndex + postsPerPage);
    setPosts(currentPosts);
  }, [currentPage, hiddenPosts]); 

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const totalPages = useMemo(() => Math.ceil(dummyPosts.length / postsPerPage), []); // No need for hiddenPosts dependency

  const handleDelete = (postId) => {
    if (window.confirm(`Are you sure you want to delete post with ID: ${postId}?`)) {
      setPosts(prevPosts => prevPosts.filter(post => post.postId !== postId));
    }
  };

  const handleHide = (postId) => {
    setHiddenPosts(prevHiddenPosts => new Set(prevHiddenPosts).add(postId));
  };

  return (
    <>
      <Header />
      <div className="posts-listing-container">
        <div className="posts-container">
          <table className="posts-table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Post Caption</th>
                <th>Media URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.filter(post => !hiddenPosts.has(post.postId)).map(post => (
                <tr key={post.postId}>
                  <td>{post.postId}</td>
                  <td>{post.caption}</td>
                  <td><a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">View Media</a></td>
                  <td>
                    <button 
                      onClick={() => handleDelete(post.postId)} 
                      className="action-button delete-button" 
                      aria-label={`Delete post with ID ${post.postId}`}
                    >
                      Delete
                    </button>
                    <button 
                      onClick={() => handleHide(post.postId)} 
                      className="action-button hide-button" 
                      aria-label={`Hide post with ID ${post.postId}`}
                    >
                      Hide
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
