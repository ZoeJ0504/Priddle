class RiddlesController < ApplicationController

    def index
        render json: Post.all
    end
    
    def create  
        r = Riddle.create(post_params)
        render json: r ,status: :created
    end





    def post_params
        params.permit(:text, :user_id, :group_id)
    end
end
