import { Mongo } from 'meteor/mongo';

// Create a new MongoDB collection
export const MyCollection = new Mongo.Collection('myCollection');

Meteor.methods({
    'insertDocument': function(document) {
        // Insert a document into the collection
        return MyCollection.insert(document);
    }
});