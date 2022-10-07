class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :text

  belongs_to :user
end
