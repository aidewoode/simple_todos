class User < ActiveRecord::Base
  VALID_EMAIL = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, format: { with: VALID_EMAIL }, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, on: :create
  validates :password_confirmation, presence: true, on: :create

  has_many :tasks, dependent: :destroy

  has_secure_password

  def generate_jwt
    JWT.encode({ data: email }, ENV['AUTH_SECRET_KEY'], 'HS256')
  end
end
