import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerFilm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Film, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly coverImagePath: string;
  readonly type: string;
  readonly screenshots?: (Screenshot | null)[] | null;
  readonly behindSceneShots?: (BehindSceneShot | null)[] | null;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFilm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Film, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly coverImagePath: string;
  readonly type: string;
  readonly screenshots: AsyncCollection<Screenshot>;
  readonly behindSceneShots: AsyncCollection<BehindSceneShot>;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Film = LazyLoading extends LazyLoadingDisabled ? EagerFilm : LazyFilm

export declare const Film: (new (init: ModelInit<Film>) => Film) & {
  copyOf(source: Film, mutator: (draft: MutableModel<Film>) => MutableModel<Film> | void): Film;
}

type EagerScreenshot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Screenshot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imagePath: string;
  readonly film?: Film | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly filmScreenshotsId?: string | null;
}

type LazyScreenshot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Screenshot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imagePath: string;
  readonly film: AsyncItem<Film | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly filmScreenshotsId?: string | null;
}

export declare type Screenshot = LazyLoading extends LazyLoadingDisabled ? EagerScreenshot : LazyScreenshot

export declare const Screenshot: (new (init: ModelInit<Screenshot>) => Screenshot) & {
  copyOf(source: Screenshot, mutator: (draft: MutableModel<Screenshot>) => MutableModel<Screenshot> | void): Screenshot;
}

type EagerBehindSceneShot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BehindSceneShot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imagePath: string;
  readonly film?: Film | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly filmBehindSceneShotsId?: string | null;
}

type LazyBehindSceneShot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BehindSceneShot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imagePath: string;
  readonly film: AsyncItem<Film | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly filmBehindSceneShotsId?: string | null;
}

export declare type BehindSceneShot = LazyLoading extends LazyLoadingDisabled ? EagerBehindSceneShot : LazyBehindSceneShot

export declare const BehindSceneShot: (new (init: ModelInit<BehindSceneShot>) => BehindSceneShot) & {
  copyOf(source: BehindSceneShot, mutator: (draft: MutableModel<BehindSceneShot>) => MutableModel<BehindSceneShot> | void): BehindSceneShot;
}