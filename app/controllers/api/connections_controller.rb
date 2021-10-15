class Api::ConnectionsController < ApplicationController
    def show
        user = User.find(params[:id])
        @connections = Connection.connections(user) || []
        
        render 'api/connections/show'
    end

    def create
        one = User.find(params[:connector])
        two = User.find(params[:connectee])

        @connection = Connection.create(connector: one, connectee: two)

    end

    def destroy 
        one = User.find(params[:connector])
        two = User.find(params[:connectee])

        connection = Connection.find_by(connector: one, connectee: two)

        connection.destroy
    end
end