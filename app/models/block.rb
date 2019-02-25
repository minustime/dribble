class Block < ApplicationRecord
    has_many :sign_ups
    has_many :users, :through => :sign_ups
end
