class RiddlesController < ApplicationController

    def index
        render json: Post.all
    end

    def create  
        r = Riddle.create(riddle_params)
        render json: r ,status: :created
    end

    def update
        p = Riddle.find(params[:id])
        p.update(:post => params[:post])
        render json: p
    end



    def riddle_params
        params.permit(:post, :user_id)
    end
end
