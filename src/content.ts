import { getISBNFromURL, getISBNFromSelection  } from './isbn';

const _isbn = getISBNFromSelection() ?? getISBNFromURL();
if (_isbn !== null) {
    const calilUrl = `https://calil.jp/book/${_isbn}`;
    window.open(calilUrl, '_blank');
} else {
    alert('ISBNが見つかりませんでした');
}