class Api::V1::UsersController < ApplicationController

    # skip_before_action :verify_authenticity_token
    # skip_before_action :require_login, only: [:login, :auto_login]

    # POST /users
    def create
        user = User.create!(user_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token},
            status: :ok
        else 
            render json: { errors: user.errors.full_messages },
            status: :bad_request
        end
      end
      
    # GET /users

    def show
        render json: User.find(params[:id]), status: :ok
    end

    # PUT /users

    def update
        unless user.update(user_params)
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    #  DELETE /users

    def destroy
        user.destroy
    end

    private

    
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :id)
    end
end