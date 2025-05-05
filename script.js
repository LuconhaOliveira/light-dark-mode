//codigo do pai
document.addEventListener('DOMContentLoaded',()=>{
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    if(localStorage.getItem('theme')){
        document.body.classList.add(localStorage.getItem('theme'));
    }else{
        document.body.classList.add('light');
    }

    document.getElementById('toggle-theme').addEventListener('click',()=>{
        if(localStorage.getItem('theme')=='dark'){
            localStorage.setItem('theme','light');
        }else{
            localStorage.setItem('theme','dark');
        }
        document.body.classList.remove('dark');
        document.body.classList.remove('light');
        document.body.classList.add(localStorage.getItem('theme'));
    });
});

//codigo ivo
// document.addEventListener('DOMContentLoaded',()=>{
//     const currentTheme = localStorage.getItem('theme') || 'light';

//     document.body.classList.add(currentTheme);

//     document.getElementById('toggle-theme').addEventListener('click',()=>{
//         const newTheme = document.body.classList.contains('light')?'dark':'light';

//         document.body.classList.remove('light','dark');

//         document.body.classList.add(newTheme);

//         localStorage.setItem('theme',newTheme);
//     });
// });