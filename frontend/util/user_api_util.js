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
);

export const fetchFill = input => (
    $.ajax({
        method: 'GET',
        url: 'api/users',
        data: { input }
    })
)