class HelpRequest < ApplicationRecord
# all help requests must have a user
    belongs_to :user
# all help requests must have a type
    has_one :request_type
# validation for all fields
validates :title, presence: true
validates :description, presence: true
validates :latitude, presence: true
validates :longitude, presence: true
validates :user_id, presence: true
validates :request_type_id, presence: true
end
