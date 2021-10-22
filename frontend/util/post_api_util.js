export const fetchPosts = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        data: { id: userId }
    })
)

export const fetchPost = postId => (
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        data: { postId }
    })
);

export const createPost = postForm => {
    
    return $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: postForm,
        contentType: false,
        processData: false
    })
};

export const deletePost = postId => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${postId}`
    })
);

export const editPost = incoming => {
  
    return $.ajax({
        method: 'PATCH',
        url: `api/posts/${incoming.postId}`,
        data: incoming.form,
        contentType: false,
        processData: false
    })
}