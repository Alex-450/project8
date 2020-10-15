class AddRequestTypeToHelpRequests < ActiveRecord::Migration[6.0]
  def change
    add_reference :help_requests, :request_type, null: false, foreign_key: true
  end
end
