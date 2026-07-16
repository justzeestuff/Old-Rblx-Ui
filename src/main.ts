window.addEventListener("DOMContentLoaded", () => {
    // Delete All elements
    document.body.replaceChildren();
    document.head.replaceChildren();

    // Remove all uncesseray attributes roblox Provides
    AttributesRemover(document.body);
    AttributesRemover(document.head);

    

        setTimeout(() => {
            new StdHeader().Init();
        }, 500);
})

