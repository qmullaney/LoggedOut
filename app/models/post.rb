class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 

    
   
    has_one_attached :photo
end
