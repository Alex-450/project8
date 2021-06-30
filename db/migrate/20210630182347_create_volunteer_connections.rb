class CreateVolunteerConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :volunteer_connections do |t|
      t.references :user, null: false, foreign_key: true
      t.references :help_request, null: false, foreign_key: true

      t.timestamps
    end
  end
end
