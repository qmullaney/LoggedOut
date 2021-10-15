class Connection < ApplicationRecord
    validates :connector, :connectee, presence: true
    validates :connector, uniqueness: { scope: :connectee }

    belongs_to :connector,
        primary_key: :id,
        foreign_key: :connector,
        class_name: :User 
    
    belongs_to :connectee,
        primary_key: :id,
        foreign_key: :connectee,
        class_name: :User 

    
    def self.connections(user)
        connectors = user.connectors
        connectees = user.connectees.map{ |usr| usr.id }.sort

        connectors.select do |usr|
            connectees.bsearch { |i| i == usr.id } != nil 
        end

        return connectors
    end

    def self.no_reconnectors(user)
        connections = Connection.connections(user).map{ |usr| usr.id }.sort
        connectees = user.connectees

        connectees.select do |usr| 
            connections.bsearch { |i| i == usr.id } == nil
        end

        return connectees
    end
end
