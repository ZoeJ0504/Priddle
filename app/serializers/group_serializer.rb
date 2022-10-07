class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :posts
  has_many :users
end
