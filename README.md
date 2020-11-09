# userbase-database-types

## index.ts
10 userbase functions which requires at least **databaseName** or **databaseId**

```npm run tsc:userbase```

No type errors.

---

## suggestion.ts
1 example **insertItem** function with possible improved typing

```npm run tsc:suggestion```

> Argument of type '{ item: string; }' is not assignable to parameter of type '({ databaseId: string; } & { item: any; itemId?: string | undefined; }) | ({ databaseName: string; } & { item: any; itemId?: string | undefined; })'.
  Type '{ item: string; }' is not assignable to type '{ databaseName: string; } & { item: any; itemId?: string | undefined; }'.
    Property 'databaseName' is missing in type '{ item: string; }' but required in type '{ databaseName: string; }'.

Type error. Albeit vague.