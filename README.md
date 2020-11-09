# userbase-database-types

```npm install```

## [index.ts](index.ts)
10 userbase functions which requires at least **databaseName** or **databaseId**
The functions in [index.ts](index.ts) don't have one of both parameters.

```npm run tsc:userbase```

No type errors.

---

## [suggestion.ts](suggestion.ts)
**insertItem** function with possible improved typing.
- 2 examples with correct parameters.
- 1 example without **databaseName** & **databaseId** throwing an error

```npm run tsc:suggestion```

> Argument of type '{ item: string; }' is not assignable to parameter of type '({ databaseId: string; } & { item: any; itemId?: string | undefined; }) | ({ databaseName: string; } & { item: any; itemId?: string | undefined; })'.
  Type '{ item: string; }' is not assignable to type '{ databaseName: string; } & { item: any; itemId?: string | undefined; }'.
    Property 'databaseName' is missing in type '{ item: string; }' but required in type '{ databaseName: string; }'.

Type error. Albeit vague.