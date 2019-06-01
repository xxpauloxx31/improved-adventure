//IIFE
(function () {

    jQuery(main);

    function main() {
        let h1 = jQuery('#title');
        h1.css('color', 'red');

        let red = $('.red');
        let green = $('.green');
        let blue = $('.blue');

        red.css('color', 'white')
          .css('background-color', 'red');
        green.css('color', 'white')
          .css('background-color', 'green');
        blue.css('color', 'white')
          .css('background-color', 'blue');
    
        let tr = $('.userTemplate');

        let users = [
            {username: 'mob'},
            {username: 'bob'}
        ];

        let tbody = $('tbody');

        

        for(let i = 0; i < users.length; i++) {
            let user = users[i];
            console.log(user);

            let clone = tr.clone();
            clone.find('.username').html(user.username);
            tbody.append(clone);
        }
    }

})(); //for js and jquery barebones

