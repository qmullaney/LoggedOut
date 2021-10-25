class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 

    has_many :likes,
        primary_key: :id,
        foreign_key: :post,
        class_name: :Like
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    # def isLiked?(id)
    #     self.likes.map{ |like| like.liker }.include?(id)
    # end

    # def likeNum 
    #     self.likes.length
    # end
   
    has_one_attached :photo
end
