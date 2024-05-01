# Task 1: Insert Document

In this task, you'll create a MongoDB query that inserts a document into a collection.

## Requirements

- The query should be part of a Meteor method named 'insertDocument'.
- The method should take one argument, the document to be inserted.
- The method should return the ID of the inserted document.
- If the argument is not an object, the method should throw an error.

## Testing

This task includes a test file, 'component.test.js'. To run the tests, use the following command:

```bash
meteor test --driver-package meteortesting:mocha --full-app