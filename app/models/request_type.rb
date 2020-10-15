class RequestType < ApplicationRecord
    # each request type can be linked to many help requests
    has_many :help_requests
end
