/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFilm = /* GraphQL */ `
  mutation CreateFilm(
    $input: CreateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    createFilm(input: $input, condition: $condition) {
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
export const updateFilm = /* GraphQL */ `
  mutation UpdateFilm(
    $input: UpdateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    updateFilm(input: $input, condition: $condition) {
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
export const deleteFilm = /* GraphQL */ `
  mutation DeleteFilm(
    $input: DeleteFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    deleteFilm(input: $input, condition: $condition) {
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
export const createScreenshot = /* GraphQL */ `
  mutation CreateScreenshot(
    $input: CreateScreenshotInput!
    $condition: ModelScreenshotConditionInput
  ) {
    createScreenshot(input: $input, condition: $condition) {
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
export const updateScreenshot = /* GraphQL */ `
  mutation UpdateScreenshot(
    $input: UpdateScreenshotInput!
    $condition: ModelScreenshotConditionInput
  ) {
    updateScreenshot(input: $input, condition: $condition) {
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
export const deleteScreenshot = /* GraphQL */ `
  mutation DeleteScreenshot(
    $input: DeleteScreenshotInput!
    $condition: ModelScreenshotConditionInput
  ) {
    deleteScreenshot(input: $input, condition: $condition) {
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
export const createBehindSceneShot = /* GraphQL */ `
  mutation CreateBehindSceneShot(
    $input: CreateBehindSceneShotInput!
    $condition: ModelBehindSceneShotConditionInput
  ) {
    createBehindSceneShot(input: $input, condition: $condition) {
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
export const updateBehindSceneShot = /* GraphQL */ `
  mutation UpdateBehindSceneShot(
    $input: UpdateBehindSceneShotInput!
    $condition: ModelBehindSceneShotConditionInput
  ) {
    updateBehindSceneShot(input: $input, condition: $condition) {
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
export const deleteBehindSceneShot = /* GraphQL */ `
  mutation DeleteBehindSceneShot(
    $input: DeleteBehindSceneShotInput!
    $condition: ModelBehindSceneShotConditionInput
  ) {
    deleteBehindSceneShot(input: $input, condition: $condition) {
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
