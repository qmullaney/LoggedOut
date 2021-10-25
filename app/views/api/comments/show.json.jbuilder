json.body @comment.body
json.post_id @comment.post_id 
json.commenter_id @comment.commenter_id

json.commenter_pic @comment.commenter.photo.url
json.commenter_name @comment.commenter.name
json.commenter_pronouns @comment.commenter.pronouns
