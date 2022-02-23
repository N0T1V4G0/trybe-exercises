-- 13) Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name, hours FROM scientists.projects ORDER BY hours ASC LIMIT 1 OFFSET 1;