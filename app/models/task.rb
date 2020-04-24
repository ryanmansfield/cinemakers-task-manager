class Task < ApplicationRecord
  belongs_to :checklist
  validates :title, presence: true, allow_blank: false
end
