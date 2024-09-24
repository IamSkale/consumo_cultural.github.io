function openPage(url){
    location.href = url;
}

function show(id_tab, id_btn)
{
    let tab = document.getElementById(id_tab)
    let btn = document.getElementById(id_btn)

    if(tab.style.display == 'block')
    {
        btn.innerText = 'Ver Mas'
        tab.style.display = 'none'
    }
    else
    {
        btn.innerText = 'Ver Menos'
        tab.style.display = 'block'
    }
}

function show_stuff(id_tab, stuff_class)
{
    let tab = document.getElementById(id_tab)
    let tabs = document.getElementsByClassName(stuff_class)
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].style.display = 'none'
    }

    tab.style.display = 'block'
}