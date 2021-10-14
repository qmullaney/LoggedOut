class API::ConnectionsController < ApplicationController
    def index
        user = User.find(params[:id])
        @connctions = Connection.connections(user)

        render 'api/connections/index'
    end
end