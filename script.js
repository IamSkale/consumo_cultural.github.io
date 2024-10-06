function openPage(url) {
    location.href = url;
}

function show(id_tab, id_btn) {
    let tab = document.getElementById(id_tab)
    let btn = document.getElementById(id_btn)

    if (tab.style.display == 'block') {
        btn.innerText = 'Ver Tabla'
        tab.style.display = 'none'
    }
    else {
        btn.innerText = 'Ver Menos'
        tab.style.display = 'block'
    }
}

function show_stuff(id_tab, stuff_class) {
    let tab = document.getElementById(id_tab)
    let tabs = document.getElementsByClassName(stuff_class)
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].style.display = 'none'
    }

    tab.style.display = 'block'
}

function row_hover(nmb) {
    let rows = document.getElementsByClassName('row')
    rows[nmb - 1].style.backgroundColor = 'grey'
}
function row_unhover(nmb) {
    let rows = document.getElementsByClassName('row')
    rows[nmb - 1].style.backgroundColor = 'transparent'
}

function column_hover(column_nmb) {
    let column = document.getElementsByClassName(column_nmb)
    for (let index = 0; index < 173 * 2; index++) {
        column[index].style.backgroundColor = 'grey'
    }
}
function column_unhover(column_nmb) {
    let column = document.getElementsByClassName(column_nmb)
    for (let index = 0; index < 173 * 2; index++) {
        column[index].style.backgroundColor = 'transparent'
    }
}

function show_menu(nmb) {
    let menus = document.getElementsByClassName('menu')
    if (menus[nmb - 1].style.display == 'block') {
        menus[nmb - 1].style.display = 'none'
    }
    else {
        for (let i = 0; i < 11; i++) {
            if (i != nmb - 1) {
                menus[i].style.display = 'none'
            }
        }

        menus[nmb - 1].style.display = 'block'
    }
}

function update_tab(ind, col_ind, sel_ind) {

    let selectors = document.getElementsByClassName(sel_ind)
    let column = document.getElementsByClassName(col_ind)
    let rows = document.getElementsByClassName('row')
    if (selectors[ind - 1].style.color != 'lightgrey') {

        selectors[ind - 1].style.color = 'lightgrey'

        for (let i = 0; i < 172 * 2; i += 2) {
            if (column[i].textContent.includes(selectors[ind - 1].textContent)) {
                rows[i / 2].style.display = 'none'
                let aux = column[i + 1].textContent + '*'
                column[i + 1].textContent = aux
            }
        }
    }
    else {

        selectors[ind - 1].style.color = 'black'

        for (let i = 0; i < 172 * 2; i += 2) {
            if (column[i].textContent.includes(selectors[ind - 1].textContent)) {
                if (column[i + 1].textContent.includes('*')) {
                    column[i + 1].textContent = column[i + 1].textContent.slice(0, -1)
                }

                if (!rows[i / 2].textContent.includes('*')) {
                    rows[i / 2].style.display = 'table-row';
                }
            }
        }
    }
    let nmbs = document.getElementsByClassName('nmb')
    let nmb = 1;
    for (let i = 0; i < nmbs.length; i++) {
        if(rows[i].style.display != 'none')
        {
            nmbs[i].textContent = nmb
            nmb++
        }
    }
    update_selectors()
}

function update_selectors() {
    let rows = document.getElementsByClassName('row')
    for (let i = 1; i < 12; i++) {
        let aux_col = 'column_' + i
        let aux_sel = 'selector_name_' + i
        let aux_am = 'amount_' + i
        let column = document.getElementsByClassName(aux_col)
        let selector = document.getElementsByClassName(aux_sel)
        let amount = document.getElementsByClassName(aux_am)

        for (let j = 0; j < selector.length; j++) {
            let count = 0
            for (let k = 0; k < 172 * 2; k += 2) {
                if (column[k].textContent.includes(selector[j].textContent) && rows[k/2].style.display != 'none') {
                    count++
                }
            }
            amount[j].textContent = count
            if (selector[j].style.color != 'lightgrey') {
                amount[j].style.opacity = 1
            }
            else {
                amount[j].style.opacity = 0
            }
            
        }
    }
}

function init()
{
    for (let i = 1; i < 12; i++) {
        let aux_sel = 'selector_name_' + i
        let selector = document.getElementsByClassName(aux_sel)
        for (let j = 0; j < selector.length; j++) {
            selector[j].style.color = 'black'
        }
    }
    let rows = document.getElementsByClassName('row')
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = 'table-row'        
    }
}