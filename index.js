const subList = () => {
    const list = document.querySelector('.list')
    
    if (list.style.display == 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
};

document.querySelector('#sub-list').addEventListener('click', subList);