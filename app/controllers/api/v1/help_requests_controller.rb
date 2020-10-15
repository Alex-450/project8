class Api::V1::HelpRequestsController < ApplicationController

# POST /help_requests

def create
    help_request = HelpRequest.create!(help_request_params)
        if help_request.valid?
            render json: { help_request: help_request},
            status: :ok
        else 
            render json: { errors: help_request.errors.full_messages },
            status: :bad_request
    end
end

# GET /help_requests/[help_request.id]

def show
    render json: HelpRequest.find(params[:id]), status: :ok
end

# GET /help_requests

def index
    render json: HelpRequest.all, status: :ok
end

def help_request_params
    params.permit(:title, :description, :latitude, :longitude, :request_type_id, :user_id)
end

end