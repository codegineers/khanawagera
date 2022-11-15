
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Cuisine
 * 
 */
export type Cuisine = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Dish
 * 
 */
export type Dish = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  menuId: string
}

/**
 * Model Menu
 * 
 */
export type Menu = {
  id: string
  createdAt: Date
  updatedAt: Date
  restaurantId: string
}

/**
 * Model Restaurant
 * 
 */
export type Restaurant = {
  id: string
  name: string
  address: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model RestaurantCuisine
 * 
 */
export type RestaurantCuisine = {
  id: string
  createdAt: Date
  updatedAt: Date
  cuisineId: string
  restaurantId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cuisines
 * const cuisines = await prisma.cuisine.findMany()
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
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cuisines
   * const cuisines = await prisma.cuisine.findMany()
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.cuisine`: Exposes CRUD operations for the **Cuisine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuisines
    * const cuisines = await prisma.cuisine.findMany()
    * ```
    */
  get cuisine(): Prisma.CuisineDelegate<GlobalReject>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<GlobalReject>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<GlobalReject>;

  /**
   * `prisma.restaurantCuisine`: Exposes CRUD operations for the **RestaurantCuisine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantCuisines
    * const restaurantCuisines = await prisma.restaurantCuisine.findMany()
    * ```
    */
  get restaurantCuisine(): Prisma.RestaurantCuisineDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Cuisine: 'Cuisine',
    Dish: 'Dish',
    Menu: 'Menu',
    Restaurant: 'Restaurant',
    RestaurantCuisine: 'RestaurantCuisine'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CuisineCountOutputType
   */


  export type CuisineCountOutputType = {
    RestaurantCuisine: number
  }

  export type CuisineCountOutputTypeSelect = {
    RestaurantCuisine?: boolean
  }

  export type CuisineCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CuisineCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CuisineCountOutputType
    : S extends undefined
    ? never
    : S extends CuisineCountOutputTypeArgs
    ?'include' extends U
    ? CuisineCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CuisineCountOutputType ? CuisineCountOutputType[P] : never
  } 
    : CuisineCountOutputType
  : CuisineCountOutputType




  // Custom InputTypes

  /**
   * CuisineCountOutputType without action
   */
  export type CuisineCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CuisineCountOutputType
     * 
    **/
    select?: CuisineCountOutputTypeSelect | null
  }



  /**
   * Count Type MenuCountOutputType
   */


  export type MenuCountOutputType = {
    Dish: number
  }

  export type MenuCountOutputTypeSelect = {
    Dish?: boolean
  }

  export type MenuCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MenuCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MenuCountOutputType
    : S extends undefined
    ? never
    : S extends MenuCountOutputTypeArgs
    ?'include' extends U
    ? MenuCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MenuCountOutputType ? MenuCountOutputType[P] : never
  } 
    : MenuCountOutputType
  : MenuCountOutputType




  // Custom InputTypes

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     * 
    **/
    select?: MenuCountOutputTypeSelect | null
  }



  /**
   * Count Type RestaurantCountOutputType
   */


  export type RestaurantCountOutputType = {
    Menu: number
    RestaurantCuisine: number
  }

  export type RestaurantCountOutputTypeSelect = {
    Menu?: boolean
    RestaurantCuisine?: boolean
  }

  export type RestaurantCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RestaurantCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RestaurantCountOutputType
    : S extends undefined
    ? never
    : S extends RestaurantCountOutputTypeArgs
    ?'include' extends U
    ? RestaurantCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RestaurantCountOutputType ? RestaurantCountOutputType[P] : never
  } 
    : RestaurantCountOutputType
  : RestaurantCountOutputType




  // Custom InputTypes

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     * 
    **/
    select?: RestaurantCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Cuisine
   */


  export type AggregateCuisine = {
    _count: CuisineCountAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  export type CuisineMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CuisineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CuisineCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CuisineMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CuisineMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CuisineCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CuisineAggregateArgs = {
    /**
     * Filter which Cuisine to aggregate.
     * 
    **/
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<CuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuisines
    **/
    _count?: true | CuisineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuisineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuisineMaxAggregateInputType
  }

  export type GetCuisineAggregateType<T extends CuisineAggregateArgs> = {
        [P in keyof T & keyof AggregateCuisine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuisine[P]>
      : GetScalarType<T[P], AggregateCuisine[P]>
  }




  export type CuisineGroupByArgs = {
    where?: CuisineWhereInput
    orderBy?: Enumerable<CuisineOrderByWithAggregationInput>
    by: Array<CuisineScalarFieldEnum>
    having?: CuisineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuisineCountAggregateInputType | true
    _min?: CuisineMinAggregateInputType
    _max?: CuisineMaxAggregateInputType
  }


  export type CuisineGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CuisineCountAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  type GetCuisineGroupByPayload<T extends CuisineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CuisineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuisineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuisineGroupByOutputType[P]>
            : GetScalarType<T[P], CuisineGroupByOutputType[P]>
        }
      >
    >


  export type CuisineSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RestaurantCuisine?: boolean | RestaurantCuisineFindManyArgs
    _count?: boolean | CuisineCountOutputTypeArgs
  }

  export type CuisineInclude = {
    RestaurantCuisine?: boolean | RestaurantCuisineFindManyArgs
    _count?: boolean | CuisineCountOutputTypeArgs
  }

  export type CuisineGetPayload<
    S extends boolean | null | undefined | CuisineArgs,
    U = keyof S
      > = S extends true
        ? Cuisine
    : S extends undefined
    ? never
    : S extends CuisineArgs | CuisineFindManyArgs
    ?'include' extends U
    ? Cuisine  & {
    [P in TrueKeys<S['include']>]:
        P extends 'RestaurantCuisine' ? Array < RestaurantCuisineGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CuisineCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'RestaurantCuisine' ? Array < RestaurantCuisineGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CuisineCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Cuisine ? Cuisine[P] : never
  } 
    : Cuisine
  : Cuisine


  type CuisineCountArgs = Merge<
    Omit<CuisineFindManyArgs, 'select' | 'include'> & {
      select?: CuisineCountAggregateInputType | true
    }
  >

  export interface CuisineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cuisine that matches the filter.
     * @param {CuisineFindUniqueArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CuisineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CuisineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cuisine'> extends True ? CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>> : CheckSelect<T, Prisma__CuisineClient<Cuisine | null, null>, Prisma__CuisineClient<CuisineGetPayload<T> | null, null>>

    /**
     * Find the first Cuisine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CuisineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CuisineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cuisine'> extends True ? CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>> : CheckSelect<T, Prisma__CuisineClient<Cuisine | null, null>, Prisma__CuisineClient<CuisineGetPayload<T> | null, null>>

    /**
     * Find zero or more Cuisines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuisines
     * const cuisines = await prisma.cuisine.findMany()
     * 
     * // Get first 10 Cuisines
     * const cuisines = await prisma.cuisine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuisineWithIdOnly = await prisma.cuisine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CuisineFindManyArgs>(
      args?: SelectSubset<T, CuisineFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Cuisine>>, PrismaPromise<Array<CuisineGetPayload<T>>>>

    /**
     * Create a Cuisine.
     * @param {CuisineCreateArgs} args - Arguments to create a Cuisine.
     * @example
     * // Create one Cuisine
     * const Cuisine = await prisma.cuisine.create({
     *   data: {
     *     // ... data to create a Cuisine
     *   }
     * })
     * 
    **/
    create<T extends CuisineCreateArgs>(
      args: SelectSubset<T, CuisineCreateArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Create many Cuisines.
     *     @param {CuisineCreateManyArgs} args - Arguments to create many Cuisines.
     *     @example
     *     // Create many Cuisines
     *     const cuisine = await prisma.cuisine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CuisineCreateManyArgs>(
      args?: SelectSubset<T, CuisineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cuisine.
     * @param {CuisineDeleteArgs} args - Arguments to delete one Cuisine.
     * @example
     * // Delete one Cuisine
     * const Cuisine = await prisma.cuisine.delete({
     *   where: {
     *     // ... filter to delete one Cuisine
     *   }
     * })
     * 
    **/
    delete<T extends CuisineDeleteArgs>(
      args: SelectSubset<T, CuisineDeleteArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Update one Cuisine.
     * @param {CuisineUpdateArgs} args - Arguments to update one Cuisine.
     * @example
     * // Update one Cuisine
     * const cuisine = await prisma.cuisine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CuisineUpdateArgs>(
      args: SelectSubset<T, CuisineUpdateArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Delete zero or more Cuisines.
     * @param {CuisineDeleteManyArgs} args - Arguments to filter Cuisines to delete.
     * @example
     * // Delete a few Cuisines
     * const { count } = await prisma.cuisine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CuisineDeleteManyArgs>(
      args?: SelectSubset<T, CuisineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuisines
     * const cuisine = await prisma.cuisine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CuisineUpdateManyArgs>(
      args: SelectSubset<T, CuisineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuisine.
     * @param {CuisineUpsertArgs} args - Arguments to update or create a Cuisine.
     * @example
     * // Update or create a Cuisine
     * const cuisine = await prisma.cuisine.upsert({
     *   create: {
     *     // ... data to create a Cuisine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuisine we want to update
     *   }
     * })
    **/
    upsert<T extends CuisineUpsertArgs>(
      args: SelectSubset<T, CuisineUpsertArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Find one Cuisine that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CuisineFindUniqueOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CuisineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CuisineFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Find the first Cuisine that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CuisineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CuisineFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CuisineClient<Cuisine>, Prisma__CuisineClient<CuisineGetPayload<T>>>

    /**
     * Count the number of Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineCountArgs} args - Arguments to filter Cuisines to count.
     * @example
     * // Count the number of Cuisines
     * const count = await prisma.cuisine.count({
     *   where: {
     *     // ... the filter for the Cuisines we want to count
     *   }
     * })
    **/
    count<T extends CuisineCountArgs>(
      args?: Subset<T, CuisineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuisineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuisineAggregateArgs>(args: Subset<T, CuisineAggregateArgs>): PrismaPromise<GetCuisineAggregateType<T>>

    /**
     * Group by Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineGroupByArgs} args - Group by arguments.
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
      T extends CuisineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuisineGroupByArgs['orderBy'] }
        : { orderBy?: CuisineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuisineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuisineGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuisine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CuisineClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    RestaurantCuisine<T extends RestaurantCuisineFindManyArgs = {}>(args?: Subset<T, RestaurantCuisineFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RestaurantCuisine>| Null>, PrismaPromise<Array<RestaurantCuisineGetPayload<T>>| Null>>;

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
   * Cuisine base type for findUnique actions
   */
  export type CuisineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * Filter, which Cuisine to fetch.
     * 
    **/
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine: findUnique
   */
  export interface CuisineFindUniqueArgs extends CuisineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cuisine base type for findFirst actions
   */
  export type CuisineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * Filter, which Cuisine to fetch.
     * 
    **/
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<CuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuisines.
     * 
    **/
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuisines.
     * 
    **/
    distinct?: Enumerable<CuisineScalarFieldEnum>
  }

  /**
   * Cuisine: findFirst
   */
  export interface CuisineFindFirstArgs extends CuisineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cuisine findMany
   */
  export type CuisineFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * Filter, which Cuisines to fetch.
     * 
    **/
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<CuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuisines.
     * 
    **/
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CuisineScalarFieldEnum>
  }


  /**
   * Cuisine create
   */
  export type CuisineCreateArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * The data needed to create a Cuisine.
     * 
    **/
    data: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
  }


  /**
   * Cuisine createMany
   */
  export type CuisineCreateManyArgs = {
    /**
     * The data used to create many Cuisines.
     * 
    **/
    data: Enumerable<CuisineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cuisine update
   */
  export type CuisineUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * The data needed to update a Cuisine.
     * 
    **/
    data: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
    /**
     * Choose, which Cuisine to update.
     * 
    **/
    where: CuisineWhereUniqueInput
  }


  /**
   * Cuisine updateMany
   */
  export type CuisineUpdateManyArgs = {
    /**
     * The data used to update Cuisines.
     * 
    **/
    data: XOR<CuisineUpdateManyMutationInput, CuisineUncheckedUpdateManyInput>
    /**
     * Filter which Cuisines to update
     * 
    **/
    where?: CuisineWhereInput
  }


  /**
   * Cuisine upsert
   */
  export type CuisineUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * The filter to search for the Cuisine to update in case it exists.
     * 
    **/
    where: CuisineWhereUniqueInput
    /**
     * In case the Cuisine found by the `where` argument doesn't exist, create a new Cuisine with this data.
     * 
    **/
    create: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
    /**
     * In case the Cuisine was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
  }


  /**
   * Cuisine delete
   */
  export type CuisineDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
    /**
     * Filter which Cuisine to delete.
     * 
    **/
    where: CuisineWhereUniqueInput
  }


  /**
   * Cuisine deleteMany
   */
  export type CuisineDeleteManyArgs = {
    /**
     * Filter which Cuisines to delete
     * 
    **/
    where?: CuisineWhereInput
  }


  /**
   * Cuisine: findUniqueOrThrow
   */
  export type CuisineFindUniqueOrThrowArgs = CuisineFindUniqueArgsBase
      

  /**
   * Cuisine: findFirstOrThrow
   */
  export type CuisineFindFirstOrThrowArgs = CuisineFindFirstArgsBase
      

  /**
   * Cuisine without action
   */
  export type CuisineArgs = {
    /**
     * Select specific fields to fetch from the Cuisine
     * 
    **/
    select?: CuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CuisineInclude | null
  }



  /**
   * Model Dish
   */


  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    menuId: string | null
  }

  export type DishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    menuId: string | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    menuId: number
    _all: number
  }


  export type DishMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    menuId?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    menuId?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    menuId?: true
    _all?: true
  }

  export type DishAggregateArgs = {
    /**
     * Filter which Dish to aggregate.
     * 
    **/
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     * 
    **/
    orderBy?: Enumerable<DishOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs = {
    where?: DishWhereInput
    orderBy?: Enumerable<DishOrderByWithAggregationInput>
    by: Array<DishScalarFieldEnum>
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }


  export type DishGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    menuId: string
    _count: DishCountAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Menu?: boolean | MenuArgs
    menuId?: boolean
  }

  export type DishInclude = {
    Menu?: boolean | MenuArgs
  }

  export type DishGetPayload<
    S extends boolean | null | undefined | DishArgs,
    U = keyof S
      > = S extends true
        ? Dish
    : S extends undefined
    ? never
    : S extends DishArgs | DishFindManyArgs
    ?'include' extends U
    ? Dish  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Menu' ? MenuGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Menu' ? MenuGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Dish ? Dish[P] : never
  } 
    : Dish
  : Dish


  type DishCountArgs = Merge<
    Omit<DishFindManyArgs, 'select' | 'include'> & {
      select?: DishCountAggregateInputType | true
    }
  >

  export interface DishDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DishFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DishFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dish'> extends True ? CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>> : CheckSelect<T, Prisma__DishClient<Dish | null, null>, Prisma__DishClient<DishGetPayload<T> | null, null>>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DishFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DishFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dish'> extends True ? CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>> : CheckSelect<T, Prisma__DishClient<Dish | null, null>, Prisma__DishClient<DishGetPayload<T> | null, null>>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DishFindManyArgs>(
      args?: SelectSubset<T, DishFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dish>>, PrismaPromise<Array<DishGetPayload<T>>>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
    **/
    create<T extends DishCreateArgs>(
      args: SelectSubset<T, DishCreateArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Create many Dishes.
     *     @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     *     @example
     *     // Create many Dishes
     *     const dish = await prisma.dish.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DishCreateManyArgs>(
      args?: SelectSubset<T, DishCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
    **/
    delete<T extends DishDeleteArgs>(
      args: SelectSubset<T, DishDeleteArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DishUpdateArgs>(
      args: SelectSubset<T, DishUpdateArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DishDeleteManyArgs>(
      args?: SelectSubset<T, DishDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DishUpdateManyArgs>(
      args: SelectSubset<T, DishUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
    **/
    upsert<T extends DishUpsertArgs>(
      args: SelectSubset<T, DishUpsertArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Find one Dish that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DishFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Find the first Dish that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DishFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DishClient<Dish>, Prisma__DishClient<DishGetPayload<T>>>

    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
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
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DishClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Menu<T extends MenuArgs = {}>(args?: Subset<T, MenuArgs>): CheckSelect<T, Prisma__MenuClient<Menu | Null>, Prisma__MenuClient<MenuGetPayload<T> | Null>>;

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
   * Dish base type for findUnique actions
   */
  export type DishFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * Filter, which Dish to fetch.
     * 
    **/
    where: DishWhereUniqueInput
  }

  /**
   * Dish: findUnique
   */
  export interface DishFindUniqueArgs extends DishFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dish base type for findFirst actions
   */
  export type DishFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * Filter, which Dish to fetch.
     * 
    **/
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     * 
    **/
    orderBy?: Enumerable<DishOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     * 
    **/
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     * 
    **/
    distinct?: Enumerable<DishScalarFieldEnum>
  }

  /**
   * Dish: findFirst
   */
  export interface DishFindFirstArgs extends DishFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dish findMany
   */
  export type DishFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * Filter, which Dishes to fetch.
     * 
    **/
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     * 
    **/
    orderBy?: Enumerable<DishOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     * 
    **/
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DishScalarFieldEnum>
  }


  /**
   * Dish create
   */
  export type DishCreateArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * The data needed to create a Dish.
     * 
    **/
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }


  /**
   * Dish createMany
   */
  export type DishCreateManyArgs = {
    /**
     * The data used to create many Dishes.
     * 
    **/
    data: Enumerable<DishCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dish update
   */
  export type DishUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * The data needed to update a Dish.
     * 
    **/
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     * 
    **/
    where: DishWhereUniqueInput
  }


  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs = {
    /**
     * The data used to update Dishes.
     * 
    **/
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     * 
    **/
    where?: DishWhereInput
  }


  /**
   * Dish upsert
   */
  export type DishUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * The filter to search for the Dish to update in case it exists.
     * 
    **/
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     * 
    **/
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }


  /**
   * Dish delete
   */
  export type DishDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
    /**
     * Filter which Dish to delete.
     * 
    **/
    where: DishWhereUniqueInput
  }


  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs = {
    /**
     * Filter which Dishes to delete
     * 
    **/
    where?: DishWhereInput
  }


  /**
   * Dish: findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs = DishFindUniqueArgsBase
      

  /**
   * Dish: findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs = DishFindFirstArgsBase
      

  /**
   * Dish without action
   */
  export type DishArgs = {
    /**
     * Select specific fields to fetch from the Dish
     * 
    **/
    select?: DishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DishInclude | null
  }



  /**
   * Model Menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    restaurantId: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    restaurantId: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    restaurantId: number
    _all: number
  }


  export type MenuMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which Menu to aggregate.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs = {
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByWithAggregationInput>
    by: Array<MenuScalarFieldEnum>
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    restaurantId: string
    _count: MenuCountAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Restaurant?: boolean | RestaurantArgs
    restaurantId?: boolean
    Dish?: boolean | DishFindManyArgs
    _count?: boolean | MenuCountOutputTypeArgs
  }

  export type MenuInclude = {
    Restaurant?: boolean | RestaurantArgs
    Dish?: boolean | DishFindManyArgs
    _count?: boolean | MenuCountOutputTypeArgs
  }

  export type MenuGetPayload<
    S extends boolean | null | undefined | MenuArgs,
    U = keyof S
      > = S extends true
        ? Menu
    : S extends undefined
    ? never
    : S extends MenuArgs | MenuFindManyArgs
    ?'include' extends U
    ? Menu  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Restaurant' ? RestaurantGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Dish' ? Array < DishGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Restaurant' ? RestaurantGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Dish' ? Array < DishGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Menu ? Menu[P] : never
  } 
    : Menu
  : Menu


  type MenuCountArgs = Merge<
    Omit<MenuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }
  >

  export interface MenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null, null>, Prisma__MenuClient<MenuGetPayload<T> | null, null>>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null, null>, Prisma__MenuClient<MenuGetPayload<T> | null, null>>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs>(
      args?: SelectSubset<T, MenuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Menu>>, PrismaPromise<Array<MenuGetPayload<T>>>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs>(
      args: SelectSubset<T, MenuCreateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs>(
      args?: SelectSubset<T, MenuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs>(
      args: SelectSubset<T, MenuDeleteArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs>(
      args: SelectSubset<T, MenuUpdateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs>(
      args?: SelectSubset<T, MenuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs>(
      args: SelectSubset<T, MenuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs>(
      args: SelectSubset<T, MenuUpsertArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Find one Menu that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MenuFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Find the first Menu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MenuClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Restaurant<T extends RestaurantArgs = {}>(args?: Subset<T, RestaurantArgs>): CheckSelect<T, Prisma__RestaurantClient<Restaurant | Null>, Prisma__RestaurantClient<RestaurantGetPayload<T> | Null>>;

    Dish<T extends DishFindManyArgs = {}>(args?: Subset<T, DishFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dish>| Null>, PrismaPromise<Array<DishGetPayload<T>>| Null>>;

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
   * Menu base type for findUnique actions
   */
  export type MenuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where: MenuWhereUniqueInput
  }

  /**
   * Menu: findUnique
   */
  export interface MenuFindUniqueArgs extends MenuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu base type for findFirst actions
   */
  export type MenuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     * 
    **/
    distinct?: Enumerable<MenuScalarFieldEnum>
  }

  /**
   * Menu: findFirst
   */
  export interface MenuFindFirstArgs extends MenuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter, which Menus to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The data needed to create a Menu.
     * 
    **/
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs = {
    /**
     * The data used to create many Menus.
     * 
    **/
    data: Enumerable<MenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The data needed to update a Menu.
     * 
    **/
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs = {
    /**
     * The data used to update Menus.
     * 
    **/
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     * 
    **/
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The filter to search for the Menu to update in case it exists.
     * 
    **/
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     * 
    **/
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter which Menu to delete.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs = {
    /**
     * Filter which Menus to delete
     * 
    **/
    where?: MenuWhereInput
  }


  /**
   * Menu: findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs = MenuFindUniqueArgsBase
      

  /**
   * Menu: findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs = MenuFindFirstArgsBase
      

  /**
   * Menu without action
   */
  export type MenuArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
  }



  /**
   * Model Restaurant
   */


  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs = {
    /**
     * Filter which Restaurant to aggregate.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs = {
    where?: RestaurantWhereInput
    orderBy?: Enumerable<RestaurantOrderByWithAggregationInput>
    by: Array<RestaurantScalarFieldEnum>
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }


  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Menu?: boolean | MenuFindManyArgs
    RestaurantCuisine?: boolean | RestaurantCuisineFindManyArgs
    _count?: boolean | RestaurantCountOutputTypeArgs
  }

  export type RestaurantInclude = {
    Menu?: boolean | MenuFindManyArgs
    RestaurantCuisine?: boolean | RestaurantCuisineFindManyArgs
    _count?: boolean | RestaurantCountOutputTypeArgs
  }

  export type RestaurantGetPayload<
    S extends boolean | null | undefined | RestaurantArgs,
    U = keyof S
      > = S extends true
        ? Restaurant
    : S extends undefined
    ? never
    : S extends RestaurantArgs | RestaurantFindManyArgs
    ?'include' extends U
    ? Restaurant  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Menu' ? Array < MenuGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'RestaurantCuisine' ? Array < RestaurantCuisineGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? RestaurantCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Menu' ? Array < MenuGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'RestaurantCuisine' ? Array < RestaurantCuisineGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? RestaurantCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Restaurant ? Restaurant[P] : never
  } 
    : Restaurant
  : Restaurant


  type RestaurantCountArgs = Merge<
    Omit<RestaurantFindManyArgs, 'select' | 'include'> & {
      select?: RestaurantCountAggregateInputType | true
    }
  >

  export interface RestaurantDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestaurantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RestaurantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Restaurant'> extends True ? CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantClient<Restaurant | null, null>, Prisma__RestaurantClient<RestaurantGetPayload<T> | null, null>>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestaurantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RestaurantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Restaurant'> extends True ? CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantClient<Restaurant | null, null>, Prisma__RestaurantClient<RestaurantGetPayload<T> | null, null>>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RestaurantFindManyArgs>(
      args?: SelectSubset<T, RestaurantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Restaurant>>, PrismaPromise<Array<RestaurantGetPayload<T>>>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
    **/
    create<T extends RestaurantCreateArgs>(
      args: SelectSubset<T, RestaurantCreateArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Create many Restaurants.
     *     @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurant = await prisma.restaurant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestaurantCreateManyArgs>(
      args?: SelectSubset<T, RestaurantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
    **/
    delete<T extends RestaurantDeleteArgs>(
      args: SelectSubset<T, RestaurantDeleteArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestaurantUpdateArgs>(
      args: SelectSubset<T, RestaurantUpdateArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestaurantDeleteManyArgs>(
      args?: SelectSubset<T, RestaurantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestaurantUpdateManyArgs>(
      args: SelectSubset<T, RestaurantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
    **/
    upsert<T extends RestaurantUpsertArgs>(
      args: SelectSubset<T, RestaurantUpsertArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Find one Restaurant that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RestaurantFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RestaurantClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Menu<T extends MenuFindManyArgs = {}>(args?: Subset<T, MenuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Menu>| Null>, PrismaPromise<Array<MenuGetPayload<T>>| Null>>;

    RestaurantCuisine<T extends RestaurantCuisineFindManyArgs = {}>(args?: Subset<T, RestaurantCuisineFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RestaurantCuisine>| Null>, PrismaPromise<Array<RestaurantCuisineGetPayload<T>>| Null>>;

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
   * Restaurant base type for findUnique actions
   */
  export type RestaurantFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter, which Restaurant to fetch.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant: findUnique
   */
  export interface RestaurantFindUniqueArgs extends RestaurantFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Restaurant base type for findFirst actions
   */
  export type RestaurantFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter, which Restaurant to fetch.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     * 
    **/
    distinct?: Enumerable<RestaurantScalarFieldEnum>
  }

  /**
   * Restaurant: findFirst
   */
  export interface RestaurantFindFirstArgs extends RestaurantFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter, which Restaurants to fetch.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RestaurantScalarFieldEnum>
  }


  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The data needed to create a Restaurant.
     * 
    **/
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }


  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs = {
    /**
     * The data used to create many Restaurants.
     * 
    **/
    data: Enumerable<RestaurantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The data needed to update a Restaurant.
     * 
    **/
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs = {
    /**
     * The data used to update Restaurants.
     * 
    **/
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     * 
    **/
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     * 
    **/
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     * 
    **/
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }


  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter which Restaurant to delete.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs = {
    /**
     * Filter which Restaurants to delete
     * 
    **/
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant: findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs = RestaurantFindUniqueArgsBase
      

  /**
   * Restaurant: findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs = RestaurantFindFirstArgsBase
      

  /**
   * Restaurant without action
   */
  export type RestaurantArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
  }



  /**
   * Model RestaurantCuisine
   */


  export type AggregateRestaurantCuisine = {
    _count: RestaurantCuisineCountAggregateOutputType | null
    _min: RestaurantCuisineMinAggregateOutputType | null
    _max: RestaurantCuisineMaxAggregateOutputType | null
  }

  export type RestaurantCuisineMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cuisineId: string | null
    restaurantId: string | null
  }

  export type RestaurantCuisineMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cuisineId: string | null
    restaurantId: string | null
  }

  export type RestaurantCuisineCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    cuisineId: number
    restaurantId: number
    _all: number
  }


  export type RestaurantCuisineMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cuisineId?: true
    restaurantId?: true
  }

  export type RestaurantCuisineMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cuisineId?: true
    restaurantId?: true
  }

  export type RestaurantCuisineCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cuisineId?: true
    restaurantId?: true
    _all?: true
  }

  export type RestaurantCuisineAggregateArgs = {
    /**
     * Filter which RestaurantCuisine to aggregate.
     * 
    **/
    where?: RestaurantCuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantCuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantCuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RestaurantCuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantCuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantCuisines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantCuisines
    **/
    _count?: true | RestaurantCuisineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantCuisineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantCuisineMaxAggregateInputType
  }

  export type GetRestaurantCuisineAggregateType<T extends RestaurantCuisineAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantCuisine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantCuisine[P]>
      : GetScalarType<T[P], AggregateRestaurantCuisine[P]>
  }




  export type RestaurantCuisineGroupByArgs = {
    where?: RestaurantCuisineWhereInput
    orderBy?: Enumerable<RestaurantCuisineOrderByWithAggregationInput>
    by: Array<RestaurantCuisineScalarFieldEnum>
    having?: RestaurantCuisineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCuisineCountAggregateInputType | true
    _min?: RestaurantCuisineMinAggregateInputType
    _max?: RestaurantCuisineMaxAggregateInputType
  }


  export type RestaurantCuisineGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    cuisineId: string
    restaurantId: string
    _count: RestaurantCuisineCountAggregateOutputType | null
    _min: RestaurantCuisineMinAggregateOutputType | null
    _max: RestaurantCuisineMaxAggregateOutputType | null
  }

  type GetRestaurantCuisineGroupByPayload<T extends RestaurantCuisineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RestaurantCuisineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantCuisineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantCuisineGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantCuisineGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantCuisineSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuisineId?: boolean
    restaurantId?: boolean
    Cuisine?: boolean | CuisineArgs
    Restaurant?: boolean | RestaurantArgs
  }

  export type RestaurantCuisineInclude = {
    Cuisine?: boolean | CuisineArgs
    Restaurant?: boolean | RestaurantArgs
  }

  export type RestaurantCuisineGetPayload<
    S extends boolean | null | undefined | RestaurantCuisineArgs,
    U = keyof S
      > = S extends true
        ? RestaurantCuisine
    : S extends undefined
    ? never
    : S extends RestaurantCuisineArgs | RestaurantCuisineFindManyArgs
    ?'include' extends U
    ? RestaurantCuisine  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Cuisine' ? CuisineGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Restaurant' ? RestaurantGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Cuisine' ? CuisineGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Restaurant' ? RestaurantGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof RestaurantCuisine ? RestaurantCuisine[P] : never
  } 
    : RestaurantCuisine
  : RestaurantCuisine


  type RestaurantCuisineCountArgs = Merge<
    Omit<RestaurantCuisineFindManyArgs, 'select' | 'include'> & {
      select?: RestaurantCuisineCountAggregateInputType | true
    }
  >

  export interface RestaurantCuisineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RestaurantCuisine that matches the filter.
     * @param {RestaurantCuisineFindUniqueArgs} args - Arguments to find a RestaurantCuisine
     * @example
     * // Get one RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestaurantCuisineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RestaurantCuisineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RestaurantCuisine'> extends True ? CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine | null, null>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T> | null, null>>

    /**
     * Find the first RestaurantCuisine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineFindFirstArgs} args - Arguments to find a RestaurantCuisine
     * @example
     * // Get one RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestaurantCuisineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RestaurantCuisineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RestaurantCuisine'> extends True ? CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine | null, null>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T> | null, null>>

    /**
     * Find zero or more RestaurantCuisines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantCuisines
     * const restaurantCuisines = await prisma.restaurantCuisine.findMany()
     * 
     * // Get first 10 RestaurantCuisines
     * const restaurantCuisines = await prisma.restaurantCuisine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantCuisineWithIdOnly = await prisma.restaurantCuisine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RestaurantCuisineFindManyArgs>(
      args?: SelectSubset<T, RestaurantCuisineFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RestaurantCuisine>>, PrismaPromise<Array<RestaurantCuisineGetPayload<T>>>>

    /**
     * Create a RestaurantCuisine.
     * @param {RestaurantCuisineCreateArgs} args - Arguments to create a RestaurantCuisine.
     * @example
     * // Create one RestaurantCuisine
     * const RestaurantCuisine = await prisma.restaurantCuisine.create({
     *   data: {
     *     // ... data to create a RestaurantCuisine
     *   }
     * })
     * 
    **/
    create<T extends RestaurantCuisineCreateArgs>(
      args: SelectSubset<T, RestaurantCuisineCreateArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Create many RestaurantCuisines.
     *     @param {RestaurantCuisineCreateManyArgs} args - Arguments to create many RestaurantCuisines.
     *     @example
     *     // Create many RestaurantCuisines
     *     const restaurantCuisine = await prisma.restaurantCuisine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestaurantCuisineCreateManyArgs>(
      args?: SelectSubset<T, RestaurantCuisineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RestaurantCuisine.
     * @param {RestaurantCuisineDeleteArgs} args - Arguments to delete one RestaurantCuisine.
     * @example
     * // Delete one RestaurantCuisine
     * const RestaurantCuisine = await prisma.restaurantCuisine.delete({
     *   where: {
     *     // ... filter to delete one RestaurantCuisine
     *   }
     * })
     * 
    **/
    delete<T extends RestaurantCuisineDeleteArgs>(
      args: SelectSubset<T, RestaurantCuisineDeleteArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Update one RestaurantCuisine.
     * @param {RestaurantCuisineUpdateArgs} args - Arguments to update one RestaurantCuisine.
     * @example
     * // Update one RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestaurantCuisineUpdateArgs>(
      args: SelectSubset<T, RestaurantCuisineUpdateArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Delete zero or more RestaurantCuisines.
     * @param {RestaurantCuisineDeleteManyArgs} args - Arguments to filter RestaurantCuisines to delete.
     * @example
     * // Delete a few RestaurantCuisines
     * const { count } = await prisma.restaurantCuisine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestaurantCuisineDeleteManyArgs>(
      args?: SelectSubset<T, RestaurantCuisineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantCuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantCuisines
     * const restaurantCuisine = await prisma.restaurantCuisine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestaurantCuisineUpdateManyArgs>(
      args: SelectSubset<T, RestaurantCuisineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RestaurantCuisine.
     * @param {RestaurantCuisineUpsertArgs} args - Arguments to update or create a RestaurantCuisine.
     * @example
     * // Update or create a RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.upsert({
     *   create: {
     *     // ... data to create a RestaurantCuisine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantCuisine we want to update
     *   }
     * })
    **/
    upsert<T extends RestaurantCuisineUpsertArgs>(
      args: SelectSubset<T, RestaurantCuisineUpsertArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Find one RestaurantCuisine that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RestaurantCuisineFindUniqueOrThrowArgs} args - Arguments to find a RestaurantCuisine
     * @example
     * // Get one RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RestaurantCuisineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RestaurantCuisineFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Find the first RestaurantCuisine that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineFindFirstOrThrowArgs} args - Arguments to find a RestaurantCuisine
     * @example
     * // Get one RestaurantCuisine
     * const restaurantCuisine = await prisma.restaurantCuisine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RestaurantCuisineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RestaurantCuisineFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RestaurantCuisineClient<RestaurantCuisine>, Prisma__RestaurantCuisineClient<RestaurantCuisineGetPayload<T>>>

    /**
     * Count the number of RestaurantCuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineCountArgs} args - Arguments to filter RestaurantCuisines to count.
     * @example
     * // Count the number of RestaurantCuisines
     * const count = await prisma.restaurantCuisine.count({
     *   where: {
     *     // ... the filter for the RestaurantCuisines we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCuisineCountArgs>(
      args?: Subset<T, RestaurantCuisineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCuisineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantCuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantCuisineAggregateArgs>(args: Subset<T, RestaurantCuisineAggregateArgs>): PrismaPromise<GetRestaurantCuisineAggregateType<T>>

    /**
     * Group by RestaurantCuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCuisineGroupByArgs} args - Group by arguments.
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
      T extends RestaurantCuisineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantCuisineGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantCuisineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantCuisineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantCuisineGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantCuisine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RestaurantCuisineClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Cuisine<T extends CuisineArgs = {}>(args?: Subset<T, CuisineArgs>): CheckSelect<T, Prisma__CuisineClient<Cuisine | Null>, Prisma__CuisineClient<CuisineGetPayload<T> | Null>>;

    Restaurant<T extends RestaurantArgs = {}>(args?: Subset<T, RestaurantArgs>): CheckSelect<T, Prisma__RestaurantClient<Restaurant | Null>, Prisma__RestaurantClient<RestaurantGetPayload<T> | Null>>;

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
   * RestaurantCuisine base type for findUnique actions
   */
  export type RestaurantCuisineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * Filter, which RestaurantCuisine to fetch.
     * 
    **/
    where: RestaurantCuisineWhereUniqueInput
  }

  /**
   * RestaurantCuisine: findUnique
   */
  export interface RestaurantCuisineFindUniqueArgs extends RestaurantCuisineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RestaurantCuisine base type for findFirst actions
   */
  export type RestaurantCuisineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * Filter, which RestaurantCuisine to fetch.
     * 
    **/
    where?: RestaurantCuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantCuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantCuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantCuisines.
     * 
    **/
    cursor?: RestaurantCuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantCuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantCuisines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantCuisines.
     * 
    **/
    distinct?: Enumerable<RestaurantCuisineScalarFieldEnum>
  }

  /**
   * RestaurantCuisine: findFirst
   */
  export interface RestaurantCuisineFindFirstArgs extends RestaurantCuisineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RestaurantCuisine findMany
   */
  export type RestaurantCuisineFindManyArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * Filter, which RestaurantCuisines to fetch.
     * 
    **/
    where?: RestaurantCuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantCuisines to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantCuisineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantCuisines.
     * 
    **/
    cursor?: RestaurantCuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantCuisines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantCuisines.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RestaurantCuisineScalarFieldEnum>
  }


  /**
   * RestaurantCuisine create
   */
  export type RestaurantCuisineCreateArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * The data needed to create a RestaurantCuisine.
     * 
    **/
    data: XOR<RestaurantCuisineCreateInput, RestaurantCuisineUncheckedCreateInput>
  }


  /**
   * RestaurantCuisine createMany
   */
  export type RestaurantCuisineCreateManyArgs = {
    /**
     * The data used to create many RestaurantCuisines.
     * 
    **/
    data: Enumerable<RestaurantCuisineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RestaurantCuisine update
   */
  export type RestaurantCuisineUpdateArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * The data needed to update a RestaurantCuisine.
     * 
    **/
    data: XOR<RestaurantCuisineUpdateInput, RestaurantCuisineUncheckedUpdateInput>
    /**
     * Choose, which RestaurantCuisine to update.
     * 
    **/
    where: RestaurantCuisineWhereUniqueInput
  }


  /**
   * RestaurantCuisine updateMany
   */
  export type RestaurantCuisineUpdateManyArgs = {
    /**
     * The data used to update RestaurantCuisines.
     * 
    **/
    data: XOR<RestaurantCuisineUpdateManyMutationInput, RestaurantCuisineUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantCuisines to update
     * 
    **/
    where?: RestaurantCuisineWhereInput
  }


  /**
   * RestaurantCuisine upsert
   */
  export type RestaurantCuisineUpsertArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * The filter to search for the RestaurantCuisine to update in case it exists.
     * 
    **/
    where: RestaurantCuisineWhereUniqueInput
    /**
     * In case the RestaurantCuisine found by the `where` argument doesn't exist, create a new RestaurantCuisine with this data.
     * 
    **/
    create: XOR<RestaurantCuisineCreateInput, RestaurantCuisineUncheckedCreateInput>
    /**
     * In case the RestaurantCuisine was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RestaurantCuisineUpdateInput, RestaurantCuisineUncheckedUpdateInput>
  }


  /**
   * RestaurantCuisine delete
   */
  export type RestaurantCuisineDeleteArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
    /**
     * Filter which RestaurantCuisine to delete.
     * 
    **/
    where: RestaurantCuisineWhereUniqueInput
  }


  /**
   * RestaurantCuisine deleteMany
   */
  export type RestaurantCuisineDeleteManyArgs = {
    /**
     * Filter which RestaurantCuisines to delete
     * 
    **/
    where?: RestaurantCuisineWhereInput
  }


  /**
   * RestaurantCuisine: findUniqueOrThrow
   */
  export type RestaurantCuisineFindUniqueOrThrowArgs = RestaurantCuisineFindUniqueArgsBase
      

  /**
   * RestaurantCuisine: findFirstOrThrow
   */
  export type RestaurantCuisineFindFirstOrThrowArgs = RestaurantCuisineFindFirstArgsBase
      

  /**
   * RestaurantCuisine without action
   */
  export type RestaurantCuisineArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCuisine
     * 
    **/
    select?: RestaurantCuisineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantCuisineInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CuisineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CuisineScalarFieldEnum = (typeof CuisineScalarFieldEnum)[keyof typeof CuisineScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    menuId: 'menuId'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    restaurantId: 'restaurantId'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RestaurantCuisineScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cuisineId: 'cuisineId',
    restaurantId: 'restaurantId'
  };

  export type RestaurantCuisineScalarFieldEnum = (typeof RestaurantCuisineScalarFieldEnum)[keyof typeof RestaurantCuisineScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type CuisineWhereInput = {
    AND?: Enumerable<CuisineWhereInput>
    OR?: Enumerable<CuisineWhereInput>
    NOT?: Enumerable<CuisineWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    RestaurantCuisine?: RestaurantCuisineListRelationFilter
  }

  export type CuisineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RestaurantCuisine?: RestaurantCuisineOrderByRelationAggregateInput
  }

  export type CuisineWhereUniqueInput = {
    id?: string
  }

  export type CuisineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CuisineCountOrderByAggregateInput
    _max?: CuisineMaxOrderByAggregateInput
    _min?: CuisineMinOrderByAggregateInput
  }

  export type CuisineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CuisineScalarWhereWithAggregatesInput>
    OR?: Enumerable<CuisineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CuisineScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DishWhereInput = {
    AND?: Enumerable<DishWhereInput>
    OR?: Enumerable<DishWhereInput>
    NOT?: Enumerable<DishWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Menu?: XOR<MenuRelationFilter, MenuWhereInput>
    menuId?: StringFilter | string
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Menu?: MenuOrderByWithRelationInput
    menuId?: SortOrder
  }

  export type DishWhereUniqueInput = {
    id?: string
  }

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuId?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DishScalarWhereWithAggregatesInput>
    OR?: Enumerable<DishScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DishScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    menuId?: StringWithAggregatesFilter | string
  }

  export type MenuWhereInput = {
    AND?: Enumerable<MenuWhereInput>
    OR?: Enumerable<MenuWhereInput>
    NOT?: Enumerable<MenuWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    restaurantId?: StringFilter | string
    Dish?: DishListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Restaurant?: RestaurantOrderByWithRelationInput
    restaurantId?: SortOrder
    Dish?: DishOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = {
    id?: string
  }

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<MenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MenuScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    restaurantId?: StringWithAggregatesFilter | string
  }

  export type RestaurantWhereInput = {
    AND?: Enumerable<RestaurantWhereInput>
    OR?: Enumerable<RestaurantWhereInput>
    NOT?: Enumerable<RestaurantWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    address?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Menu?: MenuListRelationFilter
    RestaurantCuisine?: RestaurantCuisineListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Menu?: MenuOrderByRelationAggregateInput
    RestaurantCuisine?: RestaurantCuisineOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = {
    id?: string
  }

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    OR?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RestaurantCuisineWhereInput = {
    AND?: Enumerable<RestaurantCuisineWhereInput>
    OR?: Enumerable<RestaurantCuisineWhereInput>
    NOT?: Enumerable<RestaurantCuisineWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    cuisineId?: StringFilter | string
    restaurantId?: StringFilter | string
    Cuisine?: XOR<CuisineRelationFilter, CuisineWhereInput>
    Restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type RestaurantCuisineOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuisineId?: SortOrder
    restaurantId?: SortOrder
    Cuisine?: CuisineOrderByWithRelationInput
    Restaurant?: RestaurantOrderByWithRelationInput
  }

  export type RestaurantCuisineWhereUniqueInput = {
    id?: string
  }

  export type RestaurantCuisineOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuisineId?: SortOrder
    restaurantId?: SortOrder
    _count?: RestaurantCuisineCountOrderByAggregateInput
    _max?: RestaurantCuisineMaxOrderByAggregateInput
    _min?: RestaurantCuisineMinOrderByAggregateInput
  }

  export type RestaurantCuisineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RestaurantCuisineScalarWhereWithAggregatesInput>
    OR?: Enumerable<RestaurantCuisineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RestaurantCuisineScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    cuisineId?: StringWithAggregatesFilter | string
    restaurantId?: StringWithAggregatesFilter | string
  }

  export type CuisineCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RestaurantCuisine?: RestaurantCuisineCreateNestedManyWithoutCuisineInput
  }

  export type CuisineUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RestaurantCuisine?: RestaurantCuisineUncheckedCreateNestedManyWithoutCuisineInput
  }

  export type CuisineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RestaurantCuisine?: RestaurantCuisineUpdateManyWithoutCuisineNestedInput
  }

  export type CuisineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RestaurantCuisine?: RestaurantCuisineUncheckedUpdateManyWithoutCuisineNestedInput
  }

  export type CuisineCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu: MenuCreateNestedOneWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuId: string
  }

  export type DishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUpdateOneRequiredWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type DishCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuId: string
  }

  export type DishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurant: RestaurantCreateNestedOneWithoutMenuInput
    Dish?: DishCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: string
    Dish?: DishUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurant?: RestaurantUpdateOneRequiredWithoutMenuNestedInput
    Dish?: DishUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    Dish?: DishUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: string
  }

  export type MenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuCreateNestedManyWithoutRestaurantInput
    RestaurantCuisine?: RestaurantCuisineCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    RestaurantCuisine?: RestaurantCuisineUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUpdateManyWithoutRestaurantNestedInput
    RestaurantCuisine?: RestaurantCuisineUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    RestaurantCuisine?: RestaurantCuisineUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCuisineCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cuisine: CuisineCreateNestedOneWithoutRestaurantCuisineInput
    Restaurant: RestaurantCreateNestedOneWithoutRestaurantCuisineInput
  }

  export type RestaurantCuisineUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisineId: string
    restaurantId: string
  }

  export type RestaurantCuisineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cuisine?: CuisineUpdateOneRequiredWithoutRestaurantCuisineNestedInput
    Restaurant?: RestaurantUpdateOneRequiredWithoutRestaurantCuisineNestedInput
  }

  export type RestaurantCuisineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuisineId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCuisineCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisineId: string
    restaurantId: string
  }

  export type RestaurantCuisineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCuisineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuisineId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RestaurantCuisineListRelationFilter = {
    every?: RestaurantCuisineWhereInput
    some?: RestaurantCuisineWhereInput
    none?: RestaurantCuisineWhereInput
  }

  export type RestaurantCuisineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuisineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CuisineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CuisineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuId?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuId?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuId?: SortOrder
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type DishListRelationFilter = {
    every?: DishWhereInput
    some?: DishWhereInput
    none?: DishWhereInput
  }

  export type DishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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

  export type CuisineRelationFilter = {
    is?: CuisineWhereInput
    isNot?: CuisineWhereInput
  }

  export type RestaurantCuisineCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuisineId?: SortOrder
    restaurantId?: SortOrder
  }

  export type RestaurantCuisineMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuisineId?: SortOrder
    restaurantId?: SortOrder
  }

  export type RestaurantCuisineMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuisineId?: SortOrder
    restaurantId?: SortOrder
  }

  export type RestaurantCuisineCreateNestedManyWithoutCuisineInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutCuisineInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutCuisineInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutCuisineInput>
    createMany?: RestaurantCuisineCreateManyCuisineInputEnvelope
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
  }

  export type RestaurantCuisineUncheckedCreateNestedManyWithoutCuisineInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutCuisineInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutCuisineInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutCuisineInput>
    createMany?: RestaurantCuisineCreateManyCuisineInputEnvelope
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RestaurantCuisineUpdateManyWithoutCuisineNestedInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutCuisineInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutCuisineInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutCuisineInput>
    upsert?: Enumerable<RestaurantCuisineUpsertWithWhereUniqueWithoutCuisineInput>
    createMany?: RestaurantCuisineCreateManyCuisineInputEnvelope
    set?: Enumerable<RestaurantCuisineWhereUniqueInput>
    disconnect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    delete?: Enumerable<RestaurantCuisineWhereUniqueInput>
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    update?: Enumerable<RestaurantCuisineUpdateWithWhereUniqueWithoutCuisineInput>
    updateMany?: Enumerable<RestaurantCuisineUpdateManyWithWhereWithoutCuisineInput>
    deleteMany?: Enumerable<RestaurantCuisineScalarWhereInput>
  }

  export type RestaurantCuisineUncheckedUpdateManyWithoutCuisineNestedInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutCuisineInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutCuisineInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutCuisineInput>
    upsert?: Enumerable<RestaurantCuisineUpsertWithWhereUniqueWithoutCuisineInput>
    createMany?: RestaurantCuisineCreateManyCuisineInputEnvelope
    set?: Enumerable<RestaurantCuisineWhereUniqueInput>
    disconnect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    delete?: Enumerable<RestaurantCuisineWhereUniqueInput>
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    update?: Enumerable<RestaurantCuisineUpdateWithWhereUniqueWithoutCuisineInput>
    updateMany?: Enumerable<RestaurantCuisineUpdateManyWithWhereWithoutCuisineInput>
    deleteMany?: Enumerable<RestaurantCuisineScalarWhereInput>
  }

  export type MenuCreateNestedOneWithoutDishInput = {
    create?: XOR<MenuCreateWithoutDishInput, MenuUncheckedCreateWithoutDishInput>
    connectOrCreate?: MenuCreateOrConnectWithoutDishInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutDishNestedInput = {
    create?: XOR<MenuCreateWithoutDishInput, MenuUncheckedCreateWithoutDishInput>
    connectOrCreate?: MenuCreateOrConnectWithoutDishInput
    upsert?: MenuUpsertWithoutDishInput
    connect?: MenuWhereUniqueInput
    update?: XOR<MenuUpdateWithoutDishInput, MenuUncheckedUpdateWithoutDishInput>
  }

  export type RestaurantCreateNestedOneWithoutMenuInput = {
    create?: XOR<RestaurantCreateWithoutMenuInput, RestaurantUncheckedCreateWithoutMenuInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuInput
    connect?: RestaurantWhereUniqueInput
  }

  export type DishCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<DishCreateWithoutMenuInput>, Enumerable<DishUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DishCreateOrConnectWithoutMenuInput>
    createMany?: DishCreateManyMenuInputEnvelope
    connect?: Enumerable<DishWhereUniqueInput>
  }

  export type DishUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<DishCreateWithoutMenuInput>, Enumerable<DishUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DishCreateOrConnectWithoutMenuInput>
    createMany?: DishCreateManyMenuInputEnvelope
    connect?: Enumerable<DishWhereUniqueInput>
  }

  export type RestaurantUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<RestaurantCreateWithoutMenuInput, RestaurantUncheckedCreateWithoutMenuInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuInput
    upsert?: RestaurantUpsertWithoutMenuInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<RestaurantUpdateWithoutMenuInput, RestaurantUncheckedUpdateWithoutMenuInput>
  }

  export type DishUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<DishCreateWithoutMenuInput>, Enumerable<DishUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DishCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<DishUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: DishCreateManyMenuInputEnvelope
    set?: Enumerable<DishWhereUniqueInput>
    disconnect?: Enumerable<DishWhereUniqueInput>
    delete?: Enumerable<DishWhereUniqueInput>
    connect?: Enumerable<DishWhereUniqueInput>
    update?: Enumerable<DishUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<DishUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<DishScalarWhereInput>
  }

  export type DishUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<DishCreateWithoutMenuInput>, Enumerable<DishUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DishCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<DishUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: DishCreateManyMenuInputEnvelope
    set?: Enumerable<DishWhereUniqueInput>
    disconnect?: Enumerable<DishWhereUniqueInput>
    delete?: Enumerable<DishWhereUniqueInput>
    connect?: Enumerable<DishWhereUniqueInput>
    update?: Enumerable<DishUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<DishUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<DishScalarWhereInput>
  }

  export type MenuCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type RestaurantCuisineCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutRestaurantInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutRestaurantInput>
    createMany?: RestaurantCuisineCreateManyRestaurantInputEnvelope
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
  }

  export type MenuUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type RestaurantCuisineUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutRestaurantInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutRestaurantInput>
    createMany?: RestaurantCuisineCreateManyRestaurantInputEnvelope
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MenuUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type RestaurantCuisineUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutRestaurantInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<RestaurantCuisineUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: RestaurantCuisineCreateManyRestaurantInputEnvelope
    set?: Enumerable<RestaurantCuisineWhereUniqueInput>
    disconnect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    delete?: Enumerable<RestaurantCuisineWhereUniqueInput>
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    update?: Enumerable<RestaurantCuisineUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<RestaurantCuisineUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<RestaurantCuisineScalarWhereInput>
  }

  export type MenuUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type RestaurantCuisineUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Enumerable<RestaurantCuisineCreateWithoutRestaurantInput>, Enumerable<RestaurantCuisineUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<RestaurantCuisineCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<RestaurantCuisineUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: RestaurantCuisineCreateManyRestaurantInputEnvelope
    set?: Enumerable<RestaurantCuisineWhereUniqueInput>
    disconnect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    delete?: Enumerable<RestaurantCuisineWhereUniqueInput>
    connect?: Enumerable<RestaurantCuisineWhereUniqueInput>
    update?: Enumerable<RestaurantCuisineUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<RestaurantCuisineUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<RestaurantCuisineScalarWhereInput>
  }

  export type CuisineCreateNestedOneWithoutRestaurantCuisineInput = {
    create?: XOR<CuisineCreateWithoutRestaurantCuisineInput, CuisineUncheckedCreateWithoutRestaurantCuisineInput>
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantCuisineInput
    connect?: CuisineWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutRestaurantCuisineInput = {
    create?: XOR<RestaurantCreateWithoutRestaurantCuisineInput, RestaurantUncheckedCreateWithoutRestaurantCuisineInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRestaurantCuisineInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CuisineUpdateOneRequiredWithoutRestaurantCuisineNestedInput = {
    create?: XOR<CuisineCreateWithoutRestaurantCuisineInput, CuisineUncheckedCreateWithoutRestaurantCuisineInput>
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantCuisineInput
    upsert?: CuisineUpsertWithoutRestaurantCuisineInput
    connect?: CuisineWhereUniqueInput
    update?: XOR<CuisineUpdateWithoutRestaurantCuisineInput, CuisineUncheckedUpdateWithoutRestaurantCuisineInput>
  }

  export type RestaurantUpdateOneRequiredWithoutRestaurantCuisineNestedInput = {
    create?: XOR<RestaurantCreateWithoutRestaurantCuisineInput, RestaurantUncheckedCreateWithoutRestaurantCuisineInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRestaurantCuisineInput
    upsert?: RestaurantUpsertWithoutRestaurantCuisineInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<RestaurantUpdateWithoutRestaurantCuisineInput, RestaurantUncheckedUpdateWithoutRestaurantCuisineInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type RestaurantCuisineCreateWithoutCuisineInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurant: RestaurantCreateNestedOneWithoutRestaurantCuisineInput
  }

  export type RestaurantCuisineUncheckedCreateWithoutCuisineInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: string
  }

  export type RestaurantCuisineCreateOrConnectWithoutCuisineInput = {
    where: RestaurantCuisineWhereUniqueInput
    create: XOR<RestaurantCuisineCreateWithoutCuisineInput, RestaurantCuisineUncheckedCreateWithoutCuisineInput>
  }

  export type RestaurantCuisineCreateManyCuisineInputEnvelope = {
    data: Enumerable<RestaurantCuisineCreateManyCuisineInput>
    skipDuplicates?: boolean
  }

  export type RestaurantCuisineUpsertWithWhereUniqueWithoutCuisineInput = {
    where: RestaurantCuisineWhereUniqueInput
    update: XOR<RestaurantCuisineUpdateWithoutCuisineInput, RestaurantCuisineUncheckedUpdateWithoutCuisineInput>
    create: XOR<RestaurantCuisineCreateWithoutCuisineInput, RestaurantCuisineUncheckedCreateWithoutCuisineInput>
  }

  export type RestaurantCuisineUpdateWithWhereUniqueWithoutCuisineInput = {
    where: RestaurantCuisineWhereUniqueInput
    data: XOR<RestaurantCuisineUpdateWithoutCuisineInput, RestaurantCuisineUncheckedUpdateWithoutCuisineInput>
  }

  export type RestaurantCuisineUpdateManyWithWhereWithoutCuisineInput = {
    where: RestaurantCuisineScalarWhereInput
    data: XOR<RestaurantCuisineUpdateManyMutationInput, RestaurantCuisineUncheckedUpdateManyWithoutRestaurantCuisineInput>
  }

  export type RestaurantCuisineScalarWhereInput = {
    AND?: Enumerable<RestaurantCuisineScalarWhereInput>
    OR?: Enumerable<RestaurantCuisineScalarWhereInput>
    NOT?: Enumerable<RestaurantCuisineScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    cuisineId?: StringFilter | string
    restaurantId?: StringFilter | string
  }

  export type MenuCreateWithoutDishInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurant: RestaurantCreateNestedOneWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutDishInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: string
  }

  export type MenuCreateOrConnectWithoutDishInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutDishInput, MenuUncheckedCreateWithoutDishInput>
  }

  export type MenuUpsertWithoutDishInput = {
    update: XOR<MenuUpdateWithoutDishInput, MenuUncheckedUpdateWithoutDishInput>
    create: XOR<MenuCreateWithoutDishInput, MenuUncheckedCreateWithoutDishInput>
  }

  export type MenuUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurant?: RestaurantUpdateOneRequiredWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCreateWithoutMenuInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RestaurantCuisine?: RestaurantCuisineCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMenuInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RestaurantCuisine?: RestaurantCuisineUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMenuInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenuInput, RestaurantUncheckedCreateWithoutMenuInput>
  }

  export type DishCreateWithoutMenuInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishUncheckedCreateWithoutMenuInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishCreateOrConnectWithoutMenuInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutMenuInput, DishUncheckedCreateWithoutMenuInput>
  }

  export type DishCreateManyMenuInputEnvelope = {
    data: Enumerable<DishCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutMenuInput = {
    update: XOR<RestaurantUpdateWithoutMenuInput, RestaurantUncheckedUpdateWithoutMenuInput>
    create: XOR<RestaurantCreateWithoutMenuInput, RestaurantUncheckedCreateWithoutMenuInput>
  }

  export type RestaurantUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RestaurantCuisine?: RestaurantCuisineUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RestaurantCuisine?: RestaurantCuisineUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type DishUpsertWithWhereUniqueWithoutMenuInput = {
    where: DishWhereUniqueInput
    update: XOR<DishUpdateWithoutMenuInput, DishUncheckedUpdateWithoutMenuInput>
    create: XOR<DishCreateWithoutMenuInput, DishUncheckedCreateWithoutMenuInput>
  }

  export type DishUpdateWithWhereUniqueWithoutMenuInput = {
    where: DishWhereUniqueInput
    data: XOR<DishUpdateWithoutMenuInput, DishUncheckedUpdateWithoutMenuInput>
  }

  export type DishUpdateManyWithWhereWithoutMenuInput = {
    where: DishScalarWhereInput
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyWithoutDishInput>
  }

  export type DishScalarWhereInput = {
    AND?: Enumerable<DishScalarWhereInput>
    OR?: Enumerable<DishScalarWhereInput>
    NOT?: Enumerable<DishScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    menuId?: StringFilter | string
  }

  export type MenuCreateWithoutRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Dish?: DishCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Dish?: DishUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuCreateManyRestaurantInputEnvelope = {
    data: Enumerable<MenuCreateManyRestaurantInput>
    skipDuplicates?: boolean
  }

  export type RestaurantCuisineCreateWithoutRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cuisine: CuisineCreateNestedOneWithoutRestaurantCuisineInput
  }

  export type RestaurantCuisineUncheckedCreateWithoutRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisineId: string
  }

  export type RestaurantCuisineCreateOrConnectWithoutRestaurantInput = {
    where: RestaurantCuisineWhereUniqueInput
    create: XOR<RestaurantCuisineCreateWithoutRestaurantInput, RestaurantCuisineUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantCuisineCreateManyRestaurantInputEnvelope = {
    data: Enumerable<RestaurantCuisineCreateManyRestaurantInput>
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuScalarWhereInput = {
    AND?: Enumerable<MenuScalarWhereInput>
    OR?: Enumerable<MenuScalarWhereInput>
    NOT?: Enumerable<MenuScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    restaurantId?: StringFilter | string
  }

  export type RestaurantCuisineUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantCuisineWhereUniqueInput
    update: XOR<RestaurantCuisineUpdateWithoutRestaurantInput, RestaurantCuisineUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RestaurantCuisineCreateWithoutRestaurantInput, RestaurantCuisineUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantCuisineUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantCuisineWhereUniqueInput
    data: XOR<RestaurantCuisineUpdateWithoutRestaurantInput, RestaurantCuisineUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantCuisineUpdateManyWithWhereWithoutRestaurantInput = {
    where: RestaurantCuisineScalarWhereInput
    data: XOR<RestaurantCuisineUpdateManyMutationInput, RestaurantCuisineUncheckedUpdateManyWithoutRestaurantCuisineInput>
  }

  export type CuisineCreateWithoutRestaurantCuisineInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineUncheckedCreateWithoutRestaurantCuisineInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineCreateOrConnectWithoutRestaurantCuisineInput = {
    where: CuisineWhereUniqueInput
    create: XOR<CuisineCreateWithoutRestaurantCuisineInput, CuisineUncheckedCreateWithoutRestaurantCuisineInput>
  }

  export type RestaurantCreateWithoutRestaurantCuisineInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutRestaurantCuisineInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutRestaurantCuisineInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutRestaurantCuisineInput, RestaurantUncheckedCreateWithoutRestaurantCuisineInput>
  }

  export type CuisineUpsertWithoutRestaurantCuisineInput = {
    update: XOR<CuisineUpdateWithoutRestaurantCuisineInput, CuisineUncheckedUpdateWithoutRestaurantCuisineInput>
    create: XOR<CuisineCreateWithoutRestaurantCuisineInput, CuisineUncheckedCreateWithoutRestaurantCuisineInput>
  }

  export type CuisineUpdateWithoutRestaurantCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUncheckedUpdateWithoutRestaurantCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUpsertWithoutRestaurantCuisineInput = {
    update: XOR<RestaurantUpdateWithoutRestaurantCuisineInput, RestaurantUncheckedUpdateWithoutRestaurantCuisineInput>
    create: XOR<RestaurantCreateWithoutRestaurantCuisineInput, RestaurantUncheckedCreateWithoutRestaurantCuisineInput>
  }

  export type RestaurantUpdateWithoutRestaurantCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutRestaurantCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCuisineCreateManyCuisineInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: string
  }

  export type RestaurantCuisineUpdateWithoutCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurant?: RestaurantUpdateOneRequiredWithoutRestaurantCuisineNestedInput
  }

  export type RestaurantCuisineUncheckedUpdateWithoutCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCuisineUncheckedUpdateManyWithoutRestaurantCuisineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type DishCreateManyMenuInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateManyRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantCuisineCreateManyRestaurantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisineId: string
  }

  export type MenuUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dish?: DishUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dish?: DishUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCuisineUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cuisine?: CuisineUpdateOneRequiredWithoutRestaurantCuisineNestedInput
  }

  export type RestaurantCuisineUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuisineId?: StringFieldUpdateOperationsInput | string
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