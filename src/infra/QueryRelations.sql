INSERT INTO games_platforms(id_game_platform,game_IdGame,platform_IdPlatform) 
VALUES 
(1,1,3),
(2,2,7),
(3,2,6),
(4,2,3),
(5,2,8),
(6,3,3),
(7,4,3),
(8,5,1),
(9,5,2),
(10,5,6),
(11,5,7),
(12,6,3),
(13,6,2),
(14,7,7),
(15,7,3),
(16,7,6),
(17,8,9),
(18,8,7),
(19,8,5);
SELECT  * FROM games,stores;

INSERT INTO games_stores(id_game_store,game_IdGame,store_IdStore) 
VALUES 
(1,1,3),
(2,1,2),
(3,1,1),
(4,2,2),
(5,2,1),
(6,3,1),
(7,3,2),
(8,4,2),
(9,4,3),
(10,5,1),
(11,5,2),
(12,5,3),
(13,6,2),
(14,6,3),
(15,7,1),
(16,7,2),
(17,8,1),
(18,8,2),
(19,8,3);