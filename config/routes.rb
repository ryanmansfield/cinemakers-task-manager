Rails.application.routes.draw do
  root to: 'pages#home'

  devise_for :users
  resources :users, only: [:index]

  resources :projects, only: [:index, :show, :new, :create, :destroy] do
    resources :collaborators, only: [:index, :new, :create ]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stages, only: [] do
        resources :checklists, only: [ :index, :create, :destroy ]
      end
      resources :checklists, only: [ ] do
          resources :tasks, only: [:index, :new, :create, :update]
      end
      resources :tasks, only: [ :destroy]
    end
  end
end


