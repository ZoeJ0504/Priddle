class GroupsController < ApplicationController

    def index
    render json: Group.all
    end

    def show
        g = Group.find(params[:id])
        render json: g, include: ['posts', 'posts.users']
    end


end
