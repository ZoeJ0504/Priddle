class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def create  
        p = Post.create(post_params)
        render json: p ,status: :created
    end

    def destroy

    end

    def update

    end
    
    private 

    def post_params
        params.permit(:text, :user_id, :group_id)
    end
    
end
