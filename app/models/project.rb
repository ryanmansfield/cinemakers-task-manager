class Project < ApplicationRecord
  has_many :collaborators, dependent: :destroy
  has_many :users, through: :collaborators
  validates :name, presence: true, allow_blank: false
  has_many :stages, dependent: :destroy
  has_many :checklists, through: :stages
  has_many :tasks, through: :checklists
end
