function getISBN(): string | null {
    const isbnPattern = /(97(8|9))?\d{9}(\d|X)/g;
    const bodyText = document.body.innerText;
    const matches = bodyText.match(isbnPattern);

    return matches ? matches[0] : null;
}

const isbn = getISBN();
if (isbn) {
    const calilUrl = `https://calil.jp/book/${isbn}`;
    window.open(calilUrl, '_blank');
} else {
    alert('ISBNが見つかりませんでした');
}