class Checklist < ApplicationRecord
  belongs_to :stage, dependent: :destroy
  has_many :tasks, dependent: :destroy
  validates :name, presence: true, allow_blank: false
end
