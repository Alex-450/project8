class Api::V1::TokensController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            render json: {
                jwt: encode_token({id: user.id, email: user.email})
            }
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end

        end

        private 
        def encode_token(payload={})
        exp = 24.hours.from_now
        payload[:exp] = exp.to_i
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    end