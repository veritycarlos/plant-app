class Tip < ApplicationRecord
  validates :comment, :title, presence: true

  belongs_to :user
  belongs_to :plant
end
