export const selectAllPosts = state => {
    
    let keys = Object.keys(state.entities.posts);
    let posts = [];
    for(let i = 0; i < keys.length; i++){
        posts.push(state.entites.posts[keys[i]])
    }
    return posts;
}