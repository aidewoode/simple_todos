class Task < ActiveRecord::Base
  validates :body, presence: true

  belongs_to :user
end
