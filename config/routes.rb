Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :teams, only: [ :index, :show, :new, :create, :destroy ] do
    resources :collaborators, only: [:index, :new, :create ]
  end


  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # resources :projects, only: [] do
        resources :stages, only: [] do
          resources :checklists, only: [ :index, :create , :destroy] do
            resources :tasks, only: [:index, :new, :create, :update, :destroy]
          end
        end
      # end
    end
  end

  resources :projects, only: [:index, :show, :new, :create, :destroy]

end


