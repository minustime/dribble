class SignUp < ApplicationRecord

    belongs_to :user
    belongs_to :block

    scope :yes, lambda { where(:status => 1) }
    scope :maybe, lambda { where(:status => 2) }
    scope :no, lambda { where(:status => nil) }
    scope :search, lambda { |status| where(["status = ?", status]) }
    
end
