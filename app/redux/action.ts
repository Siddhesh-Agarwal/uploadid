import { ProfileData } from '@/types/ProfileData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SiteConfigData = {
    profile: ProfileData;
}

const initialState: SiteConfigData = {
    profile: {
        facultyName: "John Doe",
        facultyEmail: "janedoe@example.com",
        facultyID: "CSE001",
    }
}

const setSiteCongidData = createSlice({
    name: "setData",
    initialState: initialState,
    reducers: {
        switchProfile: (state, action: PayloadAction<{ name: string; email: string; id: string }>) => {
            state.profile.facultyName = action.payload.name;
            state.profile.facultyEmail = action.payload.email;
            state.profile.facultyID = action.payload.id;
        },
    }
})

export const { switchProfile } = setSiteCongidData.actions
export default setSiteCongidData.reducer 