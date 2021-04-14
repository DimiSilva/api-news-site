# api-news-site

## Requisitos:

1) O site deve ser construído com no mínimo 4 seções de notícias:

a) Principal: Essa página é composta por 6 notícias aleatórias vindo cada uma de uma seção. Cada vez que o site é carregado essas notícias devem ser alteradas de forma aleatória.

b) Política.

c) Educação.

d) Saúde.

2) Cada notícia deve ter categoria (política, educação ou saúde), título, autor, foto ilustrativa e texto.

a) Esses dados devem ser lidos de um arquivo json, xml ou do Firebase.

3) Cada seção deve estar em uma página separada. Cada seção deve ter espaço para pelo menos 4 notícias.

4) Todas as páginas devem conter um menu e um rodapé

a) Menu deve conter no mínimo um link para cada seção do site e para o formulário de contato. O menu deve ter algum tipo de destaque quando o mouse está sobre cada item e identificar a página que está selecionada.

b) O rodapé deve ter as informações de quem desenvolveu o site bem como o tipo de licenciamento do mesmo. O nome dos autores(as) deve aparecer explicitamente no rodapé.

5) O site deve ser responsivo.

6) Deve ser implementado um mecanismo de busca das notícias pelo título.

7) Deve ser possível curtir uma notícia.

8) O site deve apresentar um formulário de fale conosco. Essa página deve conter um formulário como nome, e-mail do leitor/leitora e uma área para digitar o comentário.

9) O projeto deve ser armazenado no github.

10) O site deve estar armazenado em algum provedor de hospedagem. Considerem utilizar o firebase que é gratuito.

11) Usuários registrados como administradores podem incluir notícias. O site deve ser visível de forma pública.

a) A inclusão dos campos deve ser validada:

i) Categoria: Somente 3 categorias são permitidas: Política, educação e saúde.

ii) Título: Não pode estar em branco e deve ter no máximo 50 caracteres.

iii) Autor: Não pode estar em branco e deve ter no máximo 100 caracteres.

iv) Texto: Não pode estar em branco e deve conter no máximo 1000 caracteres.

12) Usuários registrados podem curtir notícias prediletas. Uma área do site deve exibir somente as mensagens curtidas

13) Não é necessário ter no site um gerenciador de usuários (Inclusão, deleção etc). Isso pode ser feito direto no banco de dados.
