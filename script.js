import { topSellers } from './src/topSellers';
const containerGame = document.createElement('div');
for (let games of topSellers) {
    const titleGame = document.createElement('h2');
    titleGame.textContent = games.title;
    const developerGame = document.createElement('h3');
    developerGame.textContent = games.developer;
    const releaseYearGame = document.createElement('h3');
    releaseYearGame.textContent = games.releaseYear.toString();
    const containerCategoriesGame = document.createElement('ul');
    games.categories.forEach((category) => {
        const categoriesGame = document.createElement('li');
        categoriesGame.textContent = category;
        containerCategoriesGame.append(categoriesGame);
    });
    const descriptionGame = document.createElement('p');
    descriptionGame.textContent = games.description;
    const containerPlatformsGame = document.createElement('ul');
    games.platforms.forEach((platform) => {
        const platformsGame = document.createElement('li');
        platformsGame.textContent = platform;
        containerPlatformsGame.append(platformsGame);
    });
    const logoGame = document.createElement('img');
    logoGame.src = `logos/${games.logo}`;
    containerGame.append(titleGame, developerGame, releaseYearGame, containerCategoriesGame, descriptionGame, containerPlatformsGame, logoGame);
}
document.body.append(containerGame);
//# sourceMappingURL=script.js.map