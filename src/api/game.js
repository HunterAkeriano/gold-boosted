import { handleRequest } from '@/api/axiosConfig.js'

export const getAsyncGames = async () => {
  return handleRequest('/api/games/')
}

export const getAsyncGameCatalogs = async (gameId) => {
  return handleRequest(`/api/games/${gameId}/catalog-pages/`)
}

export const getAsyncGameCarousel = async (page, pageSize, gameId, catalogId) => {
  const params = {
    page: page,
    page_size: pageSize,
    game_id: gameId,
    catalog_id: catalogId
  }
  return handleRequest('/api/games/product-carousels/', params)
}
