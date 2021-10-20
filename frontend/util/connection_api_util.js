export const createConnection = (connector_id, connectee_id) => (
    $.ajax({
        method: 'POST',
        url: 'api/connections',
        data: { connector: connector_id, connectee: connectee_id }
    })
);

export const removeConnection = (connector_id, connectee_id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/connections/4`,
        data: { connector: connector_id, connectee: connectee_id }
    })
);

export const getNoConnections = id => (
    $.ajax({
        method: 'GET',
        url: `api/connections/${id}`,
        data: { toDo: 'connectees' }
    })
);

export const currentUsrConnections = id => (
    $.ajax({
        method: 'GET',
        url: `api/connections/${id}`,
        data: { toDo: 'connections' }
    })
)
