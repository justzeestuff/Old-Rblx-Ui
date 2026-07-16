 function AttributesRemover(el:HTMLElement){
    [...el.attributes].forEach(attr => {
        el.removeAttribute(attr.name);
    });
}