class Team < ApplicationRecord
  has_many :collaborators
  has_many :users, through: :collaborators

  has_many :projects
  validates :name, presence: true, allow_blank: false
  validates :team, presence: true, allow_blank: false
end
