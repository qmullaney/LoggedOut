class Like < ApplicationRecord
    validates :liker, :post, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :liker,
        class_name: :User

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post,
        class_name: :Post

    
end