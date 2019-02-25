class User < ApplicationRecord
    has_many :sign_ups
    has_many :blocks, :through => :sign_ups
end
