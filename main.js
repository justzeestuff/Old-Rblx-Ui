document.body.replaceChildren();
document.head.replaceChildren();

AttributesRemover(document.body);
AttributesRemover(document.head);

const stdHeader = new StdHeader();

if(window.location.pathname === '/home'){
    const main = new homepageMainEl;
    const profile = new homepageProfle;

    stdHeader.Init();
    main.Init();
    profile.Init();
}

console.clear();
