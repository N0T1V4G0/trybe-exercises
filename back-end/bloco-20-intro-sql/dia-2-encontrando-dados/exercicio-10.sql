-- 10) Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours FROM scientists.projects ORDER BY hours DESC LIMIT 3;