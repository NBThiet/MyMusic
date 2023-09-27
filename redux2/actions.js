export const playSong = (data) => {
    return {
        type: 'PLAY_SONG',
        payload: data,
    };
};
export const getToken = (data) => {
    return {
        type: 'GET_TOKEN',
        payload: data,
    };
};
export const noAction = () => {
    return {
        type: 'NO_ACTION',
    };
};
