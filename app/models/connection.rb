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

        connectors.select { |usr| connectees.include?(usr.id) }
    end

    def self.no_reconnectors(user)
        connections = Connection.connections(user).map{ |usr| usr.id }.sort
        connectees = user.connectees

        connectees.select { |usr| !connections.include?(usr.id) }
    end
end
