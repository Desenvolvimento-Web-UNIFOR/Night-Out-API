
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CasaDeShow
 * 
 */
export type CasaDeShow = $Result.DefaultSelection<Prisma.$CasaDeShowPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CasaDeShows
 * const casaDeShows = await prisma.casaDeShow.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CasaDeShows
   * const casaDeShows = await prisma.casaDeShow.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.casaDeShow`: Exposes CRUD operations for the **CasaDeShow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasaDeShows
    * const casaDeShows = await prisma.casaDeShow.findMany()
    * ```
    */
  get casaDeShow(): Prisma.CasaDeShowDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CasaDeShow: 'CasaDeShow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "casaDeShow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CasaDeShow: {
        payload: Prisma.$CasaDeShowPayload<ExtArgs>
        fields: Prisma.CasaDeShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasaDeShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasaDeShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          findFirst: {
            args: Prisma.CasaDeShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasaDeShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          findMany: {
            args: Prisma.CasaDeShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          create: {
            args: Prisma.CasaDeShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          createMany: {
            args: Prisma.CasaDeShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasaDeShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          delete: {
            args: Prisma.CasaDeShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          update: {
            args: Prisma.CasaDeShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          deleteMany: {
            args: Prisma.CasaDeShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasaDeShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasaDeShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>[]
          }
          upsert: {
            args: Prisma.CasaDeShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasaDeShowPayload>
          }
          aggregate: {
            args: Prisma.CasaDeShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasaDeShow>
          }
          groupBy: {
            args: Prisma.CasaDeShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasaDeShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasaDeShowCountArgs<ExtArgs>
            result: $Utils.Optional<CasaDeShowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    casaDeShow?: CasaDeShowOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CasaDeShow
   */

  export type AggregateCasaDeShow = {
    _count: CasaDeShowCountAggregateOutputType | null
    _min: CasaDeShowMinAggregateOutputType | null
    _max: CasaDeShowMaxAggregateOutputType | null
  }

  export type CasaDeShowMinAggregateOutputType = {
    id_usuario: string | null
    nome_fantasia: string | null
    cpf: string | null
    capacidade: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    geo_lat: string | null
    geo_lng: string | null
    created_at: Date | null
  }

  export type CasaDeShowMaxAggregateOutputType = {
    id_usuario: string | null
    nome_fantasia: string | null
    cpf: string | null
    capacidade: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    geo_lat: string | null
    geo_lng: string | null
    created_at: Date | null
  }

  export type CasaDeShowCountAggregateOutputType = {
    id_usuario: number
    nome_fantasia: number
    cpf: number
    capacidade: number
    cep: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    uf: number
    geo_lat: number
    geo_lng: number
    created_at: number
    _all: number
  }


  export type CasaDeShowMinAggregateInputType = {
    id_usuario?: true
    nome_fantasia?: true
    cpf?: true
    capacidade?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    geo_lat?: true
    geo_lng?: true
    created_at?: true
  }

  export type CasaDeShowMaxAggregateInputType = {
    id_usuario?: true
    nome_fantasia?: true
    cpf?: true
    capacidade?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    geo_lat?: true
    geo_lng?: true
    created_at?: true
  }

  export type CasaDeShowCountAggregateInputType = {
    id_usuario?: true
    nome_fantasia?: true
    cpf?: true
    capacidade?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    geo_lat?: true
    geo_lng?: true
    created_at?: true
    _all?: true
  }

  export type CasaDeShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasaDeShow to aggregate.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasaDeShows
    **/
    _count?: true | CasaDeShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasaDeShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasaDeShowMaxAggregateInputType
  }

  export type GetCasaDeShowAggregateType<T extends CasaDeShowAggregateArgs> = {
        [P in keyof T & keyof AggregateCasaDeShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasaDeShow[P]>
      : GetScalarType<T[P], AggregateCasaDeShow[P]>
  }




  export type CasaDeShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasaDeShowWhereInput
    orderBy?: CasaDeShowOrderByWithAggregationInput | CasaDeShowOrderByWithAggregationInput[]
    by: CasaDeShowScalarFieldEnum[] | CasaDeShowScalarFieldEnum
    having?: CasaDeShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasaDeShowCountAggregateInputType | true
    _min?: CasaDeShowMinAggregateInputType
    _max?: CasaDeShowMaxAggregateInputType
  }

  export type CasaDeShowGroupByOutputType = {
    id_usuario: string
    nome_fantasia: string
    cpf: string
    capacidade: string
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    geo_lat: string
    geo_lng: string
    created_at: Date
    _count: CasaDeShowCountAggregateOutputType | null
    _min: CasaDeShowMinAggregateOutputType | null
    _max: CasaDeShowMaxAggregateOutputType | null
  }

  type GetCasaDeShowGroupByPayload<T extends CasaDeShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasaDeShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasaDeShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasaDeShowGroupByOutputType[P]>
            : GetScalarType<T[P], CasaDeShowGroupByOutputType[P]>
        }
      >
    >


  export type CasaDeShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome_fantasia?: boolean
    cpf?: boolean
    capacidade?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    geo_lat?: boolean
    geo_lng?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome_fantasia?: boolean
    cpf?: boolean
    capacidade?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    geo_lat?: boolean
    geo_lng?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome_fantasia?: boolean
    cpf?: boolean
    capacidade?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    geo_lat?: boolean
    geo_lng?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["casaDeShow"]>

  export type CasaDeShowSelectScalar = {
    id_usuario?: boolean
    nome_fantasia?: boolean
    cpf?: boolean
    capacidade?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    geo_lat?: boolean
    geo_lng?: boolean
    created_at?: boolean
  }

  export type CasaDeShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome_fantasia" | "cpf" | "capacidade" | "cep" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "uf" | "geo_lat" | "geo_lng" | "created_at", ExtArgs["result"]["casaDeShow"]>

  export type $CasaDeShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasaDeShow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      nome_fantasia: string
      cpf: string
      capacidade: string
      cep: string
      logradouro: string
      numero: string
      complemento: string
      bairro: string
      cidade: string
      uf: string
      geo_lat: string
      geo_lng: string
      created_at: Date
    }, ExtArgs["result"]["casaDeShow"]>
    composites: {}
  }

  type CasaDeShowGetPayload<S extends boolean | null | undefined | CasaDeShowDefaultArgs> = $Result.GetResult<Prisma.$CasaDeShowPayload, S>

  type CasaDeShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasaDeShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasaDeShowCountAggregateInputType | true
    }

  export interface CasaDeShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasaDeShow'], meta: { name: 'CasaDeShow' } }
    /**
     * Find zero or one CasaDeShow that matches the filter.
     * @param {CasaDeShowFindUniqueArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasaDeShowFindUniqueArgs>(args: SelectSubset<T, CasaDeShowFindUniqueArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CasaDeShow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasaDeShowFindUniqueOrThrowArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasaDeShowFindUniqueOrThrowArgs>(args: SelectSubset<T, CasaDeShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasaDeShow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindFirstArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasaDeShowFindFirstArgs>(args?: SelectSubset<T, CasaDeShowFindFirstArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasaDeShow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindFirstOrThrowArgs} args - Arguments to find a CasaDeShow
     * @example
     * // Get one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasaDeShowFindFirstOrThrowArgs>(args?: SelectSubset<T, CasaDeShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CasaDeShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasaDeShows
     * const casaDeShows = await prisma.casaDeShow.findMany()
     * 
     * // Get first 10 CasaDeShows
     * const casaDeShows = await prisma.casaDeShow.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const casaDeShowWithId_usuarioOnly = await prisma.casaDeShow.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends CasaDeShowFindManyArgs>(args?: SelectSubset<T, CasaDeShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CasaDeShow.
     * @param {CasaDeShowCreateArgs} args - Arguments to create a CasaDeShow.
     * @example
     * // Create one CasaDeShow
     * const CasaDeShow = await prisma.casaDeShow.create({
     *   data: {
     *     // ... data to create a CasaDeShow
     *   }
     * })
     * 
     */
    create<T extends CasaDeShowCreateArgs>(args: SelectSubset<T, CasaDeShowCreateArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CasaDeShows.
     * @param {CasaDeShowCreateManyArgs} args - Arguments to create many CasaDeShows.
     * @example
     * // Create many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasaDeShowCreateManyArgs>(args?: SelectSubset<T, CasaDeShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasaDeShows and returns the data saved in the database.
     * @param {CasaDeShowCreateManyAndReturnArgs} args - Arguments to create many CasaDeShows.
     * @example
     * // Create many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasaDeShows and only return the `id_usuario`
     * const casaDeShowWithId_usuarioOnly = await prisma.casaDeShow.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasaDeShowCreateManyAndReturnArgs>(args?: SelectSubset<T, CasaDeShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CasaDeShow.
     * @param {CasaDeShowDeleteArgs} args - Arguments to delete one CasaDeShow.
     * @example
     * // Delete one CasaDeShow
     * const CasaDeShow = await prisma.casaDeShow.delete({
     *   where: {
     *     // ... filter to delete one CasaDeShow
     *   }
     * })
     * 
     */
    delete<T extends CasaDeShowDeleteArgs>(args: SelectSubset<T, CasaDeShowDeleteArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CasaDeShow.
     * @param {CasaDeShowUpdateArgs} args - Arguments to update one CasaDeShow.
     * @example
     * // Update one CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasaDeShowUpdateArgs>(args: SelectSubset<T, CasaDeShowUpdateArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CasaDeShows.
     * @param {CasaDeShowDeleteManyArgs} args - Arguments to filter CasaDeShows to delete.
     * @example
     * // Delete a few CasaDeShows
     * const { count } = await prisma.casaDeShow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasaDeShowDeleteManyArgs>(args?: SelectSubset<T, CasaDeShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasaDeShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasaDeShowUpdateManyArgs>(args: SelectSubset<T, CasaDeShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasaDeShows and returns the data updated in the database.
     * @param {CasaDeShowUpdateManyAndReturnArgs} args - Arguments to update many CasaDeShows.
     * @example
     * // Update many CasaDeShows
     * const casaDeShow = await prisma.casaDeShow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CasaDeShows and only return the `id_usuario`
     * const casaDeShowWithId_usuarioOnly = await prisma.casaDeShow.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasaDeShowUpdateManyAndReturnArgs>(args: SelectSubset<T, CasaDeShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CasaDeShow.
     * @param {CasaDeShowUpsertArgs} args - Arguments to update or create a CasaDeShow.
     * @example
     * // Update or create a CasaDeShow
     * const casaDeShow = await prisma.casaDeShow.upsert({
     *   create: {
     *     // ... data to create a CasaDeShow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasaDeShow we want to update
     *   }
     * })
     */
    upsert<T extends CasaDeShowUpsertArgs>(args: SelectSubset<T, CasaDeShowUpsertArgs<ExtArgs>>): Prisma__CasaDeShowClient<$Result.GetResult<Prisma.$CasaDeShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CasaDeShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowCountArgs} args - Arguments to filter CasaDeShows to count.
     * @example
     * // Count the number of CasaDeShows
     * const count = await prisma.casaDeShow.count({
     *   where: {
     *     // ... the filter for the CasaDeShows we want to count
     *   }
     * })
    **/
    count<T extends CasaDeShowCountArgs>(
      args?: Subset<T, CasaDeShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasaDeShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasaDeShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasaDeShowAggregateArgs>(args: Subset<T, CasaDeShowAggregateArgs>): Prisma.PrismaPromise<GetCasaDeShowAggregateType<T>>

    /**
     * Group by CasaDeShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasaDeShowGroupByArgs} args - Group by arguments.
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
      T extends CasaDeShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasaDeShowGroupByArgs['orderBy'] }
        : { orderBy?: CasaDeShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CasaDeShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasaDeShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasaDeShow model
   */
  readonly fields: CasaDeShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasaDeShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasaDeShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CasaDeShow model
   */
  interface CasaDeShowFieldRefs {
    readonly id_usuario: FieldRef<"CasaDeShow", 'String'>
    readonly nome_fantasia: FieldRef<"CasaDeShow", 'String'>
    readonly cpf: FieldRef<"CasaDeShow", 'String'>
    readonly capacidade: FieldRef<"CasaDeShow", 'String'>
    readonly cep: FieldRef<"CasaDeShow", 'String'>
    readonly logradouro: FieldRef<"CasaDeShow", 'String'>
    readonly numero: FieldRef<"CasaDeShow", 'String'>
    readonly complemento: FieldRef<"CasaDeShow", 'String'>
    readonly bairro: FieldRef<"CasaDeShow", 'String'>
    readonly cidade: FieldRef<"CasaDeShow", 'String'>
    readonly uf: FieldRef<"CasaDeShow", 'String'>
    readonly geo_lat: FieldRef<"CasaDeShow", 'String'>
    readonly geo_lng: FieldRef<"CasaDeShow", 'String'>
    readonly created_at: FieldRef<"CasaDeShow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasaDeShow findUnique
   */
  export type CasaDeShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow findUniqueOrThrow
   */
  export type CasaDeShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow findFirst
   */
  export type CasaDeShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasaDeShows.
     */
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow findFirstOrThrow
   */
  export type CasaDeShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShow to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasaDeShows.
     */
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow findMany
   */
  export type CasaDeShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter, which CasaDeShows to fetch.
     */
    where?: CasaDeShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasaDeShows to fetch.
     */
    orderBy?: CasaDeShowOrderByWithRelationInput | CasaDeShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasaDeShows.
     */
    cursor?: CasaDeShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasaDeShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasaDeShows.
     */
    skip?: number
    distinct?: CasaDeShowScalarFieldEnum | CasaDeShowScalarFieldEnum[]
  }

  /**
   * CasaDeShow create
   */
  export type CasaDeShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data needed to create a CasaDeShow.
     */
    data: XOR<CasaDeShowCreateInput, CasaDeShowUncheckedCreateInput>
  }

  /**
   * CasaDeShow createMany
   */
  export type CasaDeShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasaDeShows.
     */
    data: CasaDeShowCreateManyInput | CasaDeShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasaDeShow createManyAndReturn
   */
  export type CasaDeShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data used to create many CasaDeShows.
     */
    data: CasaDeShowCreateManyInput | CasaDeShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasaDeShow update
   */
  export type CasaDeShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data needed to update a CasaDeShow.
     */
    data: XOR<CasaDeShowUpdateInput, CasaDeShowUncheckedUpdateInput>
    /**
     * Choose, which CasaDeShow to update.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow updateMany
   */
  export type CasaDeShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasaDeShows.
     */
    data: XOR<CasaDeShowUpdateManyMutationInput, CasaDeShowUncheckedUpdateManyInput>
    /**
     * Filter which CasaDeShows to update
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to update.
     */
    limit?: number
  }

  /**
   * CasaDeShow updateManyAndReturn
   */
  export type CasaDeShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The data used to update CasaDeShows.
     */
    data: XOR<CasaDeShowUpdateManyMutationInput, CasaDeShowUncheckedUpdateManyInput>
    /**
     * Filter which CasaDeShows to update
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to update.
     */
    limit?: number
  }

  /**
   * CasaDeShow upsert
   */
  export type CasaDeShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * The filter to search for the CasaDeShow to update in case it exists.
     */
    where: CasaDeShowWhereUniqueInput
    /**
     * In case the CasaDeShow found by the `where` argument doesn't exist, create a new CasaDeShow with this data.
     */
    create: XOR<CasaDeShowCreateInput, CasaDeShowUncheckedCreateInput>
    /**
     * In case the CasaDeShow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasaDeShowUpdateInput, CasaDeShowUncheckedUpdateInput>
  }

  /**
   * CasaDeShow delete
   */
  export type CasaDeShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
    /**
     * Filter which CasaDeShow to delete.
     */
    where: CasaDeShowWhereUniqueInput
  }

  /**
   * CasaDeShow deleteMany
   */
  export type CasaDeShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasaDeShows to delete
     */
    where?: CasaDeShowWhereInput
    /**
     * Limit how many CasaDeShows to delete.
     */
    limit?: number
  }

  /**
   * CasaDeShow without action
   */
  export type CasaDeShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasaDeShow
     */
    select?: CasaDeShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasaDeShow
     */
    omit?: CasaDeShowOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CasaDeShowScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome_fantasia: 'nome_fantasia',
    cpf: 'cpf',
    capacidade: 'capacidade',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    uf: 'uf',
    geo_lat: 'geo_lat',
    geo_lng: 'geo_lng',
    created_at: 'created_at'
  };

  export type CasaDeShowScalarFieldEnum = (typeof CasaDeShowScalarFieldEnum)[keyof typeof CasaDeShowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CasaDeShowWhereInput = {
    AND?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    OR?: CasaDeShowWhereInput[]
    NOT?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    id_usuario?: StringFilter<"CasaDeShow"> | string
    nome_fantasia?: StringFilter<"CasaDeShow"> | string
    cpf?: StringFilter<"CasaDeShow"> | string
    capacidade?: StringFilter<"CasaDeShow"> | string
    cep?: StringFilter<"CasaDeShow"> | string
    logradouro?: StringFilter<"CasaDeShow"> | string
    numero?: StringFilter<"CasaDeShow"> | string
    complemento?: StringFilter<"CasaDeShow"> | string
    bairro?: StringFilter<"CasaDeShow"> | string
    cidade?: StringFilter<"CasaDeShow"> | string
    uf?: StringFilter<"CasaDeShow"> | string
    geo_lat?: StringFilter<"CasaDeShow"> | string
    geo_lng?: StringFilter<"CasaDeShow"> | string
    created_at?: DateTimeFilter<"CasaDeShow"> | Date | string
  }

  export type CasaDeShowOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome_fantasia?: SortOrder
    cpf?: SortOrder
    capacidade?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    geo_lat?: SortOrder
    geo_lng?: SortOrder
    created_at?: SortOrder
  }

  export type CasaDeShowWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    AND?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    OR?: CasaDeShowWhereInput[]
    NOT?: CasaDeShowWhereInput | CasaDeShowWhereInput[]
    nome_fantasia?: StringFilter<"CasaDeShow"> | string
    cpf?: StringFilter<"CasaDeShow"> | string
    capacidade?: StringFilter<"CasaDeShow"> | string
    cep?: StringFilter<"CasaDeShow"> | string
    logradouro?: StringFilter<"CasaDeShow"> | string
    numero?: StringFilter<"CasaDeShow"> | string
    complemento?: StringFilter<"CasaDeShow"> | string
    bairro?: StringFilter<"CasaDeShow"> | string
    cidade?: StringFilter<"CasaDeShow"> | string
    uf?: StringFilter<"CasaDeShow"> | string
    geo_lat?: StringFilter<"CasaDeShow"> | string
    geo_lng?: StringFilter<"CasaDeShow"> | string
    created_at?: DateTimeFilter<"CasaDeShow"> | Date | string
  }, "id_usuario">

  export type CasaDeShowOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome_fantasia?: SortOrder
    cpf?: SortOrder
    capacidade?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    geo_lat?: SortOrder
    geo_lng?: SortOrder
    created_at?: SortOrder
    _count?: CasaDeShowCountOrderByAggregateInput
    _max?: CasaDeShowMaxOrderByAggregateInput
    _min?: CasaDeShowMinOrderByAggregateInput
  }

  export type CasaDeShowScalarWhereWithAggregatesInput = {
    AND?: CasaDeShowScalarWhereWithAggregatesInput | CasaDeShowScalarWhereWithAggregatesInput[]
    OR?: CasaDeShowScalarWhereWithAggregatesInput[]
    NOT?: CasaDeShowScalarWhereWithAggregatesInput | CasaDeShowScalarWhereWithAggregatesInput[]
    id_usuario?: StringWithAggregatesFilter<"CasaDeShow"> | string
    nome_fantasia?: StringWithAggregatesFilter<"CasaDeShow"> | string
    cpf?: StringWithAggregatesFilter<"CasaDeShow"> | string
    capacidade?: StringWithAggregatesFilter<"CasaDeShow"> | string
    cep?: StringWithAggregatesFilter<"CasaDeShow"> | string
    logradouro?: StringWithAggregatesFilter<"CasaDeShow"> | string
    numero?: StringWithAggregatesFilter<"CasaDeShow"> | string
    complemento?: StringWithAggregatesFilter<"CasaDeShow"> | string
    bairro?: StringWithAggregatesFilter<"CasaDeShow"> | string
    cidade?: StringWithAggregatesFilter<"CasaDeShow"> | string
    uf?: StringWithAggregatesFilter<"CasaDeShow"> | string
    geo_lat?: StringWithAggregatesFilter<"CasaDeShow"> | string
    geo_lng?: StringWithAggregatesFilter<"CasaDeShow"> | string
    created_at?: DateTimeWithAggregatesFilter<"CasaDeShow"> | Date | string
  }

  export type CasaDeShowCreateInput = {
    id_usuario?: string
    nome_fantasia: string
    cpf: string
    capacidade: string
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    geo_lat: string
    geo_lng: string
    created_at?: Date | string
  }

  export type CasaDeShowUncheckedCreateInput = {
    id_usuario?: string
    nome_fantasia: string
    cpf: string
    capacidade: string
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    geo_lat: string
    geo_lng: string
    created_at?: Date | string
  }

  export type CasaDeShowUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    capacidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    geo_lat?: StringFieldUpdateOperationsInput | string
    geo_lng?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasaDeShowUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    capacidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    geo_lat?: StringFieldUpdateOperationsInput | string
    geo_lng?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasaDeShowCreateManyInput = {
    id_usuario?: string
    nome_fantasia: string
    cpf: string
    capacidade: string
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    geo_lat: string
    geo_lng: string
    created_at?: Date | string
  }

  export type CasaDeShowUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    capacidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    geo_lat?: StringFieldUpdateOperationsInput | string
    geo_lng?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasaDeShowUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    capacidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    geo_lat?: StringFieldUpdateOperationsInput | string
    geo_lng?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CasaDeShowCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_fantasia?: SortOrder
    cpf?: SortOrder
    capacidade?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    geo_lat?: SortOrder
    geo_lng?: SortOrder
    created_at?: SortOrder
  }

  export type CasaDeShowMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_fantasia?: SortOrder
    cpf?: SortOrder
    capacidade?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    geo_lat?: SortOrder
    geo_lng?: SortOrder
    created_at?: SortOrder
  }

  export type CasaDeShowMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_fantasia?: SortOrder
    cpf?: SortOrder
    capacidade?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    geo_lat?: SortOrder
    geo_lng?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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