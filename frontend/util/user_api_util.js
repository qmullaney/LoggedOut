export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
        data: { userId }
    })
)

export const editUser = input => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${input.userId}`,
        data: input.form,
        contentType: false,
        processData: false
    })
)