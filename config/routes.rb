Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'site#home'

  namespace :api do 
    namespace :v1 do 
      resources :users, only: [:create]
      resources :tokens, only: [:create]
      get 'tokens/create'
      post "/login", to: "auth#login"
      get "/auto_login", to: "auth#auto_login"
      get "/user_is_authed", to: "auth#user_is_authed"
    end 
  end
  match '*path', to: 'site#home', via: :all
end 

