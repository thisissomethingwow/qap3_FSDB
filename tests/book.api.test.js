const dal = require("../services/auth");
const { getBooks, getBooksById, addBooks, putBooks, patchBooks, delBooks }  = require('../services/books.dal')
global.DEBUG = false;


jest.mock('../services/auth', () => ({
    query: jest.fn(),
}));

describe('Auth Functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getBooks should return books', async () => {
        const mockResult = { rows: [{ _id: 1, title: 'dune', desc: 'sand' }] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await getBooks();
        expect(result).toEqual(mockResult.rows);
    });

    test('getBooks should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(getBooks()).rejects.toThrow('Database error');
    });

    test('getBooksById should return books by ID', async () => {
        const mockResult = { rows: [{ _id: 1, title: 'dune', desc: 'sand' }] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await getBooksById(1);
        expect(result).toEqual(mockResult.rows);
    });

    test('getBooksById should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(getBooksById(1)).rejects.toThrow('Database error');
    });

    test('addBooks should add a new book', async () => {
        const mockResult = { rows: [] }; // Typically, INSERT returns an empty result
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await addBooks('book', 'cool');
        expect(result).toEqual(mockResult.rows);
    });

    test('addBooks should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(addBooks('book', 'cool')).rejects.toThrow('Database error');
    });

    test('putBookss should update an book', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await putBooks(1, 'dune2', 'sand2');
        expect(result).toEqual(mockResult.rows);
    });

    test('putBooks should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(putBooks(1, 'Jane', 'Doe')).rejects.toThrow('Database error');
    });

    test('patchBooks should update an book', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await patchBooks(1, 'dune3', 'sand3');
        expect(result).toEqual(mockResult.rows);
    });

    test('patchBooks should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(patchBooks(1, 'dune4', 'sand4')).rejects.toThrow('Database error');
    });

    test('delBookss should delete an book', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await delBooks(1);
        expect(result).toEqual(mockResult.rows);
    });

    test('delBooks should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(delBooks(1)).rejects.toThrow('Database error');
    });
});


