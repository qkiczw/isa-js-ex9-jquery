$(function() {

    const users = [
        {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
        {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
        {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
        {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
    ];

    const $table = $('<table class="table table-dark">').appendTo('body');

    const getRowsWithUsers = () => {
        return users.map(user => {
            return $(`
        <tr>
            <td><input class="check-box" type="checkbox" data-id="${user.id}"></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
        `)
        })
    };

    $table.append(getRowsWithUsers());

    $table.children().addClass('table-row');

    const $checkBox = $('.check-box');

    const getUserId = function () {
        if($checkBox.prop('checked')) {
            console.log('User ID: ', $(this).data('id'));
        }
    };

    $checkBox.on('change', getUserId);

    $table.children().append('<td class="remove-icon"><button type="button" class="btn btn-danger btn-sm">X</button></td>');

    const $removeIcon = $('.remove-icon');

    const $removeUser = function () {
        $(this).parent().remove();
    };

    $removeIcon.on('click', $removeUser);

    $table.children().addClass('table-row');

    const $tableRow = $('.table-row');

    $tableRow.children().addClass('table-cell');

    const $Highlight = function () {
        $(this).addClass('bg-success');
        console.log('dupa i tyle');
    }
    const $removeHighlight = function () {
        $(this).removeClass('bg-success');
    }

    $tableRow.on({
        mouseenter: $Highlight,
        mouseleave: $removeHighlight
    });


 });