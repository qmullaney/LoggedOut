class Api::ConnectionsController < ApplicationController
    def show
        user = User.find(params[:id])
        
        if params[:toDo] == "connections"
            @connections = Connection.connections(user) || []
            render 'api/connections/show'
        elsif params[:toDo] == "connectees"
            @connections = Connection.no_reconnectors(user) || []

            render 'api/connections/show'
        end
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