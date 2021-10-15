@connections.each do |connection|
    json.set! connection.id do
        json.partial! "api/users/user", user: connection
    end

end