var is_adv_view = true

function switch_main_view() {
    console.log('switching main view');
    let focus_win = document.querySelector('#focus_win');
    let activity_win = document.querySelector('#activity_win');
    let prompt_win = document.querySelector('#prompt_win');

    let arena_win = document.querySelector('#arena_win');
    let aactivity_win = document.querySelector('#aactivity_win');

    if (is_adv_view) {
        focus_win.style.display = 'none';
        activity_win.style.display = 'none';
        prompt_win.style.display = 'none';

        arena_win.style.display = 'flex';
        aactivity_win.style.display = 'flex';
        is_adv_view = false;
    }
    else {
        focus_win.style.display = 'flex';
        activity_win.style.display = 'flex';
        prompt_win.style.display = 'flex';

        arena_win.style.display = 'none';
        aactivity_win.style.display = 'none';
        is_adv_view = true;
    }

}

let button = document.querySelector('#mode_button');
button.addEventListener("click",switch_main_view);