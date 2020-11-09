type databaseNameOrId = ({ databaseId: string } | { databaseName: string });

export interface Userbase {
  insertItem(
    params: databaseNameOrId & { item: any; itemId?: string }
  ): Promise<void>;
}

const userbase: Userbase = {
  insertItem: (params) => {
    return new Promise((resolve) => resolve());
  },
};

// Passes type checking
userbase.insertItem({ databaseName: "cats", item: "hello" });

// Passes type checking
userbase.insertItem({ databaseId: "abc-123", item: "hello" });

// Fails type checking
userbase.insertItem({ item: "hello" });
