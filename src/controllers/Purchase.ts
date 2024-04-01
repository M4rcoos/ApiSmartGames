
import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//controller para atualizar a quantidade vendida pela loja
export const purchase =  async (req: Request, res: Response) => {
    //pego o id do jogo e o da loja pelos parametros, para poder atualizar!
    const {idGame, idStore} = req.params;
    try {
      // Buscar jogo e loja do banco
      const gameStore = await prisma.game_Store.findFirst({
        where:{
            //id do game
           
            game_IdGame:parseInt(idGame),
            store_IdStore:parseInt(idStore),
           
            //id da loja
        }
      })
      //verificando se existe a loja ou jogo
      if(!gameStore){
        return res.status(400).json({msg:"Jogo ou Loja não encontrado."})
      }

      //Atualizar a quantidade de vendas
      // Encontrar a loja específica associada ao jogo
const store = await prisma.store.findUnique({
    where: {
      idStore: parseInt(idStore) // Filtre pela ID da loja
    }
  });
  
  // Verificar se a loja existe
  if (!store) {
    return res.status(400).json({ msg: "Loja não encontrada." });
  }
  
  // Atualizar a quantidade de vendas apenas na loja específica
  const updatedStore = await prisma.game_Store.update({
    where: {
      id_game_store:gameStore.id_game_store,
      game_IdGame: gameStore.game_IdGame,
      store_IdStore: gameStore.store_IdStore

    },
    data: {
        Store:{
            update:{
                sales_quantity:{
                    increment:1
                },
            }
        }
    }
  });
  // Verificar se a atualização foi bem-sucedida
  if (!updatedStore) {
    return res.status(500).json({ msg: "Erro ao atualizar a quantidade de vendas da loja." });
  }
  // Agora você pode retornar a resposta com a loja atualizada
  return res.status(200).json(updatedStore);

    }catch(error){
        console.error('Erro ao atualizar as vendas do jogo:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
      
  }