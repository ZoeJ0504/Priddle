class WordpuzzlesController < ApplicationController


    def index
        render json: Wordpuzzle.all
    end

    def create  
        r = Wordpuzzle.create(wordpuzzle_params)
        render json: r ,status: :created
    end

    def update
        p = Wordpuzzle.find(params[:id])
        p.update(:post => params[:post])
        render json: p
    end



    def wordpuzzle_params
        params.permit(:message, :user_id)
    end
end
