"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // Delete All elements
    document.body.replaceChildren();
    document.head.replaceChildren();
    // Remove all uncesseray attributes roblox Provides
    AttributesRemover(document.body);
    AttributesRemover(document.head);
    new StdHeader().Init();
    // setTimeout(() => {
    //     console.clear();
    // }, 500);
});
