# Página Sobre: publicada e desatualizada?

## O que eu verifiquei agora

Baixei o HTML do site no ar (`/sobre`) e ele já contém o conteúdo atual do projeto: o título "Prazer, sou Francieli. Organizo o que trava o seu dia.", os três textos de apresentação e o bloco de valores (Confidencialidade, Clareza, Autonomia).

Ou seja: o servidor está entregando a versão nova. O que você vê de antigo é, com alta probabilidade, cache do seu navegador/celular.

## Passo 1 — confirmar que é cache (você faz, 10 segundos)

- No computador: abrir a página e apertar Ctrl+F5 (ou Cmd+Shift+R no Mac).
- No celular: abrir o link numa janela anônima/privada.

Se aparecer atualizado, era cache e não há nada a corrigir no site.

## Passo 2 — se ainda aparecer antigo

Me diga qual trecho exato você vê de errado na tela (uma frase que aparece e não deveria). Com essa frase eu localizo de onde ela vem no projeto e corrijo. Também republico o site para garantir que a última versão esteja no ar.

## Passo 3 — melhorar a página Sobre (opcional, se o que você quer é conteúdo novo)

Se a sensação de "desatualizada" é porque o texto não reflete mais o seu momento, eu atualizo:

- Incluir os **14 anos de experiência** na abertura (hoje só aparece na home).
- Trocar a frase de apresentação por uma versão mais direta, alinhada ao rodapé: "Eu cuido da parte administrativa, pra você cuidar do seu negócio".
- Mencionar as 4 frentes de apoio com link para a página de Serviços.
- Adicionar WhatsApp e e-mail no bloco final, além do botão "Conversar comigo".

## Detalhes técnicos

- Conteúdo da página vive em `src/routes/sobre.tsx` (texto e array `values`), sem dependência de banco.
- HTML publicado conferido via requisição direta ao domínio: conteúdo atual presente.
- Após qualquer ajuste, é preciso publicar novamente para o site no ar refletir a mudança.
