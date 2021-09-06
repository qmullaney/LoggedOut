class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    # belongs_to :user 
    has_one_attached :photo
end
