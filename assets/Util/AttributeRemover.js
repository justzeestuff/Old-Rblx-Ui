 function AttributesRemover(el){
    [...el.attributes].forEach(attr => {
        el.removeAttribute(attr.name);
    });
}