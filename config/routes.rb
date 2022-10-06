Rails.application.routes.draw do
  resources :groups
<<<<<<< HEAD
  resources :posts
  resources :users, only: [:show, :create]
  resources :sessions, only: [:create, :destroy]
=======
  resources :posts, only: [:index, :update, :create, :destroy]
  resources :users
>>>>>>> f012290e2914784e19c799b5493a5543e9160b20
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
end
