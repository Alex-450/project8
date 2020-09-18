class Api::V1::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    # POST /users
    def create
        user = User.create!(user_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token}
        else 
            render json: { errors: user.errors.full_messages }
        end
        
      end
    # POST /users

    def show
        render json: @user, status: :ok
    end

    # PUT /users/email

    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    #  DELETE /users/email

    def destroy
        @user.destroy
    end

    private

    
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end