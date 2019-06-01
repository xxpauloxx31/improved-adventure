//IIFE
(function () {

    jQuery(main);

    let tbody;
    let template;

    function main() {
        tbody = $('tbody');
        template = $('.userTemplate');

        sendUserData();

        // let promise = fetch('http://localhost:8080/api/user')
        //                 .then((response)=>{
        //                     return response.json();
        //                 })
        //                 .then(renderUsers);
    }

    async function sendUserData() {
        const data = await fetch('http://localhost:8080/api/user');
        const users = await data.json();
        renderUsers(users);
    }

    function renderUsers(users) {
        for(let i = 0; i < users.length; i++) {
            let user = users[i];
            let clone = template.clone();
            clone.find('.username')
                 .html(user.username);
            clone.find('.password')
                 .html(user.password);
            clone.find('.firstName')
                 .html(user.firstName);
            clone.find('.lastName')
                 .html(user.lastName);
            tbody.append(clone);
        }
    }

})(); //for js and jquery barebones




//let h1 = jQuery('#title');
        // h1.css('color', 'red');

        // let red = $('.red');
        // let green = $('.green');
        // let blue = $('.blue');

        // red.css('color', 'white')
        //   .css('background-color', 'red');
        // green.css('color', 'white')
        //   .css('background-color', 'green');
        // blue.css('color', 'white')
        //   .css('background-color', 'blue');