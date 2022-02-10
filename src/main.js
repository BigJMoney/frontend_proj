var is_adv_view = true

function switch_main_view() {
    console.log('switching main view');
    let adv_view = document.querySelector('#windows_center_adv_mode');
    let arena_view = document.querySelector('#windows_center_arena_mode')

    if (is_adv_view) {
        adv_view.style.display = 'none';
        arena_view.style.display = 'grid';
        is_adv_view = false
    }
    else {
        arena_view.style.display = 'none';
        adv_view.style.display = 'grid';
        is_adv_view = true
    }

}

let button = document.querySelector('#mode_button');
button.addEventListener("click",switch_main_view);