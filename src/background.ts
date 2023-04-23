chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "link to Calil",
        title: "Calilで見る",
        contexts: ["page"],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    // get tabId as number, if undefined, alert and early return
    const tabId = tab?.id;
    if (typeof tabId !== "number") {
        alert("error in link to calil. the tabID is undefined");
        return;
    }
    
    if (info.menuItemId === "link to Calil") {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"],
        });
    }
});