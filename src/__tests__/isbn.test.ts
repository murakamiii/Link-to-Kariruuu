import { getISBNFromURL, getISBNFromSelection } from '../isbn';

describe('getISBNFromURL', () => {
    // mocking window.location.href
    Object.defineProperty(window, 'location', {
        value: {
            href: '',
        },
        writable: true,
    });

    test('should return ISBN when valid ISBN is in the URL', () => {
        window.location.href = 'https://example.com/book/9781234567890';
        const result = getISBNFromURL();
        expect(result).toBe('9781234567890');
      });
  
    test('should return null when no ISBN is in the URL', () => {
    window.location.href = 'https://example.com/book';
    const result = getISBNFromURL();
    expect(result).toBeNull();
    });
});

describe('getISBNFromSelection', () => {
    // mocking window.getSelection
    Object.defineProperty(window, 'getSelection', {
        value: () => {
            return {
                toString: () => {
                    return '9781234567890';
                },
            };
        },
        writable: true,
    });

    test('should return ISBN when valid ISBN is in the selection', () => {
        const result = getISBNFromSelection();
        expect(result).toBe('9781234567890');
    });

    test('should return ISBN when valid ISBN with hyphens is in the selection', () => {
        Object.defineProperty(window, 'getSelection', {
            value: () => {
                return {
                    toString: () => {
                        return '978-1234-5678-90';
                    },
                };
            },
            writable: true,
        });
        const result = getISBNFromSelection();
        expect(result).toBe('9781234567890');
    });

    test('should return null when no ISBN is in the selection', () => {
        // mocking window.getSelection
        Object.defineProperty(window, 'getSelection', {
            value: () => {
                return {
                    toString: () => {
                        return '';
                    },
                };
            },
            writable: true,
        });
        const result = getISBNFromSelection();
        expect(result).toBeNull();
    });
});