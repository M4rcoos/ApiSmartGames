import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getById = async (req: Request, res: Response) => {
    // Pegando o id do jogo da URL
    const { idGame } = req.params;

    try {
        // Buscar o jogo do banco de dados usando o Prisma
        const game = await prisma.game.findUnique({
            where: {
                idGame: parseInt(idGame)
            },
            include: {
                gamePlatform: {
                    select: {
                        Platform: true
                    }
                },
                stores: {
                    select: {
                        Store: true
                    }
                }
            }
        });

        // Verificando se o jogo existe
        if (!game) {
            return res.status(400).json({ msg: "Jogo não encontrado." });
        }

        // Mapear o jogo para incluir informações sobre plataformas e lojas
        const platforms = game.gamePlatform.map(platform => ({
            idPlatform: platform.Platform?.idPlatform,
            namePlatform: platform.Platform?.namePlatform
        }));
        const stores = game.stores.map(store => ({
            idStore: store.Store?.idStore,
            name: store.Store?.nameStore,
            address: store.Store?.adress,
            salesQuantity: store.Store?.sales_quantity,
            linkMap: store.Store?.linkMap
        }));

        const gameWithPlatformsAndStores = {
            idGame: game.idGame,
            nameGame: game.nameGame,
            price: game.price,
            discount: game.discount,
            description: game.description,
            linkImage: game.linkImage,
            platforms,
            stores
        };

        // Retornar o jogo com informações sobre plataformas e lojas
        res.json(gameWithPlatformsAndStores);
    } catch (error) {
        console.error("Erro ao buscar o jogo:", error);
        res.status(500).json({ error: "Erro ao buscar o jogo." });
    }
};

