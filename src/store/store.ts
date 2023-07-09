import { configureStore } from "@reduxjs/toolkit";
import { configReducer, gameRoundReducer } from "./slices";
import { modalsReducer } from "./slices/modalsSlice";

export const store = configureStore({
	reducer: {
		config: configReducer,
		gameRound: gameRoundReducer,
		modals: modalsReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
