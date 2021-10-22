
    @posts.each do |post|
        json.set! post.id do
            json.id post.id
            json.body post.body 
            json.author_id post.author_id

            json.name post.user.name
            json.photo_url post.photo.url
            json.author_pic post.user.photo.url
            json.author_headline post.user.headline 

            json.likes post.likes.map{ |like| like.liker }

            json.created_at post.created_at 
            
        end
    end
