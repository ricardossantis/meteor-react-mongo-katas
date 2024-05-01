import { Meteor } from 'meteor/meteor';
import assert from 'assert';
import { MyCollection } from './method.js';

if (Meteor.isServer) {
    describe('insertDocument', () => {
        it('inserts a document into the collection', () => {
            // Prepare a document to insert
            const document = { text: 'Test document' };

            // Call the method and get the result (document ID)
            const documentId = Meteor.call('insertDocument', document);

            // Find the inserted document in the collection
            const insertedDocument = MyCollection.findOne(documentId);

            // Check that the inserted document is as expected
            assert.deepEqual(insertedDocument, { _id: documentId, ...document });
        });
    });
}