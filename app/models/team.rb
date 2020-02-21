class Team < ApplicationRecord
  has_many :users
  has_many :projects
  validates :name, presence: true, allow_blank: false
end
