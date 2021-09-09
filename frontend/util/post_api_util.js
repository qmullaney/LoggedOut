export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/posts'
    })
)

export const fetchPost = postId => (
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        data: { postId }
    })
);

export const createPost = postForm => (
    $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: {post: postForm}
    })
);

export const deletePost = postId => (
    $.ajax({
        method: 'DELETE',
        url: 'api/posts',
        data: { postId }
    })
);

export const editPost = postInfo => {
    $.ajax({
        method: 'PATCH',
        url: `api/posts/${postInfo.id}`,
        data: { postInfo }
    })
}