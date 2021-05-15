class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, format: {with: EMAIL_FORMAT}, uniqueness: true

    before_save { self.email = email.downcase }

    has_secure_password

    has_one_attached: :id

    # user can have many help requests
    has_many :help_requests, dependent: :destroy

    # validation for all fields
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true

end
