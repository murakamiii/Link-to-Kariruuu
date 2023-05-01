function getISBNDromURL(): string | null {
    const isbnPattern = /(97(8|9))?\d{9}(\d|X)/g;
    const matches = location.href.match(isbnPattern);

    return matches ? matches[0] : null;
}

function getISBNFromSelection(): string | null {
    const selection = window.getSelection();
    if (selection) {
        const isbnPattern = /(97(8|9))?\d{9}(\d|X)/g;
        const matches = selection.toString().match(isbnPattern);
        return matches ? matches[0] : null;
    }
    return null;
}

const isbn = getISBNFromSelection() || getISBNDromURL();
if (isbn) {
    const calilUrl = `https://calil.jp/book/${isbn}`;
    window.open(calilUrl, '_blank');
} else {
    alert('ISBNが見つかりませんでした');
}