import userbase from "userbase-js";

const {
    openDatabase,
    getDatabases,
    insertItem,
    updateItem,
    deleteItem,
    putTransaction,
    uploadFile,
    getFile,
    shareDatabase,
    modifyDatabasePermissions
} = userbase;

openDatabase({
    changeHandler: console.log
});

getDatabases({});

insertItem({
    item: {}
});

updateItem({
    item: {},
    itemId: "abc"
});

deleteItem({
    itemId: "abc"
});

putTransaction({
    operations: []
});

uploadFile({
    itemId: "abc",
    file: new File(["test" as BlobPart], "test.txt")
});

getFile({
    fileId: "abc"
});

shareDatabase({
    username: 'mhxbe'
}) 

modifyDatabasePermissions({
    username: 'mhxbe'
})
