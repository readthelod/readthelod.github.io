

//on document load get the node that has class readingclubnotes
let elements = document.querySelectorAll('.readingclubnotes *');
let wrapper;

for (let el of elements) {
    if (el.tagName === 'H3') {
        wrapper = document.createElement('div');
        wrapper.classList.add('question');
        el.parentNode.insertBefore(wrapper, el);
    } else if (el.tagName === 'H2') {
        wrapper = null;
    }
    if (wrapper) {
        wrapper.appendChild(el);
    }
}
