import axios from 'axios';

export default {

    viewLeaguesByUsername(principal) {
        return axios.get(`/league/${principal}`)
    },

    createLeague(league) {
        return axios.post('/league', league)
    },

    viewTeeTimesByLeagueName(principal, leagueName) {
        return axios.get(`/tee-times/${leagueName}`)
    },

    invitePlayers(invite) {
        return axios.post('league/invite/', invite)
    },

    updateInvite(league) {
        return axios.put('/invites/status', league)
    },

    getPendingInvitesByUsername(username) {
        return axios.get(`/invites/${username}`)
    },

    setTeeTime(teeTime) {
        return axios.post('/league/tee-times', teeTime)
    },

    //PATH WILL CHANGE, OBVS
    viewTeeTimesByUsername(username) {
        return axios.get('/h', username)
    },

    getAllLeagues() {
        return axios.get('/getAllLeagues')
    }


}