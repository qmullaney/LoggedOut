// export const fetchPosts = searchInfo => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/posts',
//         data: { searchInfo }
//     })
// )

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
        data: postForm,
        contentType: false,
        processData: false
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