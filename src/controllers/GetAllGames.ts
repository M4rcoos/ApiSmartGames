
import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll =  async (req: Request, res: Response) => {
    try {
      // Buscar todos os jogos do banco de dados usando o Prisma
      const games = await prisma.game.findMany({
        include: {
          gamePlatform: {
            select: {
              Platform: true
            }
          },
          stores: {
            select: {
              Store: true,
              
            }
          }
        }
      });
  
      // Mapear os jogos para incluir informações sobre plataformas e lojas
      const gamesWithPlatformsAndStores = games.map(game => {
        const platforms = game.gamePlatform.map(platform => ({idPlatform: platform.Platform?.idPlatform,namePlatform:platform.Platform?.namePlatform}));
        const stores = game.stores.map(store => ({
          idStore: store.Store?.idStore,
          name: store.Store?.nameStore,
          address: store.Store?.adress,
          salesQuantity: store.Store?.sales_quantity,
          linkMap: store.Store?.linkMap
        }));
  
        return {
          idGame: game.idGame,
          nameGame: game.nameGame,
          price: game.price,
          discount: game.discount,
          description: game.description,
          linkImage: game.linkImage,
          platforms,
          stores
        };
      });
  
      // Retornar os jogos com informações sobre plataformas e lojas
      res.json({ games: gamesWithPlatformsAndStores });
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
      res.status(500).json({ error: "Erro ao buscar jogos" });
    }
  }