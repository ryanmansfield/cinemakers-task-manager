class Checklist < ApplicationRecord
  belongs_to :stage, dependent: :destroy
  has_many :tasks
  validates :name, presence: true, uniqueness: true, allow_blank: false
end
