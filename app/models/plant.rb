class Plant < ApplicationRecord
    validates :name, :image, presence: true
    validates :name, uniqueness: true

    has_many :tips, dependent: :destroy
    has_many :users, through: :tips
end