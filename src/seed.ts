import { PrismaClient } from '@prisma/client';
import { IGame, IPlatform, IStore } from './interfaces/game';

const prisma = new PrismaClient();

//função feita para semear os dados no banco!
function createStores(stores: IStore[]) {
  setTimeout(async () => {
    for (const store of stores) {
      await prisma.store.create({
        data: {
          adress: store.adress,
          sales_quantity: store.sales_quantity,
          nameStore: store.nameStore,
          linkMap: store.linkMap,
        }
      })
    }
  }, 500)


}

const stores: IStore[] = [
  {
    idStore: 1,
    nameStore: "Loja tambóre",
    sales_quantity: 1,
    adress: "Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030",
    linkMap: "https://www.google.com/maps/place/Shopping+Tambor%C3%A9/@-23.5043583,-46.8369255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf017b8c1a5da9:0x22a277028d33acc!8m2!3d-23.5043583!4d-46.8343506!16s%2Fg%2F11bw6bjbrz?entry=ttu"
  },
  {
    idStore: 2,
    nameStore: "Loja união",
    sales_quantity: 0,
    adress: "Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP, 06020-010",
    linkMap: "https://www.google.com/maps/place/Shopping+Uni%C3%A3o+de+Osasco/@-23.5387348,-46.7683829,17z/data=!4m10!1m2!2m1!1suni%C3%A3oshopping!3m6!1s0x94ceff41bd4fbbb3:0x883f18a9d028d6!8m2!3d-23.5413983!4d-46.7666171!15sCg51bmnDo29zaG9wcGluZ1oQIg51bmnDo29zaG9wcGluZ5IBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11b6hq1lrv?entry=ttu"
  },
  {
    idStore: 3,
    nameStore: "Loja iguatemi",
    sales_quantity: 0,
    adress: "Al. Rio Negro, 111 - Alphaville Industrial, Barueri - SP, 06454-000",
    linkMap: "https://www.google.com/maps/place/Fillity+%7C+Iguatemi+Alphaville/@-23.5046346,-46.8579972,16z/data=!3m1!5s0x94cf022122fb6a55:0xef822e588ea52ba4!4m9!1m2!2m1!1sloja+tambor%C3%A9+shopping!3m5!1s0x94cf0220dfde19cf:0x5a59b8c551563757!8m2!3d-23.5046346!4d-46.84847!16s%2Fg%2F1ptxmg495?entry=ttu"
  }
]
createStores(stores)

function createPlatform(platforms: IPlatform[]) {
  setTimeout(async () => {
    for (const platform of platforms) {
      await prisma.platform.create({
        data: {
          namePlatform: platform.namePlatform
        }
      })
    }
  }, 500)

}

const platforms: IPlatform[] = [
  { idPlatform: 1, namePlatform: "PS2" },
  { idPlatform: 2, namePlatform: "PS3" },
  { idPlatform: 3, namePlatform: "PS4" },
  { idPlatform: 4, namePlatform: "PS5" },
  { idPlatform: 5, namePlatform: "Xbox" },
  { idPlatform: 6, namePlatform: "Xbox One" },
  { idPlatform: 7, namePlatform: "PC" },
  { idPlatform: 8, namePlatform: "Switch" },
  { idPlatform: 9, namePlatform: "Wiiu" },

]
createPlatform(platforms)

async function createGames(games: IGame[]) {
  for (const game of games) {

    const createdGame = await prisma.game.create({
      data: {
        nameGame: game.nameGame,
        price: game.price,
        discount: game.discount,
        description: game.description,
        linkImage: game.linkImage,

      }
    });
    console.log(`Jogo ${createdGame.nameGame} criado com sucesso!`);
  }
}

