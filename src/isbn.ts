export function getISBNFromURL(): string | null {
    const url = window.location.href;
    return getISBN(url);
}

export function getISBNFromSelection(): string | null {
    const selection = window.getSelection();
    if (selection) {
        return getISBN(selection.toString());
    }
    return null;
}

function getISBN(text: string): string | null {
    const isbnPattern = /(97(8|9))?\d{9}(\d|X)/g;
    const matches = text.match(isbnPattern);
    return matches ? matches[0] : null;
}