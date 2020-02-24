class Team < ApplicationRecord
  has_many :collaborators, dependent: :destroy
  has_many :users, through: :collaborators

  has_many :projects, dependent: :destroy
  validates :name, presence: true, uniqueness: true, allow_blank: false
end
