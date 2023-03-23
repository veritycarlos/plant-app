class Tip < ApplicationRecord
  validates :comment, :title, :rating, presence: true

  belongs_to :user
  belongs_to :plant
end
