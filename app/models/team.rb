class Team < ApplicationRecord
  has_many :user
  validates :name, presence: true, allow_blank: false
end
