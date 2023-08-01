/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
      id
      title
      description
      coverImagePath
      type
      screenshots {
        items {
          id
          imagePath
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          filmScreenshotsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      behindSceneShots {
        items {
          id
          imagePath
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          filmBehindSceneShotsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      videoUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        coverImagePath
        type
        screenshots {
          nextToken
          startedAt
          __typename
        }
        behindSceneShots {
          nextToken
          startedAt
          __typename
        }
        videoUrl
      }
    }
  }
`;
export const syncFilms = /* GraphQL */ `
  query SyncFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFilms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        coverImagePath
        type
        screenshots {
          nextToken
          startedAt
          __typename
        }
        behindSceneShots {
          nextToken
          startedAt
          __typename
        }
        videoUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getScreenshot = /* GraphQL */ `
  query GetScreenshot($id: ID!) {
    getScreenshot(id: $id) {
      id
      imagePath
      film {
        id
        title
        description
        coverImagePath
        type
        screenshots {
          nextToken
          startedAt
          __typename
        }
        behindSceneShots {
          nextToken
          startedAt
          __typename
        }
        videoUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      filmScreenshotsId
      __typename
    }
  }
`;
export const listScreenshots = /* GraphQL */ `
  query ListScreenshots(
    $filter: ModelScreenshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScreenshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imagePath
        film {
          id
          title
          description
          coverImagePath
          type
          videoUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        filmScreenshotsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncScreenshots = /* GraphQL */ `
  query SyncScreenshots(
    $filter: ModelScreenshotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScreenshots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imagePath
        film {
          id
          title
          description
          coverImagePath
          type
          videoUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        filmScreenshotsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBehindSceneShot = /* GraphQL */ `
  query GetBehindSceneShot($id: ID!) {
    getBehindSceneShot(id: $id) {
      id
      imagePath
      film {
        id
        title
        description
        coverImagePath
        type
        screenshots {
          nextToken
          startedAt
          __typename
        }
        behindSceneShots {
          nextToken
          startedAt
          __typename
        }
        videoUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      filmBehindSceneShotsId
      __typename
    }
  }
`;
export const listBehindSceneShots = /* GraphQL */ `
  query ListBehindSceneShots(
    $filter: ModelBehindSceneShotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBehindSceneShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imagePath
        film {
          id
          title
          description
          coverImagePath
          type
          videoUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        filmBehindSceneShotsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBehindSceneShots = /* GraphQL */ `
  query SyncBehindSceneShots(
    $filter: ModelBehindSceneShotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBehindSceneShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imagePath
        film {
          id
          title
          description
          coverImagePath
          type
          videoUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        filmBehindSceneShotsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
