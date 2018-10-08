export default class FetchApi{
  static async getRepData(repName) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repName}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const repData = {
          id: jsonResponse.id,
          full_name: jsonResponse.full_name,
          url: jsonResponse.url,
          forks: jsonResponse.forks,
          forks_count: jsonResponse.forks_count,
          numOfPages: Math.ceil(jsonResponse.forks_count / 30)
        }
        return repData;
      }
      throw new Error('Rep request failed!');
    } catch (e) {
      console.log('Rep EGGOG!', e);
    }
  }

  static async getForksData(repName) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repName}/forks`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const forksData = jsonResponse.map(elem => ({
          id: elem.id,
          full_name: elem.full_name,
          html_url: elem.html_url,
          stargazers_count: elem.stargazers_count,
          owner_login: elem.owner.login,
          owner_url: elem.owner.url,
          owner_avatar: elem.owner.avatar_url
        }));
        return forksData;
      }
      throw new Error('Forks request failed!');
    } catch (e) {
      console.log('Forks EGGOG!', e);
    }
  }

  static async getData(repName) {
    const repData = await FetchApi.getRepData(repName);
    const forksData = await FetchApi.getForksData(repName);
    console.log('Repository data', repData);
    console.log('Forks data', forksData);
  }
}
