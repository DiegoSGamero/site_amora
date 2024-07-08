Rails.application.routes.draw do
  root to: 'pages#home'
  get "/historia", to: "pages#historia"
  get "/cidades", to: "pages#cidades"
  get "/patrimonio_cultural", to: "pages#patrimonio_cultural"
  get "/patrimonio_natural", to: "pages#patrimonio_natural"
  get "/legislacao", to: "pages#legislacao"
end
