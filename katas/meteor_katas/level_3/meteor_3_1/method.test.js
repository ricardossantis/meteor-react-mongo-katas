import './method.js';
import assert from 'assert';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    describe('publishRelatedDocuments', () => {
        it('publishes the related documents correctly', () => {
            // Define mock collections and insert some documents
            const MockCollection1 = new Meteor.Collection(null);
            const MockCollection2 = new Meteor.Collection(null);
            MockCollection1.insert({ name: 'Document 1', relatedId: 'abc' });
            MockCollection2.insert({ name: 'Document 2', relatedId: 'abc' });

            // Call the method and get the result
            const result = Meteor.call('publishRelatedDocuments', 'abc');

            // Check that the result includes documents from both collections
            assert.equal(result.length, 2);
            assert.equal(result[0].name, 'Document 1');
            assert.equal(result[1].name, 'Document 2');
        });
    });
}