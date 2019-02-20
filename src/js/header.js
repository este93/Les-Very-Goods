module.exports = function() {
    var $header = document.querySelector('.b-header'),
        $searchTrigger = document.querySelector('.b-header__search'),
        $search = document.querySelector('.c-search'),
        $searchClose = document.querySelector('.c-search__close');

    var $nav = document.querySelector('.c-nav--mob'),
        $navTrigger = document.querySelector('.b-header__menu-trigger');

    $navTrigger.addEventListener('click', function() {
        $nav.classList.add('menu-opened');
        $header.classList.add('menu-opened');
        document.querySelector('body, html').classList.add('fixed');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.matches('.b-header.menu-opened .b-header__menu-trigger')) return;
        $nav.classList.remove('menu-opened');
        document.querySelector('body, html').classList.remove('fixed');
        $header.classList.remove('menu-opened');
    })

    var submenuToggle = document.querySelectorAll('.c-nav--mob__item .caret'),
        submenu = document.querySelectorAll('.c-nav--mob--submenu');

    for(var i in submenuToggle) {
        if(submenuToggle.hasOwnProperty(i)) {
            submenuToggle[i].onclick = function(e) {
                e.preventDefault();

                if( !this.classList.contains('active') ){

                    for (let el of submenuToggle) {
                        el.classList.remove("active");
                    }

                    for (let el of submenu) {
                        el.classList.remove("active");
                    }

                    this.classList.add('active');
                    this.parentNode.nextElementSibling.classList.add('active');
                }else{
                    this.classList.remove('active');
                    this.parentNode.nextElementSibling.classList.remove('active');
                }

            }
        }
    }

    // function closeSearch() {
    //     $search.fadeOut(300, function() {
    //         $searchInput.val('');
    //         $autocomplete.text('');
    //     });
    //     $('body, html').classList.remove('fixed');
    // }

    // $searchTrigger.addEventListener('click', function() {
    //     $search.fadeIn(300);
    //     $('body, html').classList.add('fixed');
    //     $('.p-search__form__input_header').focus();
    // });

    // $search.addEventListener('click', closeSearch);
    // $searchClose.addEventListener('click', closeSearch);
};
