import { takeLatest, call, put } from 'redux-saga/effects'

import {
    firestore,
    convertCollectionsSnapshotToPam,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollections() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsmap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        )
        yield put(fetchCollectionsSuccess(collectionsmap))
    } catch (e) {
        yield put (fetchCollectionsFailure(e.message))
    }
}

export function* onFetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
}