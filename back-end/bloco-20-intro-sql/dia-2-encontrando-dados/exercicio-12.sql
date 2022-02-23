-- 12) Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT name FROM scientists.projects ORDER BY hours DESC LIMIT 1;