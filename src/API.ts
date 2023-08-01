/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFilmInput = {
  id?: string | null,
  title: string,
  description: string,
  coverImagePath: string,
  type: string,
  videoUrl?: string | null,
  _version?: number | null,
};

export type ModelFilmConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverImagePath?: ModelStringInput | null,
  type?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  and?: Array< ModelFilmConditionInput | null > | null,
  or?: Array< ModelFilmConditionInput | null > | null,
  not?: ModelFilmConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Film = {
  __typename: "Film",
  id: string,
  title: string,
  description: string,
  coverImagePath: string,
  type: string,
  screenshots?: ModelScreenshotConnection | null,
  behindSceneShots?: ModelBehindSceneShotConnection | null,
  videoUrl?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelScreenshotConnection = {
  __typename: "ModelScreenshotConnection",
  items:  Array<Screenshot | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Screenshot = {
  __typename: "Screenshot",
  id: string,
  imagePath: string,
  film?: Film | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  filmScreenshotsId?: string | null,
};

export type ModelBehindSceneShotConnection = {
  __typename: "ModelBehindSceneShotConnection",
  items:  Array<BehindSceneShot | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BehindSceneShot = {
  __typename: "BehindSceneShot",
  id: string,
  imagePath: string,
  film?: Film | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  filmBehindSceneShotsId?: string | null,
};

export type UpdateFilmInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  coverImagePath?: string | null,
  type?: string | null,
  videoUrl?: string | null,
  _version?: number | null,
};

export type DeleteFilmInput = {
  id: string,
  _version?: number | null,
};

export type CreateScreenshotInput = {
  id?: string | null,
  imagePath: string,
  _version?: number | null,
  filmScreenshotsId?: string | null,
};

export type ModelScreenshotConditionInput = {
  imagePath?: ModelStringInput | null,
  and?: Array< ModelScreenshotConditionInput | null > | null,
  or?: Array< ModelScreenshotConditionInput | null > | null,
  not?: ModelScreenshotConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  filmScreenshotsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateScreenshotInput = {
  id: string,
  imagePath?: string | null,
  _version?: number | null,
  filmScreenshotsId?: string | null,
};

export type DeleteScreenshotInput = {
  id: string,
  _version?: number | null,
};

export type CreateBehindSceneShotInput = {
  id?: string | null,
  imagePath: string,
  _version?: number | null,
  filmBehindSceneShotsId?: string | null,
};

export type ModelBehindSceneShotConditionInput = {
  imagePath?: ModelStringInput | null,
  and?: Array< ModelBehindSceneShotConditionInput | null > | null,
  or?: Array< ModelBehindSceneShotConditionInput | null > | null,
  not?: ModelBehindSceneShotConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  filmBehindSceneShotsId?: ModelIDInput | null,
};

export type UpdateBehindSceneShotInput = {
  id: string,
  imagePath?: string | null,
  _version?: number | null,
  filmBehindSceneShotsId?: string | null,
};

export type DeleteBehindSceneShotInput = {
  id: string,
  _version?: number | null,
};

export type ModelFilmFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverImagePath?: ModelStringInput | null,
  type?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  and?: Array< ModelFilmFilterInput | null > | null,
  or?: Array< ModelFilmFilterInput | null > | null,
  not?: ModelFilmFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFilmConnection = {
  __typename: "ModelFilmConnection",
  items:  Array<Film | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScreenshotFilterInput = {
  id?: ModelIDInput | null,
  imagePath?: ModelStringInput | null,
  and?: Array< ModelScreenshotFilterInput | null > | null,
  or?: Array< ModelScreenshotFilterInput | null > | null,
  not?: ModelScreenshotFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  filmScreenshotsId?: ModelIDInput | null,
};

export type ModelBehindSceneShotFilterInput = {
  id?: ModelIDInput | null,
  imagePath?: ModelStringInput | null,
  and?: Array< ModelBehindSceneShotFilterInput | null > | null,
  or?: Array< ModelBehindSceneShotFilterInput | null > | null,
  not?: ModelBehindSceneShotFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  filmBehindSceneShotsId?: ModelIDInput | null,
};

export type ModelSubscriptionFilmFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  coverImagePath?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  videoUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFilmFilterInput | null > | null,
  or?: Array< ModelSubscriptionFilmFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionScreenshotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imagePath?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScreenshotFilterInput | null > | null,
  or?: Array< ModelSubscriptionScreenshotFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBehindSceneShotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imagePath?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBehindSceneShotFilterInput | null > | null,
  or?: Array< ModelSubscriptionBehindSceneShotFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateFilmMutationVariables = {
  input: CreateFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type CreateFilmMutation = {
  createFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFilmMutationVariables = {
  input: UpdateFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type UpdateFilmMutation = {
  updateFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFilmMutationVariables = {
  input: DeleteFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type DeleteFilmMutation = {
  deleteFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateScreenshotMutationVariables = {
  input: CreateScreenshotInput,
  condition?: ModelScreenshotConditionInput | null,
};

export type CreateScreenshotMutation = {
  createScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type UpdateScreenshotMutationVariables = {
  input: UpdateScreenshotInput,
  condition?: ModelScreenshotConditionInput | null,
};

export type UpdateScreenshotMutation = {
  updateScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type DeleteScreenshotMutationVariables = {
  input: DeleteScreenshotInput,
  condition?: ModelScreenshotConditionInput | null,
};

export type DeleteScreenshotMutation = {
  deleteScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type CreateBehindSceneShotMutationVariables = {
  input: CreateBehindSceneShotInput,
  condition?: ModelBehindSceneShotConditionInput | null,
};

export type CreateBehindSceneShotMutation = {
  createBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type UpdateBehindSceneShotMutationVariables = {
  input: UpdateBehindSceneShotInput,
  condition?: ModelBehindSceneShotConditionInput | null,
};

export type UpdateBehindSceneShotMutation = {
  updateBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type DeleteBehindSceneShotMutationVariables = {
  input: DeleteBehindSceneShotInput,
  condition?: ModelBehindSceneShotConditionInput | null,
};

export type DeleteBehindSceneShotMutation = {
  deleteBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type GetFilmQueryVariables = {
  id: string,
};

export type GetFilmQuery = {
  getFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFilmsQueryVariables = {
  filter?: ModelFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmsQuery = {
  listFilms?:  {
    __typename: "ModelFilmConnection",
    items:  Array< {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFilmsQueryVariables = {
  filter?: ModelFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFilmsQuery = {
  syncFilms?:  {
    __typename: "ModelFilmConnection",
    items:  Array< {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScreenshotQueryVariables = {
  id: string,
};

export type GetScreenshotQuery = {
  getScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type ListScreenshotsQueryVariables = {
  filter?: ModelScreenshotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScreenshotsQuery = {
  listScreenshots?:  {
    __typename: "ModelScreenshotConnection",
    items:  Array< {
      __typename: "Screenshot",
      id: string,
      imagePath: string,
      film?:  {
        __typename: "Film",
        id: string,
        title: string,
        description: string,
        coverImagePath: string,
        type: string,
        videoUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      filmScreenshotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScreenshotsQueryVariables = {
  filter?: ModelScreenshotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScreenshotsQuery = {
  syncScreenshots?:  {
    __typename: "ModelScreenshotConnection",
    items:  Array< {
      __typename: "Screenshot",
      id: string,
      imagePath: string,
      film?:  {
        __typename: "Film",
        id: string,
        title: string,
        description: string,
        coverImagePath: string,
        type: string,
        videoUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      filmScreenshotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBehindSceneShotQueryVariables = {
  id: string,
};

export type GetBehindSceneShotQuery = {
  getBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type ListBehindSceneShotsQueryVariables = {
  filter?: ModelBehindSceneShotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBehindSceneShotsQuery = {
  listBehindSceneShots?:  {
    __typename: "ModelBehindSceneShotConnection",
    items:  Array< {
      __typename: "BehindSceneShot",
      id: string,
      imagePath: string,
      film?:  {
        __typename: "Film",
        id: string,
        title: string,
        description: string,
        coverImagePath: string,
        type: string,
        videoUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      filmBehindSceneShotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBehindSceneShotsQueryVariables = {
  filter?: ModelBehindSceneShotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBehindSceneShotsQuery = {
  syncBehindSceneShots?:  {
    __typename: "ModelBehindSceneShotConnection",
    items:  Array< {
      __typename: "BehindSceneShot",
      id: string,
      imagePath: string,
      film?:  {
        __typename: "Film",
        id: string,
        title: string,
        description: string,
        coverImagePath: string,
        type: string,
        videoUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      filmBehindSceneShotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFilmSubscriptionVariables = {
  filter?: ModelSubscriptionFilmFilterInput | null,
};

export type OnCreateFilmSubscription = {
  onCreateFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFilmSubscriptionVariables = {
  filter?: ModelSubscriptionFilmFilterInput | null,
};

export type OnUpdateFilmSubscription = {
  onUpdateFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFilmSubscriptionVariables = {
  filter?: ModelSubscriptionFilmFilterInput | null,
};

export type OnDeleteFilmSubscription = {
  onDeleteFilm?:  {
    __typename: "Film",
    id: string,
    title: string,
    description: string,
    coverImagePath: string,
    type: string,
    screenshots?:  {
      __typename: "ModelScreenshotConnection",
      items:  Array< {
        __typename: "Screenshot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmScreenshotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    behindSceneShots?:  {
      __typename: "ModelBehindSceneShotConnection",
      items:  Array< {
        __typename: "BehindSceneShot",
        id: string,
        imagePath: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        filmBehindSceneShotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    videoUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateScreenshotSubscriptionVariables = {
  filter?: ModelSubscriptionScreenshotFilterInput | null,
};

export type OnCreateScreenshotSubscription = {
  onCreateScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type OnUpdateScreenshotSubscriptionVariables = {
  filter?: ModelSubscriptionScreenshotFilterInput | null,
};

export type OnUpdateScreenshotSubscription = {
  onUpdateScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type OnDeleteScreenshotSubscriptionVariables = {
  filter?: ModelSubscriptionScreenshotFilterInput | null,
};

export type OnDeleteScreenshotSubscription = {
  onDeleteScreenshot?:  {
    __typename: "Screenshot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmScreenshotsId?: string | null,
  } | null,
};

export type OnCreateBehindSceneShotSubscriptionVariables = {
  filter?: ModelSubscriptionBehindSceneShotFilterInput | null,
};

export type OnCreateBehindSceneShotSubscription = {
  onCreateBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type OnUpdateBehindSceneShotSubscriptionVariables = {
  filter?: ModelSubscriptionBehindSceneShotFilterInput | null,
};

export type OnUpdateBehindSceneShotSubscription = {
  onUpdateBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};

export type OnDeleteBehindSceneShotSubscriptionVariables = {
  filter?: ModelSubscriptionBehindSceneShotFilterInput | null,
};

export type OnDeleteBehindSceneShotSubscription = {
  onDeleteBehindSceneShot?:  {
    __typename: "BehindSceneShot",
    id: string,
    imagePath: string,
    film?:  {
      __typename: "Film",
      id: string,
      title: string,
      description: string,
      coverImagePath: string,
      type: string,
      screenshots?:  {
        __typename: "ModelScreenshotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      behindSceneShots?:  {
        __typename: "ModelBehindSceneShotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      videoUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    filmBehindSceneShotsId?: string | null,
  } | null,
};
