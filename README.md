# GoVirt! Studios

## Visualizar e atualizar

Abra `docs/index.html` diretamente no navegador. As quatro páginas em português e suas versões em inglês funcionam a partir dos arquivos locais. O seletor de idioma abre a página equivalente. O site publicado é HTML e CSS e funciona sem JavaScript, fontes remotas ou rastreadores adicionados pelo estúdio.

- `docs/` contém todos os arquivos que o GitHub Pages deve servir.
- `src/build.mjs` reúne o catálogo, o conteúdo geral e os modelos de página. Para adicionar a captura, salve-a em `docs/assets/` e preencha `cover` no jogo com `src: 'assets/arquivo.webp'` e `alt: { pt: '…', en: '…' }`. Preencha `storeUrl` quando a página oficial estiver disponível.
- `src/privacy.mjs` contém as duas versões da política. Depois de editar o conteúdo, execute `node src/build.mjs` na raiz do projeto e inclua o HTML regenerado na atualização. Arquivos CSS e imagens são servidos diretamente de `docs/assets/`.

## Política de privacidade · revisão para lançamento

A análise foi feita em modo de leitura, com o código local e o manifesto do APK mais recente encontrado, `PerfectBalance-0.7-teste-4.apk` (versão `0.7-teste.4`, código 4). Não foi encontrado um AAB de produção em `builds/` e não foi realizado teste de tráfego ou de compra no Android.

| Área | Evidência |
| --- | --- |
| Armazenamento | `scripts/progress.gd`, `scripts/preferences.gd` e `scripts/purchases.gd` gravam arquivos em `user://`. O manifesto do APK de teste declara `allowBackup=false`. |
| Ads | O plugin declara Google Mobile Ads 24.9.0. O APK de teste declara acesso à Internet e permissões de identificador de publicidade. O código usa anúncios intersticiais e recompensados. `config/monetization.cfg` ainda usa modo de teste. |
| Consentimento | O Gradle declara UMP 4.0.0. O APK registra a ponte nativa. A ponte atualiza o consentimento, solicita o formulário conforme a UMP e habilita pedidos de anúncio somente quando a UMP autoriza. O botão de opções depende do estado retornado pela UMP. |
| Compras | A dependência declarada é Google Play Billing 9.1.0. O jogo consulta a titularidade, verifica a assinatura localmente, confirma a compra com token quando necessário e mantém o JSON do recibo e a assinatura no dispositivo. A chave pública de verificação configurada está vazia no código analisado. |
| Link no app | Há código que lê `privacy_policy_url` de `config/monetization.cfg`. O campo está vazio. |

Antes de usar a URL no Google Play Console:

1. Confirme a identidade pública do responsável, quem atende o e-mail e a regra de retenção e exclusão de mensagens de suporte. Defina a data efetiva da política.
2. Confirme o público-alvo e as faixas etárias no Play Console e ajuste o trecho sobre menores conforme as decisões reais de lançamento. A ponte UMP analisada não configura explicitamente uma marcação de menor de idade. Verifique as configurações de anúncios aplicáveis ao público, inclusive Families quando pertinente.
3. Valide o AAB que será distribuído. Revise o manifesto mesclado, SDKs, backup, identificadores, modo de produção e eventuais redes de mediação. Teste em Android os formulários por região, a revisão das escolhas, os anúncios e a compra/restauração com produto e chave pública configurados. Confira o formulário **Segurança dos dados** com base nessa versão.
4. Atualize ambas as versões da política com as confirmações. Ajuste o texto de suporte, menores e quaisquer diferenças do AAB. Remova a propriedade `review` de cada idioma para retirar o aviso e o metadado `noindex`. Gere novamente as páginas.
5. Depois da publicação autorizada, configure a URL pública no app em um trabalho separado e confirme que o link é acessível dentro do jogo. No Play Console, vá a **Monitorar e melhorar → Política e programas → Conteúdo do app → Política de Privacidade** e salve a URL direta. A página pública deve ser acessível globalmente, sem login, não editável pelos visitantes e em HTML.

Fontes oficiais: [Política de dados do usuário do Google Play](https://support.google.com/googleplay/android-developer/answer/10144311), [preparar o app para revisão](https://support.google.com/googleplay/android-developer/answer/9859455), [divulgação do Google Mobile Ads SDK](https://developers.google.com/admob/android/privacy/play-data-disclosure), [integração UMP](https://developers.google.com/admob/android/privacy).

## Publicação gratuita e app-ads.txt

1. Depois de autorizar a publicação, use uma conta ou organização do GitHub para o estúdio. Crie o repositório **público** com o nome literal do titular seguido de `.github.io`. Exemplo de formato do nome: `<titular>.github.io`. A conta precisa ter esse nome disponível para o repositório. O plano GitHub Free oferece Pages em repositórios públicos.
2. Envie este projeto para o repositório com Git usando o login normal do GitHub. A pasta `docs/` precisa ir no mesmo nível de `src/`. Vincule somente o repositório do site. Nunca envie arquivos do jogo, senhas ou tokens.
3. No repositório, abra **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**, selecione a branch enviada e a pasta **/docs** e clique em **Save**. Habilite **Enforce HTTPS**, quando disponível. Confira o endereço informado pelo GitHub e teste as URLs em uma janela anônima.
4. No Play Console, use **Crescer usuários → Presença na loja → Configurações da loja → Detalhes de contato da página da loja** para preencher o e-mail público e o site do desenvolvedor. Use a raiz do site como URL de desenvolvedor. A página de contato pode ser compartilhada como link de suporte, e o e-mail vai no campo de contato.
5. Quando tiver a linha oficial no AdMob, substitua o comentário em `docs/app-ads.txt` pelo texto fornecido. Após publicar a atualização, abra `/app-ads.txt` no mesmo host, confirme que é texto público, sem login, e compare com o endereço exibido no painel do AdMob. Solicite uma nova verificação pelo painel, se disponível. O comentário atual é apenas uma reserva e não autoriza vendedores.

O crawler deriva a URL do site do desenvolvedor que consta na ficha da loja, descarta o caminho e procura `/app-ads.txt` na raiz do host aplicável. O AdMob limita o uso de subdomínios conforme suas regras, exclui `www` e `m` como destinos iniciais e pode seguir redirecionamentos. Como `github.io` é um sufixo público, o site de usuário ou organização do Pages é compatível em princípio: permite servir o arquivo diretamente em `https://<titular>.github.io/app-ads.txt`. Um Pages de projeto cujo arquivo fica apenas sob `/<repositorio>/app-ads.txt` não atende à localização inicial do crawler. Se a raiz estiver ocupada ou o painel do AdMob derivar outro host, o Google indica o Firebase Hosting como alternativa. A verificação de fato depende do endereço publicado e da linha oficial.

| Finalidade | Caminho no host a confirmar |
| --- | --- |
| Site do desenvolvedor | `/` |
| Política em português | `/privacidade-perfect-balance.html` |
| Política em inglês | `/en/privacy-perfect-balance.html` |
| Suporte | `/contato.html` |
| Autorização de anúncios | `/app-ads.txt` |

Fontes oficiais: [tipos de sites do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [configuração de origem](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [HTTPS no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [contatos na ficha do Google Play](https://support.google.com/googleplay/android-developer/answer/13634081), [regras do app-ads.txt e alternativa Firebase](https://support.google.com/admob/answer/9363762), [Public Suffix List](https://publicsuffix.org/list/public_suffix_list.dat).
