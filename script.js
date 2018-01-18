// $(function() {

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
            <td><input class="check-box" type="checkbox" data-id=${user.id}></td>
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

    const $tableRow = $('.table-row');

    $tableRow.children().addClass('table-cell');

    const $checkBox = $('.check-box');

    const getUserId = function () {
        if($(this).prop('checked')) {
            console.log('User ID: ', $(this).data('id'));
        }
    };

    $checkBox.on('change', getUserId);

    $table.children().append('<td class="remove-icon"><button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></button></td>');

    const $removeIcon = $('.remove-icon');

    const $removeUser = function () {
        $(this).parent().remove();
    };

    $removeIcon.on('click', $removeUser);

    const $Highlight = function () {
        $(this).toggleClass('bg-success');
    };

    $tableRow.on({
        mouseenter: $Highlight,
        mouseleave: $Highlight
        });


    const $userForm = $(`
        <form class="col-sm-12 col-md-5 pl-5 pr-5 pt-2 pb-3">
        <div class="form-group">
            <label for="form-id">id</label>
            <input type="text" class="form-control" id="form-id" placeholder=" Wpisz Id">
        </div>
        <div class="form-group">
            <label for="form-first-name">Imię</label>
            <input type="text" class="form-control" id="form-first-name" placeholder="Wpisz imię">
        </div>
        <div class="form-group">
            <label for="form-last-name">Nazwisko</label>
            <input type="text" class="form-control" id="form-last-name" placeholder="Wpisz nazwisko">
        </div>
        <div class="form-group">
            <label for="form-age">Wiek</label>
            <input type="text" class="form-control" id="form-age" placeholder="Wpisz wiek">
        </div>
        <div class="form-group">
            <label for="form-city">Miasto</label>
            <input type="text" class="form-control" id="form-city" placeholder="Wpisz miasto">
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check-age">
            <label class="form-check-label" for="check-age">Mam 18 lat.</label>
        </div>
        <button id="add-user-btn" class="btn btn-primary">Dodaj</button>
        </form>`);

    $userForm.prependTo('body');
    const $formId= $('#form-id');
    const $formFirstName = $('#form-first-name');
    const $formLastName = $('#form-last-name');
    const $formAge = $('#form-age');
    const $formCity = $('#form-city');
    const $addUserBtn = $('#add-user-btn');

    const $newUser = {};


    function getNewUser() {
        event.preventDefault();
        users.push({firstName: $formFirstName.val(), lastName: $formLastName.val(), age: $formAge.val(), city: $formCity.val(), id: users.length + 1})
    }


    $addUserBtn.on('click', getNewUser);

 // });