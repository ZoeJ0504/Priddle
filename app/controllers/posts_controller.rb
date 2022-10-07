class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def create  
        p = Post.create(post_params)
        render json: p ,status: :created
    end

    def destroy
        p = Post.find(params[:id])
       delete_post = p.destroy
       render json: delete_post
    end

    def update
        p = Post.find(params[:id])
        p.update(:text => params[:text])
        render json: p
    end
    
    private 

    def post_params
        params.permit(:text, :user_id, :group_id)
    end
    
end
