class HelpRequest < ApplicationRecord
# all help requests must have a user
    belongs_to :user
# all help requests must have a type
    has_one :request_type

# help requests can be linked to many users via volunteer_connections
    has_many :users, through: :volunteer_connections

# validation for all fields
validates :title, presence: true
validates :description, presence: true
validates :latitude, presence: true
validates :longitude, presence: true
validates :user_id, presence: true
validates :request_type_id, presence: true
end
