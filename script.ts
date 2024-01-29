import { topSellers } from './src/topSellers'

const containerGame = document.createElement('div') as HTMLDivElement

for (let games of topSellers) {
	const titleGame = document.createElement('h2') as HTMLHeadingElement
	titleGame.textContent = games.title

	const developerGame = document.createElement('h3') as HTMLHeadingElement
	developerGame.textContent = games.developer

	const releaseYearGame = document.createElement('h3') as HTMLHeadingElement
	releaseYearGame.textContent = games.releaseYear.toString()

	const containerCategoriesGame = document.createElement('ul') as HTMLUListElement
	games.categories.forEach((category) => {
		const categoriesGame = document.createElement('li') as HTMLLIElement
		categoriesGame.textContent = category
		containerCategoriesGame.append(categoriesGame)
	})

	const descriptionGame = document.createElement('p') as HTMLParagraphElement
	descriptionGame.textContent = games.description

	const containerPlatformsGame = document.createElement('ul') as HTMLUListElement
	games.platforms.forEach((platform) => {
		const platformsGame = document.createElement('li') as HTMLLIElement
		platformsGame.textContent = platform
		containerPlatformsGame.append(platformsGame)
	})

	const logoGame = document.createElement('img') as HTMLImageElement
	logoGame.src = `logos/${games.logo}`

	containerGame.append(
		titleGame,
		developerGame,
		releaseYearGame,
		containerCategoriesGame,
		descriptionGame,
		containerPlatformsGame,
		logoGame
	)
}

document.body.append(containerGame)
