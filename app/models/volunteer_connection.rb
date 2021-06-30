class VolunteerConnection < ApplicationRecord
  belongs_to :user
  belongs_to :help_request
end
