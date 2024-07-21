const dal = require("../services/auth");
const { getAuthors, getAuthorsById, addAuthors, putAuthors, patchAuthors, delAuthors }  = require('../services/authors.dal')
global.DEBUG = false;


jest.mock('../services/auth', () => ({
    query: jest.fn(),
}));

describe('Auth Functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getAuthors should return authors', async () => {
        const mockResult = { rows: [{ _id: 1, fn: 'John', ln: 'Doe' }] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await getAuthors();
        expect(result).toEqual(mockResult.rows);
    });

    test('getAuthors should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(getAuthors()).rejects.toThrow('Database error');
    });

    test('getAuthorsById should return author by ID', async () => {
        const mockResult = { rows: [{ _id: 1, fn: 'John', ln: 'Doe' }] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await getAuthorsById(1);
        expect(result).toEqual(mockResult.rows);
    });

    test('getAuthorsById should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(getAuthorsById(1)).rejects.toThrow('Database error');
    });

    test('addAuthors should add a new author', async () => {
        const mockResult = { rows: [] }; // Typically, INSERT returns an empty result
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await addAuthors('Jane', 'Doe');
        expect(result).toEqual(mockResult.rows);
    });

    test('addAuthors should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(addAuthors('Jane', 'Doe')).rejects.toThrow('Database error');
    });

    test('putAuthors should update an author', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await putAuthors(1, 'Jane', 'Doe');
        expect(result).toEqual(mockResult.rows);
    });

    test('putAuthors should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(putAuthors(1, 'Jane', 'Doe')).rejects.toThrow('Database error');
    });

    test('patchAuthors should update an author', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await patchAuthors(1, 'Jane', 'Doe');
        expect(result).toEqual(mockResult.rows);
    });

    test('patchAuthors should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(patchAuthors(1, 'Jane', 'Doe')).rejects.toThrow('Database error');
    });

    test('delAuthors should delete an author', async () => {
        const mockResult = { rows: [] };
        dal.query.mockImplementation((sql, params, callback) => callback(null, mockResult));
        
        const result = await delAuthors(1);
        expect(result).toEqual(mockResult.rows);
    });

    test('delAuthors should handle errors', async () => {
        const mockError = new Error('Database error');
        dal.query.mockImplementation((sql, params, callback) => callback(mockError, null));
        
        await expect(delAuthors(1)).rejects.toThrow('Database error');
    });
});