const gamesData = [
  {
    idGame: 1,
    nameGame: "Spider-Man",
    price: 160.00,
    discount: 10.90,
    description: "Spider-Man é um jogo eletrônico de ação-aventura...",
    linkImage: "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
  },
  {
    idGame: 2,
    nameGame: "Overwatch",
    price: 116.90,
    description: "Overwatch é um jogo de tiro em equipe que conta com um elenco diversificado de heróis poderosíssimos. Viaje pelo mundo, monte uma equipe e dispute objetivos em combates 6v6 de tirar o fôlego.",
    discount: 10.90,
    linkImage: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg",

  },
  {
    idGame: 3,
    nameGame: "God of War",
    price: 69.90,
    discount: 10.90,
    description: "É um novo começo para Kratos. Vivendo como um homem longe da sombra dos deuses, ele se aventura pelas selvagens florestas nórdicas com seu filho Atreus, lutando para cumprir uma missão profundamente pessoal. O Santa Monica Studio e o diretor de criação Cory Barlog lançam um novo começo para um dos personagens mais conhecidos dos jogos. Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal.",
    linkImage: "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",

  },
  {
    idGame: 4,
    nameGame: "Ghost of Tsushima",
    price: 249.00,
    discount: 10.90,
    description: "No final do século XIII, o império mongol devastou nações inteiras durante sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que está entre o Japão continental e uma enorme frota invasora mongol comandada pelo implacável e sagaz general Khotun Khan. À medida que a ilha queima na esteira da primeira onda do assalto mongol, o guerreiro samurai Jin Sakai mantém-se como um dos último membros sobreviventes de seu clã. Ele está decidido a proteger seu povo e recuperar seu lar, independente do que aconteça, custe o que custar. Será preciso romper com as tradições que o tornaram um guerreiro para forjar um novo caminho do Fantasma e declarar uma guerra incomum pela liberdade de Tsushima.",
    linkImage: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Ghost_of_Tsushima_capa.png/270px-Ghost_of_Tsushima_capa.png",

  },
  {
    idGame: 5,
    nameGame: "Tom Clancy's Splinter Cell: Double Agent",
    price: 36.00,
    discount: 10.90,
    description: "Vivencie a tensão incessante e os dilemas da vida de um agente duplo. Minta. Mate. Prejudique. Traia. Tudo para proteger os inocentes. Até onde você iria para ganhar a confiança do inimigo? Como o agente secreto Sam Fisher, você deve se infiltrar num grupo terrorista cruel e destruí-lo internamente. Você precisará ponderar muito bem as consequências dos seus atos. Mate terroristas demais e estragará seu disfarce. Hesite e milhões morrerão. Faça o que for preciso para completar a missão, mas procure sobreviver.",
    linkImage: "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwb3dccb35/images/large/56c4948a88a7e300458b482c.jpg?sw=341&sh=450&sm=fit",

  },
  {
    idGame: 6,
    nameGame: "God of War III",
    price: 50.00,
    discount: 10.90,
    description: "Kratos está devolta, ainda com a vingança pulsando forte em suas veias. O Olimpo e seus deuses é o seu alvo, não importa o preço que o Deus da Guerra irá pagar. Neste terceiro e épico capítulo você irá controlar Kratos através de batalhas celestiais contra os deuses mais poderosos de todo o Olimpo – inclusive voltará ao inferno e acertar as contas com seu pai colossal e poderoso, Kronos. Deuses como Hermes e Hades não serão páreo para seu poder, os olhos ardentes daquele que busca vingança que nem a mais cruel das mortes pode deter. Enfrente desafios arrasadores e enfrente monstros poderosos como a Quimera, o Cérberus e muitos outros seres místicos que estão ali apenas para acabar com sua existência. Não pare por nada até enfrentar o deus dos deuses: Zeus, e acabar com isso de uma vez por todas.",
    linkImage: "https://pt.wikipedia.org/wiki/God_of_War_III#/media/Ficheiro:God_of_War_3_capa.png",

  },
  {
    idGame: 7,
    nameGame: "Watch Dogs 2",
    price: 60.00,
    discount: 10.90,
    description: "Junte-se ao Dedsec, um grupo notório de hackers, para executar o maior hack da história; Derrube o ctOS 2.0, um sistema operacional invasivo que está sendo usado por um gênio do crime para monitorar e manipular os cidadãos em uma escala massiva.",
    linkImage: "https://pt.wikipedia.org/wiki/Watch_Dogs_2#/media/Ficheiro:Watch_Dogs_2_cover.png",

  },
  {
    idGame: 8,
    nameGame: "Batman arkham city",
    price: 31.00,
    discount: 10.90,
    description: "Batman: Arkham City é um jogo eletrônico de Ação-Aventura e Stealth, baseado na série de quadrinhos Batman da DC Comics. O jogo é distribuído para: PlayStation 3, Xbox 360 e Microsoft Windows. Foi desenvolvido pela Rocksteady Studios e foi publicado pela Warner Bros. Interactive Entertainment e DC Entertainment.",
    linkImage: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f0/Batman_arkham_city_logo.jpg/200px-Batman_arkham_city_logo.jpg",

  },

];

createGames(gamesData)
  .then(() => {
    console.log("Jogos criados com sucesso!");
    prisma.$disconnect();
  })
  .catch(error => {
    console.error("Erro ao criar jogos:", error);
    prisma.$disconnect();
  });
