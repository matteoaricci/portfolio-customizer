/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFilm = /* GraphQL */ `
  subscription OnCreateFilm($filter: ModelSubscriptionFilmFilterInput) {
    onCreateFilm(filter: $filter) {
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
export const onUpdateFilm = /* GraphQL */ `
  subscription OnUpdateFilm($filter: ModelSubscriptionFilmFilterInput) {
    onUpdateFilm(filter: $filter) {
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
export const onDeleteFilm = /* GraphQL */ `
  subscription OnDeleteFilm($filter: ModelSubscriptionFilmFilterInput) {
    onDeleteFilm(filter: $filter) {
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
export const onCreateScreenshot = /* GraphQL */ `
  subscription OnCreateScreenshot(
    $filter: ModelSubscriptionScreenshotFilterInput
  ) {
    onCreateScreenshot(filter: $filter) {
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
export const onUpdateScreenshot = /* GraphQL */ `
  subscription OnUpdateScreenshot(
    $filter: ModelSubscriptionScreenshotFilterInput
  ) {
    onUpdateScreenshot(filter: $filter) {
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
export const onDeleteScreenshot = /* GraphQL */ `
  subscription OnDeleteScreenshot(
    $filter: ModelSubscriptionScreenshotFilterInput
  ) {
    onDeleteScreenshot(filter: $filter) {
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
export const onCreateBehindSceneShot = /* GraphQL */ `
  subscription OnCreateBehindSceneShot(
    $filter: ModelSubscriptionBehindSceneShotFilterInput
  ) {
    onCreateBehindSceneShot(filter: $filter) {
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
export const onUpdateBehindSceneShot = /* GraphQL */ `
  subscription OnUpdateBehindSceneShot(
    $filter: ModelSubscriptionBehindSceneShotFilterInput
  ) {
    onUpdateBehindSceneShot(filter: $filter) {
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
export const onDeleteBehindSceneShot = /* GraphQL */ `
  subscription OnDeleteBehindSceneShot(
    $filter: ModelSubscriptionBehindSceneShotFilterInput
  ) {
    onDeleteBehindSceneShot(filter: $filter) {
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
