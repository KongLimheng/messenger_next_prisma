
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  hashedPassword: string | null
  createAt: Date
  updateAt: Date
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: number
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Conversation
 * 
 */
export type Conversation = {
  id: number
  createAt: Date
  lastMessageAt: Date
  name: string | null
  isGroup: boolean | null
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: number
  body: string | null
  image: string | null
  createAt: Date
}

/**
 * Model UserOnConversation
 * 
 */
export type UserOnConversation = {
  id: number
  conversationIds: number
  userIds: number
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.userOnConversation`: Exposes CRUD operations for the **UserOnConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnConversations
    * const userOnConversations = await prisma.userOnConversation.findMany()
    * ```
    */
  get userOnConversation(): Prisma.UserOnConversationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Conversation: 'Conversation',
    Message: 'Message',
    UserOnConversation: 'UserOnConversation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    converstions: number
    seenMessages: number
    accounts: number
    messages: number
  }

  export type UserCountOutputTypeSelect = {
    converstions?: boolean
    seenMessages?: boolean
    accounts?: boolean
    messages?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountCountOutputType
   */


  export type AccountCountOutputType = {
    user: number
  }

  export type AccountCountOutputTypeSelect = {
    user?: boolean
  }

  export type AccountCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountCountOutputTypeArgs)
    ? AccountCountOutputType 
    : S extends { select: any } & (AccountCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountCountOutputType ? AccountCountOutputType[P] : never
  } 
      : AccountCountOutputType




  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect | null
  }



  /**
   * Count Type ConversationCountOutputType
   */


  export type ConversationCountOutputType = {
    messages: number
    users: number
  }

  export type ConversationCountOutputTypeSelect = {
    messages?: boolean
    users?: boolean
  }

  export type ConversationCountOutputTypeGetPayload<S extends boolean | null | undefined | ConversationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ConversationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ConversationCountOutputTypeArgs)
    ? ConversationCountOutputType 
    : S extends { select: any } & (ConversationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ConversationCountOutputType ? ConversationCountOutputType[P] : never
  } 
      : ConversationCountOutputType




  // Custom InputTypes

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect | null
  }



  /**
   * Count Type MessageCountOutputType
   */


  export type MessageCountOutputType = {
    seen: number
    conversation: number
    sender: number
  }

  export type MessageCountOutputTypeSelect = {
    seen?: boolean
    conversation?: boolean
    sender?: boolean
  }

  export type MessageCountOutputTypeGetPayload<S extends boolean | null | undefined | MessageCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MessageCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MessageCountOutputTypeArgs)
    ? MessageCountOutputType 
    : S extends { select: any } & (MessageCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MessageCountOutputType ? MessageCountOutputType[P] : never
  } 
      : MessageCountOutputType




  // Custom InputTypes

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    hashedPassword: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    hashedPassword: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    hashedPassword: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    hashedPassword?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    hashedPassword?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    hashedPassword?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    hashedPassword: string | null
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    hashedPassword?: boolean
    createAt?: boolean
    updateAt?: boolean
    converstions?: boolean | User$converstionsArgs
    seenMessages?: boolean | User$seenMessagesArgs
    accounts?: boolean | User$accountsArgs
    messages?: boolean | User$messagesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    converstions?: boolean | User$converstionsArgs
    seenMessages?: boolean | User$seenMessagesArgs
    accounts?: boolean | User$accountsArgs
    messages?: boolean | User$messagesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'converstions' ? Array < UserOnConversationGetPayload<S['include'][P]>>  :
        P extends 'seenMessages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'converstions' ? Array < UserOnConversationGetPayload<S['select'][P]>>  :
        P extends 'seenMessages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    converstions<T extends User$converstionsArgs= {}>(args?: Subset<T, User$converstionsArgs>): Prisma.PrismaPromise<Array<UserOnConversationGetPayload<T>>| Null>;

    seenMessages<T extends User$seenMessagesArgs= {}>(args?: Subset<T, User$seenMessagesArgs>): Prisma.PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    accounts<T extends User$accountsArgs= {}>(args?: Subset<T, User$accountsArgs>): Prisma.PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    messages<T extends User$messagesArgs= {}>(args?: Subset<T, User$messagesArgs>): Prisma.PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.converstions
   */
  export type User$converstionsArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    where?: UserOnConversationWhereInput
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    cursor?: UserOnConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnConversationScalarFieldEnum>
  }


  /**
   * User.seenMessages
   */
  export type User$seenMessagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.messages
   */
  export type User$messagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | Account$userArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }


  export type AccountInclude = {
    user?: boolean | Account$userArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Account$userArgs= {}>(args?: Subset<T, Account$userArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account.user
   */
  export type Account$userArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
  }



  /**
   * Model Conversation
   */


  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    createAt: Date | null
    lastMessageAt: Date | null
    name: string | null
    isGroup: boolean | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    createAt: Date | null
    lastMessageAt: Date | null
    name: string | null
    isGroup: boolean | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    createAt: number
    lastMessageAt: number
    name: number
    isGroup: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    createAt?: true
    lastMessageAt?: true
    name?: true
    isGroup?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    createAt?: true
    lastMessageAt?: true
    name?: true
    isGroup?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    createAt?: true
    lastMessageAt?: true
    name?: true
    isGroup?: true
    _all?: true
  }

  export type ConversationAggregateArgs = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Enumerable<ConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs = {
    where?: ConversationWhereInput
    orderBy?: Enumerable<ConversationOrderByWithAggregationInput>
    by: ConversationScalarFieldEnum[]
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }


  export type ConversationGroupByOutputType = {
    id: number
    createAt: Date
    lastMessageAt: Date
    name: string | null
    isGroup: boolean | null
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect = {
    id?: boolean
    createAt?: boolean
    lastMessageAt?: boolean
    name?: boolean
    isGroup?: boolean
    messages?: boolean | Conversation$messagesArgs
    users?: boolean | Conversation$usersArgs
    _count?: boolean | ConversationCountOutputTypeArgs
  }


  export type ConversationInclude = {
    messages?: boolean | Conversation$messagesArgs
    users?: boolean | Conversation$usersArgs
    _count?: boolean | ConversationCountOutputTypeArgs
  }

  export type ConversationGetPayload<S extends boolean | null | undefined | ConversationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Conversation :
    S extends undefined ? never :
    S extends { include: any } & (ConversationArgs | ConversationFindManyArgs)
    ? Conversation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < UserOnConversationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ConversationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ConversationArgs | ConversationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < UserOnConversationGetPayload<S['select'][P]>>  :
        P extends '_count' ? ConversationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Conversation ? Conversation[P] : never
  } 
      : Conversation


  type ConversationCountArgs = 
    Omit<ConversationFindManyArgs, 'select' | 'include'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ConversationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Conversation'> extends True ? Prisma__ConversationClient<ConversationGetPayload<T>> : Prisma__ConversationClient<ConversationGetPayload<T> | null, null>

    /**
     * Find one Conversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ConversationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Conversation'> extends True ? Prisma__ConversationClient<ConversationGetPayload<T>> : Prisma__ConversationClient<ConversationGetPayload<T> | null, null>

    /**
     * Find the first Conversation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs>(
      args?: SelectSubset<T, ConversationFindManyArgs>
    ): Prisma.PrismaPromise<Array<ConversationGetPayload<T>>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs>(
      args: SelectSubset<T, ConversationCreateArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Create many Conversations.
     *     @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversation = await prisma.conversation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationCreateManyArgs>(
      args?: SelectSubset<T, ConversationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs>(
      args: SelectSubset<T, ConversationDeleteArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs>(
      args: SelectSubset<T, ConversationUpdateArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs>(
      args?: SelectSubset<T, ConversationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs>(
      args: SelectSubset<T, ConversationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs>(
      args: SelectSubset<T, ConversationUpsertArgs>
    ): Prisma__ConversationClient<ConversationGetPayload<T>>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConversationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    messages<T extends Conversation$messagesArgs= {}>(args?: Subset<T, Conversation$messagesArgs>): Prisma.PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    users<T extends Conversation$usersArgs= {}>(args?: Subset<T, Conversation$usersArgs>): Prisma.PrismaPromise<Array<UserOnConversationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Conversation base type for findUnique actions
   */
  export type ConversationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUnique
   */
  export interface ConversationFindUniqueArgs extends ConversationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation base type for findFirst actions
   */
  export type ConversationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Enumerable<ConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: Enumerable<ConversationScalarFieldEnum>
  }

  /**
   * Conversation findFirst
   */
  export interface ConversationFindFirstArgs extends ConversationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Enumerable<ConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: Enumerable<ConversationScalarFieldEnum>
  }


  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: Enumerable<ConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: Enumerable<ConversationScalarFieldEnum>
  }


  /**
   * Conversation create
   */
  export type ConversationCreateArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }


  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs = {
    /**
     * The data used to create many Conversations.
     */
    data: Enumerable<ConversationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }


  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Conversation.users
   */
  export type Conversation$usersArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    where?: UserOnConversationWhereInput
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    cursor?: UserOnConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnConversationScalarFieldEnum>
  }


  /**
   * Conversation without action
   */
  export type ConversationArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    body: string | null
    image: string | null
    createAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    body: string | null
    image: string | null
    createAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    body: number
    image: number
    createAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    body?: true
    image?: true
    createAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    body?: true
    image?: true
    createAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    body?: true
    image?: true
    createAt?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: MessageScalarFieldEnum[]
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: number
    body: string | null
    image: string | null
    createAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    body?: boolean
    image?: boolean
    createAt?: boolean
    seen?: boolean | Message$seenArgs
    conversation?: boolean | Message$conversationArgs
    sender?: boolean | Message$senderArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }


  export type MessageInclude = {
    seen?: boolean | Message$seenArgs
    conversation?: boolean | Message$conversationArgs
    sender?: boolean | Message$senderArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }

  export type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Message :
    S extends undefined ? never :
    S extends { include: any } & (MessageArgs | MessageFindManyArgs)
    ? Message  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'seen' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'conversation' ? Array < ConversationGetPayload<S['include'][P]>>  :
        P extends 'sender' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? MessageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageArgs | MessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'seen' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'conversation' ? Array < ConversationGetPayload<S['select'][P]>>  :
        P extends 'sender' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? MessageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
      : Message


  type MessageCountArgs = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<MessageGetPayload<T>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    seen<T extends Message$seenArgs= {}>(args?: Subset<T, Message$seenArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    conversation<T extends Message$conversationArgs= {}>(args?: Subset<T, Message$conversationArgs>): Prisma.PrismaPromise<Array<ConversationGetPayload<T>>| Null>;

    sender<T extends Message$senderArgs= {}>(args?: Subset<T, Message$senderArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     */
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message.seen
   */
  export type Message$seenArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Message.conversation
   */
  export type Message$conversationArgs = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude | null
    where?: ConversationWhereInput
    orderBy?: Enumerable<ConversationOrderByWithRelationInput>
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ConversationScalarFieldEnum>
  }


  /**
   * Message.sender
   */
  export type Message$senderArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
  }



  /**
   * Model UserOnConversation
   */


  export type AggregateUserOnConversation = {
    _count: UserOnConversationCountAggregateOutputType | null
    _avg: UserOnConversationAvgAggregateOutputType | null
    _sum: UserOnConversationSumAggregateOutputType | null
    _min: UserOnConversationMinAggregateOutputType | null
    _max: UserOnConversationMaxAggregateOutputType | null
  }

  export type UserOnConversationAvgAggregateOutputType = {
    id: number | null
    conversationIds: number | null
    userIds: number | null
  }

  export type UserOnConversationSumAggregateOutputType = {
    id: number | null
    conversationIds: number | null
    userIds: number | null
  }

  export type UserOnConversationMinAggregateOutputType = {
    id: number | null
    conversationIds: number | null
    userIds: number | null
    createdAt: Date | null
  }

  export type UserOnConversationMaxAggregateOutputType = {
    id: number | null
    conversationIds: number | null
    userIds: number | null
    createdAt: Date | null
  }

  export type UserOnConversationCountAggregateOutputType = {
    id: number
    conversationIds: number
    userIds: number
    createdAt: number
    _all: number
  }


  export type UserOnConversationAvgAggregateInputType = {
    id?: true
    conversationIds?: true
    userIds?: true
  }

  export type UserOnConversationSumAggregateInputType = {
    id?: true
    conversationIds?: true
    userIds?: true
  }

  export type UserOnConversationMinAggregateInputType = {
    id?: true
    conversationIds?: true
    userIds?: true
    createdAt?: true
  }

  export type UserOnConversationMaxAggregateInputType = {
    id?: true
    conversationIds?: true
    userIds?: true
    createdAt?: true
  }

  export type UserOnConversationCountAggregateInputType = {
    id?: true
    conversationIds?: true
    userIds?: true
    createdAt?: true
    _all?: true
  }

  export type UserOnConversationAggregateArgs = {
    /**
     * Filter which UserOnConversation to aggregate.
     */
    where?: UserOnConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnConversations to fetch.
     */
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnConversations
    **/
    _count?: true | UserOnConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnConversationMaxAggregateInputType
  }

  export type GetUserOnConversationAggregateType<T extends UserOnConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnConversation[P]>
      : GetScalarType<T[P], AggregateUserOnConversation[P]>
  }




  export type UserOnConversationGroupByArgs = {
    where?: UserOnConversationWhereInput
    orderBy?: Enumerable<UserOnConversationOrderByWithAggregationInput>
    by: UserOnConversationScalarFieldEnum[]
    having?: UserOnConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnConversationCountAggregateInputType | true
    _avg?: UserOnConversationAvgAggregateInputType
    _sum?: UserOnConversationSumAggregateInputType
    _min?: UserOnConversationMinAggregateInputType
    _max?: UserOnConversationMaxAggregateInputType
  }


  export type UserOnConversationGroupByOutputType = {
    id: number
    conversationIds: number
    userIds: number
    createdAt: Date
    _count: UserOnConversationCountAggregateOutputType | null
    _avg: UserOnConversationAvgAggregateOutputType | null
    _sum: UserOnConversationSumAggregateOutputType | null
    _min: UserOnConversationMinAggregateOutputType | null
    _max: UserOnConversationMaxAggregateOutputType | null
  }

  type GetUserOnConversationGroupByPayload<T extends UserOnConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserOnConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnConversationGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnConversationGroupByOutputType[P]>
        }
      >
    >


  export type UserOnConversationSelect = {
    id?: boolean
    conversationIds?: boolean
    userIds?: boolean
    createdAt?: boolean
    conversations?: boolean | ConversationArgs
    users?: boolean | UserArgs
  }


  export type UserOnConversationInclude = {
    conversations?: boolean | ConversationArgs
    users?: boolean | UserArgs
  }

  export type UserOnConversationGetPayload<S extends boolean | null | undefined | UserOnConversationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserOnConversation :
    S extends undefined ? never :
    S extends { include: any } & (UserOnConversationArgs | UserOnConversationFindManyArgs)
    ? UserOnConversation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'conversations' ? ConversationGetPayload<S['include'][P]> :
        P extends 'users' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserOnConversationArgs | UserOnConversationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'conversations' ? ConversationGetPayload<S['select'][P]> :
        P extends 'users' ? UserGetPayload<S['select'][P]> :  P extends keyof UserOnConversation ? UserOnConversation[P] : never
  } 
      : UserOnConversation


  type UserOnConversationCountArgs = 
    Omit<UserOnConversationFindManyArgs, 'select' | 'include'> & {
      select?: UserOnConversationCountAggregateInputType | true
    }

  export interface UserOnConversationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserOnConversation that matches the filter.
     * @param {UserOnConversationFindUniqueArgs} args - Arguments to find a UserOnConversation
     * @example
     * // Get one UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserOnConversationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserOnConversationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserOnConversation'> extends True ? Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>> : Prisma__UserOnConversationClient<UserOnConversationGetPayload<T> | null, null>

    /**
     * Find one UserOnConversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserOnConversationFindUniqueOrThrowArgs} args - Arguments to find a UserOnConversation
     * @example
     * // Get one UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserOnConversationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserOnConversationFindUniqueOrThrowArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Find the first UserOnConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationFindFirstArgs} args - Arguments to find a UserOnConversation
     * @example
     * // Get one UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserOnConversationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserOnConversationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserOnConversation'> extends True ? Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>> : Prisma__UserOnConversationClient<UserOnConversationGetPayload<T> | null, null>

    /**
     * Find the first UserOnConversation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationFindFirstOrThrowArgs} args - Arguments to find a UserOnConversation
     * @example
     * // Get one UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserOnConversationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserOnConversationFindFirstOrThrowArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Find zero or more UserOnConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnConversations
     * const userOnConversations = await prisma.userOnConversation.findMany()
     * 
     * // Get first 10 UserOnConversations
     * const userOnConversations = await prisma.userOnConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOnConversationWithIdOnly = await prisma.userOnConversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserOnConversationFindManyArgs>(
      args?: SelectSubset<T, UserOnConversationFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserOnConversationGetPayload<T>>>

    /**
     * Create a UserOnConversation.
     * @param {UserOnConversationCreateArgs} args - Arguments to create a UserOnConversation.
     * @example
     * // Create one UserOnConversation
     * const UserOnConversation = await prisma.userOnConversation.create({
     *   data: {
     *     // ... data to create a UserOnConversation
     *   }
     * })
     * 
    **/
    create<T extends UserOnConversationCreateArgs>(
      args: SelectSubset<T, UserOnConversationCreateArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Create many UserOnConversations.
     *     @param {UserOnConversationCreateManyArgs} args - Arguments to create many UserOnConversations.
     *     @example
     *     // Create many UserOnConversations
     *     const userOnConversation = await prisma.userOnConversation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserOnConversationCreateManyArgs>(
      args?: SelectSubset<T, UserOnConversationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOnConversation.
     * @param {UserOnConversationDeleteArgs} args - Arguments to delete one UserOnConversation.
     * @example
     * // Delete one UserOnConversation
     * const UserOnConversation = await prisma.userOnConversation.delete({
     *   where: {
     *     // ... filter to delete one UserOnConversation
     *   }
     * })
     * 
    **/
    delete<T extends UserOnConversationDeleteArgs>(
      args: SelectSubset<T, UserOnConversationDeleteArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Update one UserOnConversation.
     * @param {UserOnConversationUpdateArgs} args - Arguments to update one UserOnConversation.
     * @example
     * // Update one UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserOnConversationUpdateArgs>(
      args: SelectSubset<T, UserOnConversationUpdateArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Delete zero or more UserOnConversations.
     * @param {UserOnConversationDeleteManyArgs} args - Arguments to filter UserOnConversations to delete.
     * @example
     * // Delete a few UserOnConversations
     * const { count } = await prisma.userOnConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserOnConversationDeleteManyArgs>(
      args?: SelectSubset<T, UserOnConversationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnConversations
     * const userOnConversation = await prisma.userOnConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserOnConversationUpdateManyArgs>(
      args: SelectSubset<T, UserOnConversationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnConversation.
     * @param {UserOnConversationUpsertArgs} args - Arguments to update or create a UserOnConversation.
     * @example
     * // Update or create a UserOnConversation
     * const userOnConversation = await prisma.userOnConversation.upsert({
     *   create: {
     *     // ... data to create a UserOnConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnConversation we want to update
     *   }
     * })
    **/
    upsert<T extends UserOnConversationUpsertArgs>(
      args: SelectSubset<T, UserOnConversationUpsertArgs>
    ): Prisma__UserOnConversationClient<UserOnConversationGetPayload<T>>

    /**
     * Count the number of UserOnConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationCountArgs} args - Arguments to filter UserOnConversations to count.
     * @example
     * // Count the number of UserOnConversations
     * const count = await prisma.userOnConversation.count({
     *   where: {
     *     // ... the filter for the UserOnConversations we want to count
     *   }
     * })
    **/
    count<T extends UserOnConversationCountArgs>(
      args?: Subset<T, UserOnConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnConversationAggregateArgs>(args: Subset<T, UserOnConversationAggregateArgs>): Prisma.PrismaPromise<GetUserOnConversationAggregateType<T>>

    /**
     * Group by UserOnConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnConversationGroupByArgs['orderBy'] }
        : { orderBy?: UserOnConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserOnConversationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    conversations<T extends ConversationArgs= {}>(args?: Subset<T, ConversationArgs>): Prisma__ConversationClient<ConversationGetPayload<T> | Null>;

    users<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserOnConversation base type for findUnique actions
   */
  export type UserOnConversationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter, which UserOnConversation to fetch.
     */
    where: UserOnConversationWhereUniqueInput
  }

  /**
   * UserOnConversation findUnique
   */
  export interface UserOnConversationFindUniqueArgs extends UserOnConversationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnConversation findUniqueOrThrow
   */
  export type UserOnConversationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter, which UserOnConversation to fetch.
     */
    where: UserOnConversationWhereUniqueInput
  }


  /**
   * UserOnConversation base type for findFirst actions
   */
  export type UserOnConversationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter, which UserOnConversation to fetch.
     */
    where?: UserOnConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnConversations to fetch.
     */
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnConversations.
     */
    cursor?: UserOnConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnConversations.
     */
    distinct?: Enumerable<UserOnConversationScalarFieldEnum>
  }

  /**
   * UserOnConversation findFirst
   */
  export interface UserOnConversationFindFirstArgs extends UserOnConversationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnConversation findFirstOrThrow
   */
  export type UserOnConversationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter, which UserOnConversation to fetch.
     */
    where?: UserOnConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnConversations to fetch.
     */
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnConversations.
     */
    cursor?: UserOnConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnConversations.
     */
    distinct?: Enumerable<UserOnConversationScalarFieldEnum>
  }


  /**
   * UserOnConversation findMany
   */
  export type UserOnConversationFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter, which UserOnConversations to fetch.
     */
    where?: UserOnConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnConversations to fetch.
     */
    orderBy?: Enumerable<UserOnConversationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnConversations.
     */
    cursor?: UserOnConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnConversations.
     */
    skip?: number
    distinct?: Enumerable<UserOnConversationScalarFieldEnum>
  }


  /**
   * UserOnConversation create
   */
  export type UserOnConversationCreateArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * The data needed to create a UserOnConversation.
     */
    data: XOR<UserOnConversationCreateInput, UserOnConversationUncheckedCreateInput>
  }


  /**
   * UserOnConversation createMany
   */
  export type UserOnConversationCreateManyArgs = {
    /**
     * The data used to create many UserOnConversations.
     */
    data: Enumerable<UserOnConversationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserOnConversation update
   */
  export type UserOnConversationUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * The data needed to update a UserOnConversation.
     */
    data: XOR<UserOnConversationUpdateInput, UserOnConversationUncheckedUpdateInput>
    /**
     * Choose, which UserOnConversation to update.
     */
    where: UserOnConversationWhereUniqueInput
  }


  /**
   * UserOnConversation updateMany
   */
  export type UserOnConversationUpdateManyArgs = {
    /**
     * The data used to update UserOnConversations.
     */
    data: XOR<UserOnConversationUpdateManyMutationInput, UserOnConversationUncheckedUpdateManyInput>
    /**
     * Filter which UserOnConversations to update
     */
    where?: UserOnConversationWhereInput
  }


  /**
   * UserOnConversation upsert
   */
  export type UserOnConversationUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * The filter to search for the UserOnConversation to update in case it exists.
     */
    where: UserOnConversationWhereUniqueInput
    /**
     * In case the UserOnConversation found by the `where` argument doesn't exist, create a new UserOnConversation with this data.
     */
    create: XOR<UserOnConversationCreateInput, UserOnConversationUncheckedCreateInput>
    /**
     * In case the UserOnConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnConversationUpdateInput, UserOnConversationUncheckedUpdateInput>
  }


  /**
   * UserOnConversation delete
   */
  export type UserOnConversationDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
    /**
     * Filter which UserOnConversation to delete.
     */
    where: UserOnConversationWhereUniqueInput
  }


  /**
   * UserOnConversation deleteMany
   */
  export type UserOnConversationDeleteManyArgs = {
    /**
     * Filter which UserOnConversations to delete
     */
    where?: UserOnConversationWhereInput
  }


  /**
   * UserOnConversation without action
   */
  export type UserOnConversationArgs = {
    /**
     * Select specific fields to fetch from the UserOnConversation
     */
    select?: UserOnConversationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnConversationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    lastMessageAt: 'lastMessageAt',
    name: 'name',
    isGroup: 'isGroup'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    body: 'body',
    image: 'image',
    createAt: 'createAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOnConversationScalarFieldEnum: {
    id: 'id',
    conversationIds: 'conversationIds',
    userIds: 'userIds',
    createdAt: 'createdAt'
  };

  export type UserOnConversationScalarFieldEnum = (typeof UserOnConversationScalarFieldEnum)[keyof typeof UserOnConversationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    hashedPassword: 'hashedPassword',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    hashedPassword?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    converstions?: UserOnConversationListRelationFilter
    seenMessages?: MessageListRelationFilter
    accounts?: AccountListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    converstions?: UserOnConversationOrderByRelationAggregateInput
    seenMessages?: MessageOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    hashedPassword?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: UserListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = {
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type ConversationWhereInput = {
    AND?: Enumerable<ConversationWhereInput>
    OR?: Enumerable<ConversationWhereInput>
    NOT?: Enumerable<ConversationWhereInput>
    id?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    lastMessageAt?: DateTimeFilter | Date | string
    name?: StringNullableFilter | string | null
    isGroup?: BoolNullableFilter | boolean | null
    messages?: MessageListRelationFilter
    users?: UserOnConversationListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    lastMessageAt?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    users?: UserOnConversationOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = {
    id?: number
  }

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    lastMessageAt?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConversationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConversationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConversationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    lastMessageAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringNullableWithAggregatesFilter | string | null
    isGroup?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: IntFilter | number
    body?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    seen?: UserListRelationFilter
    conversation?: ConversationListRelationFilter
    sender?: UserListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
    seen?: UserOrderByRelationAggregateInput
    conversation?: ConversationOrderByRelationAggregateInput
    sender?: UserOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = {
    id?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    body?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserOnConversationWhereInput = {
    AND?: Enumerable<UserOnConversationWhereInput>
    OR?: Enumerable<UserOnConversationWhereInput>
    NOT?: Enumerable<UserOnConversationWhereInput>
    id?: IntFilter | number
    conversationIds?: IntFilter | number
    userIds?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    conversations?: XOR<ConversationRelationFilter, ConversationWhereInput>
    users?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserOnConversationOrderByWithRelationInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
    createdAt?: SortOrder
    conversations?: ConversationOrderByWithRelationInput
    users?: UserOrderByWithRelationInput
  }

  export type UserOnConversationWhereUniqueInput = {
    id?: number
  }

  export type UserOnConversationOrderByWithAggregationInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
    createdAt?: SortOrder
    _count?: UserOnConversationCountOrderByAggregateInput
    _avg?: UserOnConversationAvgOrderByAggregateInput
    _max?: UserOnConversationMaxOrderByAggregateInput
    _min?: UserOnConversationMinOrderByAggregateInput
    _sum?: UserOnConversationSumOrderByAggregateInput
  }

  export type UserOnConversationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserOnConversationScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserOnConversationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserOnConversationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    conversationIds?: IntWithAggregatesFilter | number
    userIds?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationCreateNestedManyWithoutUsersInput
    seenMessages?: MessageCreateNestedManyWithoutSeenInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationUncheckedCreateNestedManyWithoutUsersInput
    seenMessages?: MessageUncheckedCreateNestedManyWithoutSeenInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUpdateManyWithoutSeenNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUncheckedUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUncheckedUpdateManyWithoutSeenNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user?: UserCreateNestedManyWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user?: UserUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    messages?: MessageCreateNestedManyWithoutConversationInput
    users?: UserOnConversationCreateNestedManyWithoutConversationsInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    users?: UserOnConversationUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type ConversationUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    messages?: MessageUpdateManyWithoutConversationNestedInput
    users?: UserOnConversationUpdateManyWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    users?: UserOnConversationUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
  }

  export type ConversationUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MessageCreateInput = {
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserCreateNestedManyWithoutSeenMessagesInput
    conversation?: ConversationCreateNestedManyWithoutMessagesInput
    sender?: UserCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserUncheckedCreateNestedManyWithoutSeenMessagesInput
    conversation?: ConversationUncheckedCreateNestedManyWithoutMessagesInput
    sender?: UserUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageUpdateInput = {
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUpdateManyWithoutSeenMessagesNestedInput
    conversation?: ConversationUpdateManyWithoutMessagesNestedInput
    sender?: UserUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUncheckedUpdateManyWithoutSeenMessagesNestedInput
    conversation?: ConversationUncheckedUpdateManyWithoutMessagesNestedInput
    sender?: UserUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    body?: string | null
    image?: string | null
    createAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationCreateInput = {
    createdAt?: Date | string
    conversations: ConversationCreateNestedOneWithoutUsersInput
    users: UserCreateNestedOneWithoutConverstionsInput
  }

  export type UserOnConversationUncheckedCreateInput = {
    id?: number
    conversationIds: number
    userIds: number
    createdAt?: Date | string
  }

  export type UserOnConversationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateOneRequiredWithoutUsersNestedInput
    users?: UserUpdateOneRequiredWithoutConverstionsNestedInput
  }

  export type UserOnConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationIds?: IntFieldUpdateOperationsInput | number
    userIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationCreateManyInput = {
    id?: number
    conversationIds: number
    userIds: number
    createdAt?: Date | string
  }

  export type UserOnConversationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationIds?: IntFieldUpdateOperationsInput | number
    userIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserOnConversationListRelationFilter = {
    every?: UserOnConversationWhereInput
    some?: UserOnConversationWhereInput
    none?: UserOnConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserOnConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    hashedPassword?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    lastMessageAt?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    lastMessageAt?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    lastMessageAt?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserOnConversationCountOrderByAggregateInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
    createdAt?: SortOrder
  }

  export type UserOnConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
  }

  export type UserOnConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
    createdAt?: SortOrder
  }

  export type UserOnConversationMinOrderByAggregateInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
    createdAt?: SortOrder
  }

  export type UserOnConversationSumOrderByAggregateInput = {
    id?: SortOrder
    conversationIds?: SortOrder
    userIds?: SortOrder
  }

  export type UserOnConversationCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutUsersInput>, Enumerable<UserOnConversationUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutUsersInput>
    createMany?: UserOnConversationCreateManyUsersInputEnvelope
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutSeenInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSeenInput>, Enumerable<MessageUncheckedCreateWithoutSeenInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSeenInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserOnConversationUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutUsersInput>, Enumerable<UserOnConversationUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutUsersInput>
    createMany?: UserOnConversationCreateManyUsersInputEnvelope
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutSeenInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSeenInput>, Enumerable<MessageUncheckedCreateWithoutSeenInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSeenInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserOnConversationUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutUsersInput>, Enumerable<UserOnConversationUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserOnConversationUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: UserOnConversationCreateManyUsersInputEnvelope
    set?: Enumerable<UserOnConversationWhereUniqueInput>
    disconnect?: Enumerable<UserOnConversationWhereUniqueInput>
    delete?: Enumerable<UserOnConversationWhereUniqueInput>
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
    update?: Enumerable<UserOnConversationUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserOnConversationUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserOnConversationScalarWhereInput>
  }

  export type MessageUpdateManyWithoutSeenNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSeenInput>, Enumerable<MessageUncheckedCreateWithoutSeenInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSeenInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSeenInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSeenInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSeenInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserOnConversationUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutUsersInput>, Enumerable<UserOnConversationUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserOnConversationUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: UserOnConversationCreateManyUsersInputEnvelope
    set?: Enumerable<UserOnConversationWhereUniqueInput>
    disconnect?: Enumerable<UserOnConversationWhereUniqueInput>
    delete?: Enumerable<UserOnConversationWhereUniqueInput>
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
    update?: Enumerable<UserOnConversationUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserOnConversationUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserOnConversationScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutSeenNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSeenInput>, Enumerable<MessageUncheckedCreateWithoutSeenInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSeenInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSeenInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSeenInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSeenInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAccountsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAccountsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<Enumerable<MessageCreateWithoutConversationInput>, Enumerable<MessageUncheckedCreateWithoutConversationInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutConversationInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserOnConversationCreateNestedManyWithoutConversationsInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutConversationsInput>, Enumerable<UserOnConversationUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutConversationsInput>
    createMany?: UserOnConversationCreateManyConversationsInputEnvelope
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<Enumerable<MessageCreateWithoutConversationInput>, Enumerable<MessageUncheckedCreateWithoutConversationInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutConversationInput>
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserOnConversationUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutConversationsInput>, Enumerable<UserOnConversationUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutConversationsInput>
    createMany?: UserOnConversationCreateManyConversationsInputEnvelope
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutConversationInput>, Enumerable<MessageUncheckedCreateWithoutConversationInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutConversationInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutConversationInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutConversationInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutConversationInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type UserOnConversationUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutConversationsInput>, Enumerable<UserOnConversationUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutConversationsInput>
    upsert?: Enumerable<UserOnConversationUpsertWithWhereUniqueWithoutConversationsInput>
    createMany?: UserOnConversationCreateManyConversationsInputEnvelope
    set?: Enumerable<UserOnConversationWhereUniqueInput>
    disconnect?: Enumerable<UserOnConversationWhereUniqueInput>
    delete?: Enumerable<UserOnConversationWhereUniqueInput>
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
    update?: Enumerable<UserOnConversationUpdateWithWhereUniqueWithoutConversationsInput>
    updateMany?: Enumerable<UserOnConversationUpdateManyWithWhereWithoutConversationsInput>
    deleteMany?: Enumerable<UserOnConversationScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutConversationInput>, Enumerable<MessageUncheckedCreateWithoutConversationInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutConversationInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutConversationInput>
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutConversationInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutConversationInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type UserOnConversationUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<Enumerable<UserOnConversationCreateWithoutConversationsInput>, Enumerable<UserOnConversationUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<UserOnConversationCreateOrConnectWithoutConversationsInput>
    upsert?: Enumerable<UserOnConversationUpsertWithWhereUniqueWithoutConversationsInput>
    createMany?: UserOnConversationCreateManyConversationsInputEnvelope
    set?: Enumerable<UserOnConversationWhereUniqueInput>
    disconnect?: Enumerable<UserOnConversationWhereUniqueInput>
    delete?: Enumerable<UserOnConversationWhereUniqueInput>
    connect?: Enumerable<UserOnConversationWhereUniqueInput>
    update?: Enumerable<UserOnConversationUpdateWithWhereUniqueWithoutConversationsInput>
    updateMany?: Enumerable<UserOnConversationUpdateManyWithWhereWithoutConversationsInput>
    deleteMany?: Enumerable<UserOnConversationScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutSeenMessagesInput = {
    create?: XOR<Enumerable<UserCreateWithoutSeenMessagesInput>, Enumerable<UserUncheckedCreateWithoutSeenMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSeenMessagesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ConversationCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<ConversationCreateWithoutMessagesInput>, Enumerable<ConversationUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<ConversationCreateOrConnectWithoutMessagesInput>
    connect?: Enumerable<ConversationWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<UserCreateWithoutMessagesInput>, Enumerable<UserUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMessagesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutSeenMessagesInput = {
    create?: XOR<Enumerable<UserCreateWithoutSeenMessagesInput>, Enumerable<UserUncheckedCreateWithoutSeenMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSeenMessagesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ConversationUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<ConversationCreateWithoutMessagesInput>, Enumerable<ConversationUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<ConversationCreateOrConnectWithoutMessagesInput>
    connect?: Enumerable<ConversationWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<Enumerable<UserCreateWithoutMessagesInput>, Enumerable<UserUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMessagesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutSeenMessagesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSeenMessagesInput>, Enumerable<UserUncheckedCreateWithoutSeenMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSeenMessagesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSeenMessagesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSeenMessagesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSeenMessagesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ConversationUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<ConversationCreateWithoutMessagesInput>, Enumerable<ConversationUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<ConversationCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<ConversationUpsertWithWhereUniqueWithoutMessagesInput>
    set?: Enumerable<ConversationWhereUniqueInput>
    disconnect?: Enumerable<ConversationWhereUniqueInput>
    delete?: Enumerable<ConversationWhereUniqueInput>
    connect?: Enumerable<ConversationWhereUniqueInput>
    update?: Enumerable<ConversationUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<ConversationUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<ConversationScalarWhereInput>
  }

  export type UserUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutMessagesInput>, Enumerable<UserUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutMessagesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutSeenMessagesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSeenMessagesInput>, Enumerable<UserUncheckedCreateWithoutSeenMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSeenMessagesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSeenMessagesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSeenMessagesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSeenMessagesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ConversationUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<ConversationCreateWithoutMessagesInput>, Enumerable<ConversationUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<ConversationCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<ConversationUpsertWithWhereUniqueWithoutMessagesInput>
    set?: Enumerable<ConversationWhereUniqueInput>
    disconnect?: Enumerable<ConversationWhereUniqueInput>
    delete?: Enumerable<ConversationWhereUniqueInput>
    connect?: Enumerable<ConversationWhereUniqueInput>
    update?: Enumerable<ConversationUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<ConversationUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<ConversationScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutMessagesInput>, Enumerable<UserUncheckedCreateWithoutMessagesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMessagesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutMessagesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutMessagesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutMessagesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ConversationCreateNestedOneWithoutUsersInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConverstionsInput = {
    create?: XOR<UserCreateWithoutConverstionsInput, UserUncheckedCreateWithoutConverstionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConverstionsInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput
    upsert?: ConversationUpsertWithoutUsersInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<ConversationUpdateWithoutUsersInput, ConversationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutConverstionsNestedInput = {
    create?: XOR<UserCreateWithoutConverstionsInput, UserUncheckedCreateWithoutConverstionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConverstionsInput
    upsert?: UserUpsertWithoutConverstionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutConverstionsInput, UserUncheckedUpdateWithoutConverstionsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type UserOnConversationCreateWithoutUsersInput = {
    createdAt?: Date | string
    conversations: ConversationCreateNestedOneWithoutUsersInput
  }

  export type UserOnConversationUncheckedCreateWithoutUsersInput = {
    id?: number
    conversationIds: number
    createdAt?: Date | string
  }

  export type UserOnConversationCreateOrConnectWithoutUsersInput = {
    where: UserOnConversationWhereUniqueInput
    create: XOR<UserOnConversationCreateWithoutUsersInput, UserOnConversationUncheckedCreateWithoutUsersInput>
  }

  export type UserOnConversationCreateManyUsersInputEnvelope = {
    data: Enumerable<UserOnConversationCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSeenInput = {
    body?: string | null
    image?: string | null
    createAt?: Date | string
    conversation?: ConversationCreateNestedManyWithoutMessagesInput
    sender?: UserCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSeenInput = {
    id?: number
    body?: string | null
    image?: string | null
    createAt?: Date | string
    conversation?: ConversationUncheckedCreateNestedManyWithoutMessagesInput
    sender?: UserUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageCreateOrConnectWithoutSeenInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSeenInput, MessageUncheckedCreateWithoutSeenInput>
  }

  export type AccountCreateWithoutUserInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserCreateNestedManyWithoutSeenMessagesInput
    conversation?: ConversationCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserUncheckedCreateNestedManyWithoutSeenMessagesInput
    conversation?: ConversationUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type UserOnConversationUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserOnConversationWhereUniqueInput
    update: XOR<UserOnConversationUpdateWithoutUsersInput, UserOnConversationUncheckedUpdateWithoutUsersInput>
    create: XOR<UserOnConversationCreateWithoutUsersInput, UserOnConversationUncheckedCreateWithoutUsersInput>
  }

  export type UserOnConversationUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserOnConversationWhereUniqueInput
    data: XOR<UserOnConversationUpdateWithoutUsersInput, UserOnConversationUncheckedUpdateWithoutUsersInput>
  }

  export type UserOnConversationUpdateManyWithWhereWithoutUsersInput = {
    where: UserOnConversationScalarWhereInput
    data: XOR<UserOnConversationUpdateManyMutationInput, UserOnConversationUncheckedUpdateManyWithoutConverstionsInput>
  }

  export type UserOnConversationScalarWhereInput = {
    AND?: Enumerable<UserOnConversationScalarWhereInput>
    OR?: Enumerable<UserOnConversationScalarWhereInput>
    NOT?: Enumerable<UserOnConversationScalarWhereInput>
    id?: IntFilter | number
    conversationIds?: IntFilter | number
    userIds?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSeenInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSeenInput, MessageUncheckedUpdateWithoutSeenInput>
    create: XOR<MessageCreateWithoutSeenInput, MessageUncheckedCreateWithoutSeenInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSeenInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSeenInput, MessageUncheckedUpdateWithoutSeenInput>
  }

  export type MessageUpdateManyWithWhereWithoutSeenInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSeenMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: IntFilter | number
    body?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type UserCreateWithoutAccountsInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationCreateNestedManyWithoutUsersInput
    seenMessages?: MessageCreateNestedManyWithoutSeenInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationUncheckedCreateNestedManyWithoutUsersInput
    seenMessages?: MessageUncheckedCreateNestedManyWithoutSeenInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAccountsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAccountsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateManyWithWhereWithoutAccountsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    hashedPassword?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type MessageCreateWithoutConversationInput = {
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserCreateNestedManyWithoutSeenMessagesInput
    sender?: UserCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    body?: string | null
    image?: string | null
    createAt?: Date | string
    seen?: UserUncheckedCreateNestedManyWithoutSeenMessagesInput
    sender?: UserUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type UserOnConversationCreateWithoutConversationsInput = {
    createdAt?: Date | string
    users: UserCreateNestedOneWithoutConverstionsInput
  }

  export type UserOnConversationUncheckedCreateWithoutConversationsInput = {
    id?: number
    userIds: number
    createdAt?: Date | string
  }

  export type UserOnConversationCreateOrConnectWithoutConversationsInput = {
    where: UserOnConversationWhereUniqueInput
    create: XOR<UserOnConversationCreateWithoutConversationsInput, UserOnConversationUncheckedCreateWithoutConversationsInput>
  }

  export type UserOnConversationCreateManyConversationsInputEnvelope = {
    data: Enumerable<UserOnConversationCreateManyConversationsInput>
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type UserOnConversationUpsertWithWhereUniqueWithoutConversationsInput = {
    where: UserOnConversationWhereUniqueInput
    update: XOR<UserOnConversationUpdateWithoutConversationsInput, UserOnConversationUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserOnConversationCreateWithoutConversationsInput, UserOnConversationUncheckedCreateWithoutConversationsInput>
  }

  export type UserOnConversationUpdateWithWhereUniqueWithoutConversationsInput = {
    where: UserOnConversationWhereUniqueInput
    data: XOR<UserOnConversationUpdateWithoutConversationsInput, UserOnConversationUncheckedUpdateWithoutConversationsInput>
  }

  export type UserOnConversationUpdateManyWithWhereWithoutConversationsInput = {
    where: UserOnConversationScalarWhereInput
    data: XOR<UserOnConversationUpdateManyMutationInput, UserOnConversationUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutSeenMessagesInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSeenMessagesInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSeenMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    users?: UserOnConversationCreateNestedManyWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    users?: UserOnConversationUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationCreateNestedManyWithoutUsersInput
    seenMessages?: MessageCreateNestedManyWithoutSeenInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    converstions?: UserOnConversationUncheckedCreateNestedManyWithoutUsersInput
    seenMessages?: MessageUncheckedCreateNestedManyWithoutSeenInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSeenMessagesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSeenMessagesInput, UserUncheckedUpdateWithoutSeenMessagesInput>
    create: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSeenMessagesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSeenMessagesInput, UserUncheckedUpdateWithoutSeenMessagesInput>
  }

  export type UserUpdateManyWithWhereWithoutSeenMessagesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSeenInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateManyWithWhereWithoutMessagesInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: Enumerable<ConversationScalarWhereInput>
    OR?: Enumerable<ConversationScalarWhereInput>
    NOT?: Enumerable<ConversationScalarWhereInput>
    id?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    lastMessageAt?: DateTimeFilter | Date | string
    name?: StringNullableFilter | string | null
    isGroup?: BoolNullableFilter | boolean | null
  }

  export type UserUpsertWithWhereUniqueWithoutMessagesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMessagesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateManyWithWhereWithoutMessagesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSenderInput>
  }

  export type ConversationCreateWithoutUsersInput = {
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUsersInput = {
    id?: number
    createAt?: Date | string
    lastMessageAt?: Date | string
    name?: string | null
    isGroup?: boolean | null
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUsersInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutConverstionsInput = {
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    seenMessages?: MessageCreateNestedManyWithoutSeenInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutConverstionsInput = {
    id?: number
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    hashedPassword?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    seenMessages?: MessageUncheckedCreateNestedManyWithoutSeenInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutConverstionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConverstionsInput, UserUncheckedCreateWithoutConverstionsInput>
  }

  export type ConversationUpsertWithoutUsersInput = {
    update: XOR<ConversationUpdateWithoutUsersInput, ConversationUncheckedUpdateWithoutUsersInput>
    create: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
  }

  export type ConversationUpdateWithoutUsersInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UserUpsertWithoutConverstionsInput = {
    update: XOR<UserUpdateWithoutConverstionsInput, UserUncheckedUpdateWithoutConverstionsInput>
    create: XOR<UserCreateWithoutConverstionsInput, UserUncheckedCreateWithoutConverstionsInput>
  }

  export type UserUpdateWithoutConverstionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenMessages?: MessageUpdateManyWithoutSeenNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutConverstionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenMessages?: MessageUncheckedUpdateManyWithoutSeenNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserOnConversationCreateManyUsersInput = {
    id?: number
    conversationIds: number
    createdAt?: Date | string
  }

  export type UserOnConversationUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnConversationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationUncheckedUpdateManyWithoutConverstionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSeenInput = {
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateManyWithoutMessagesNestedInput
    sender?: UserUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSeenInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateManyWithoutMessagesNestedInput
    sender?: UserUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSeenMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUpdateManyWithoutSeenMessagesNestedInput
    conversation?: ConversationUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUncheckedUpdateManyWithoutSeenMessagesNestedInput
    conversation?: ConversationUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUpdateManyWithoutSeenNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUncheckedUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUncheckedUpdateManyWithoutSeenNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationCreateManyConversationsInput = {
    id?: number
    userIds: number
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUpdateManyWithoutSeenMessagesNestedInput
    sender?: UserUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: UserUncheckedUpdateManyWithoutSeenMessagesNestedInput
    sender?: UserUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type UserOnConversationUpdateWithoutConversationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutConverstionsNestedInput
  }

  export type UserOnConversationUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnConversationUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutSeenMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUpdateManyWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSeenMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUncheckedUpdateManyWithoutUsersNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSeenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutMessagesInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: UserOnConversationUpdateManyWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: UserOnConversationUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUpdateManyWithoutSeenNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    converstions?: UserOnConversationUncheckedUpdateManyWithoutUsersNestedInput
    seenMessages?: MessageUncheckedUpdateManyWithoutSeenNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}