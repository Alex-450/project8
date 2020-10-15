class Api::V1::RequestTypesController < ApplicationController

def create
    request_type = RequestType.create!(request_type_params)
    if request_type.valid?
        render json: { request_type:  request_type},
        status: :ok
    else 
        render json: { errors: request_types.errors.full_messages },
        status: :bad_request
end
end

# GET request_types/[request_type.id]

def show
    render json: RequestType.find(params[:id]), status: :ok
end

# GET request_types

def index
    render json: RequestType.all, status: :ok
end


def request_type_params
    params.permit(:name)
end
end