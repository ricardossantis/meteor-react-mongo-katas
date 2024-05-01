# Level 3: Publish Related Documents with publishComposite

In this task, you need to write a Meteor method that uses the `publishComposite` package to publish related documents from different collections.

## Task Description

1. Implement the `publishRelatedDocuments` method in `method.js`. This method should use the `publishComposite` package to publish related documents from different collections.

2. Write a test in `method.test.js` that checks if the `publishRelatedDocuments` method publishes the related documents correctly.

## Requirements

- The `publishRelatedDocuments` method should be a server-side method.
- The `publishRelatedDocuments` method should use the `publishComposite` package to publish related documents from different collections.
- The test should check if the `publishRelatedDocuments` method publishes the related documents correctly.

## How to Run the Test
```bash 
  npm test
```

## Resources

- [Meteor Documentation](https://docs.meteor.com/)
- [publishComposite Documentation](https://github.com/englue/meteor-publish-composite)
- [Meteor Testing Guide](https://guide.meteor.com/testing.html)

## Tips

- The `publishComposite` package allows you to publish a set of related documents from various collections using a reactive join. This is useful when you want to publish a document along with its related documents from different collections.
- The `publishComposite` function takes two arguments: the name of the publication and an options object. The options object should define the top level collection that you want to publish and any child collections.
- Each child collection should define a 'find' function that returns a MongoDB cursor. The 'find' function should take a document from the parent collection and find related documents in the child collection.
- You can also define 'children' for each child collection to publish related documents from other collections.