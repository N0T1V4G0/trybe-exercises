-- 09) Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT concat('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído') FROM scientists.projects ORDER BY name;