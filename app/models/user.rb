class User < ApplicationRecord
    validates :name, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post 

    has_many :connectors,
        primary_key: :id,
        foreign_key: :connector,
        class_name: :Connection

    has_many :connectees,
        primary_key: :id,
        foreign_key: :connectee,
        class_name: :Connection


    has_one_attached :photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        if user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password
        @password 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token 
    end

end
