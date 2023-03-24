class User < ApplicationRecord
    validates :username, :password, presence: true
    validates :name, uniqueness: true

    has_secure_password

    has_many :tips
    has_many :plants, through: :tips
end
