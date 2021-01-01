import API from './base';


async function getTeam() {
    const data = await API.get('', {
        params: {
            action: 'get_teams',
            league_id: '148'
        }
    });

    return data.data;
}

export { getTeam }