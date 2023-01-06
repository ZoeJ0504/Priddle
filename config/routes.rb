Rails.application.routes.draw do
  resources :wordpuzzles
  resources :groups, only: [:index, :show]
  resources :posts, only: [:index, :update, :create, :destroy]
  resources :users
  resources :sessions, only: [:create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

  get "/groups/:id", to: "groups#show"
  get "/users/:id", to: "users#id"

  get "/riddles", to: "wordpuzzles#index"

end
