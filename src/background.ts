chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "link to Calil",
        title: "Calilで見る",
        contexts: ["page"],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "link to Calil") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"],
        });
    }
});