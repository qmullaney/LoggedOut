export const createConnection = (connector_id, connectee_id) => (
    $.ajax({
        method: 'POST',
        url: 'api/connections',
        data: { connector: connector_id, connectee: connectee_id }
    })
)

export const removeConnection = (connector_id, connectee_id) => (
    $.ajax({
        method: 'DELETE',
        url: 'api/connections',
        data: { connector: connector_id, connectee: connectee_id }
    })
)