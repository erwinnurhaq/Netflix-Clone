const faqList = document.querySelectorAll('.faq-list li');

for (faqItem of faqList) {
    faqItem.addEventListener('click', function () {
        this.children[1].classList.toggle("close");
        this.children[1].classList.toggle("open");
        icon = this.children[0].children[0];
        icon.innerHTML == 'add' ? icon.innerHTML = 'clear' : icon.innerHTML = 'add';
        console.log(icon.innerHTML)
    })
}


