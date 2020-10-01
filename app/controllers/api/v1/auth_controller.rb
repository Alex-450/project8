class Api::V1::AuthController < ApplicationController

    # skip_before_action :verify_authenticity_token
    # skip_before_action :require_login, only: [:login, :auto_login]
    
    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {
                user: user.first_name, jwt: token
            }
        else
            render json: { failure: "log in failed - invalid email or password" },
            status: :unauthorized
        end
    end

    def auto_login
        if session_user
            render json: session_user
        else 
            render json: {errors: "No user logged in"}
        end
    end

        def user_is_authed
            render json: {message: "You are authorized"}
          end
          
    end