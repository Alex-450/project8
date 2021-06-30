class Api::V1::VolunteerConnectionsController < ApplicationController

    #POST /volunteer_connections

    def create
        volunteer_connection = VolunteerConnection.create!(volunteer_connection_params)
            if volunteer_connection.valid?
                render json: {volunteer_connection: volunteer_connection},
                status: :ok
            else
                render json: {errors: volunteer_connection.errors.full_messages},
                status: :bad_request
    end
end

#GET /volunteer_connections

def index
    render json: VolunteerConnection.all, status: :ok
end

#GET /volunteer_connections/[volunteer_connection.id]

def show
    render json: VolunteerConnection.find(params[:id]), status: :ok
end

def volunteer_connection_params
    params.permit(:user_id, :help_request_id)
end


end