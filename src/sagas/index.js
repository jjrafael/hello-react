import { fork } from 'redux-saga/effects';
import appActions from '../constants';

// main saga generators
export function* sagas() {
	yield fork(appActions);
}