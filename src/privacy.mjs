const googlePt = '<a href="https://policies.google.com/privacy?hl=pt-BR">Política de Privacidade do Google</a>';
const googleEn = '<a href="https://policies.google.com/privacy?hl=en">Google Privacy Policy</a>';
const adsPt = '<a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR">Como o Google usa dados de apps parceiros</a>';
const adsEn = '<a href="https://policies.google.com/technologies/partner-sites?hl=en">How Google uses data from partner apps</a>';
const email = '<a href="mailto:govirtstudios@gmail.com">govirtstudios@gmail.com</a>';

export const policy = {
  pt: {
    contents: 'Nesta política',
    review: ['Versão para revisão.', 'Baseada no código e no APK de teste mais recente analisado. A versão de produção e as configurações de lançamento ainda precisam de confirmação.'],
    sections: [
      ['scope', 'Aplicativo e responsável',
        'Esta política explica como a GoVirt! Studios, estúdio independente no Brasil, trata dados no Perfect Balance para Android. O jogo pode ser usado sem criar uma conta na GoVirt! Studios.'],
      ['device', 'Dados salvos no dispositivo',
        'O Perfect Balance grava no armazenamento do app o progresso da campanha, resultados dos desafios, moedas GV, itens desbloqueados e selecionados, preferências de idioma e áudio e controles locais de exibição de anúncios. Esses dados permitem continuar jogando e manter suas preferências.',
        'O jogo usa esses arquivos localmente. A versão analisada desativa o backup de dados do app no manifesto Android.'],
      ['ads', 'Publicidade e dados tratados pelo Google',
        'O Perfect Balance integra o Google AdMob para anúncios intersticiais e anúncios recompensados. O SDK de anúncios do Google pode coletar e compartilhar endereço IP, que pode indicar localização aproximada, interações com o app e com anúncios, diagnósticos de desempenho e identificadores do dispositivo ou da conta, conforme a configuração e as escolhas aplicáveis. Isso pode incluir o identificador de publicidade do Android.',
        'O Google usa esses dados para veicular e medir anúncios, realizar análises e prevenir fraudes. Os dados coletados pelo SDK de anúncios são transmitidos com criptografia TLS, conforme a documentação do Google. Saiba mais em ' + adsPt + ' e na ' + googlePt + '.'],
      ['choices', 'Consentimento e preferências de anúncios',
        'O jogo usa a Plataforma de Mensagens para Usuários do Google (UMP) para atualizar o estado de consentimento e exibir o formulário quando requerido. O jogo usa o resultado da UMP para decidir se pode solicitar anúncios. Quando a UMP exige um meio de revisar as escolhas, use “Opções de privacidade dos anúncios” no menu do jogo.',
        'As opções exibidas dependem das regras e configurações aplicáveis. Você também pode gerenciar o identificador de publicidade nas configurações do Android, conforme a versão do sistema.'],
      ['billing', 'Compras pela Google Play',
        'O Google Play Billing consulta as compras da conta na Google Play e permite comprar ou restaurar a opção de remover anúncios. A Google Play processa o pagamento. O jogo recebe informações de compra, como o produto, o estado da compra, o token e o recibo assinado, para validar, confirmar e restaurar o direito adquirido.',
        'O jogo verifica a assinatura e guarda uma cópia local do recibo e da assinatura para manter o direito de remoção de anúncios. A GoVirt! Studios não recebe os dados completos do seu meio de pagamento por meio da integração do jogo. Consulte a ' + googlePt + ' para saber como o Google trata dados da transação.'],
      ['retention', 'Retenção, exclusão e seus direitos',
        'Os arquivos do jogo ficam no armazenamento do app enquanto forem mantidos pelo aplicativo ou pelo dispositivo. Você pode limpar os dados do app nas configurações do Android. Isso apaga o progresso e as preferências locais. A compra registrada na Google Play pode ser restaurada com a mesma conta, conforme a disponibilidade do serviço.',
        'Limpar os dados do app não apaga registros mantidos pelo Google. Para entender os controles e a retenção aplicáveis aos dados do Google, consulte a ' + googlePt + '. Para exercer direitos aplicáveis aos dados tratados pela GoVirt! Studios, como acesso, correção ou exclusão, escreva ao contato indicado abaixo.'],
      ['children', 'Privacidade de crianças e adolescentes',
        'O público-alvo declarado e as configurações de publicidade aplicáveis a crianças e adolescentes ainda precisam ser confirmados para o lançamento. Pais e responsáveis podem entrar em contato sobre o tratamento de dados de menores.'],
      ['contact', 'Contato e alterações',
        'Envie perguntas sobre privacidade ou solicitações à GoVirt! Studios pelo e-mail ' + email + '. Usamos o endereço de e-mail e o conteúdo que você envia para tratar da sua solicitação.',
        'A versão atualizada desta política ficará disponível nesta página quando houver alterações relevantes no jogo ou no tratamento de dados.'],
    ],
  },
  en: {
    contents: 'On this page',
    review: ['Draft for review.', 'Based on the source code and latest test APK reviewed. The production build and release settings still need confirmation.'],
    sections: [
      ['scope', 'App and developer',
        'This policy explains how GoVirt! Studios, an independent studio in Brazil, handles data in Perfect Balance for Android. You can play without creating a GoVirt! Studios account.'],
      ['device', 'Data stored on your device',
        'Perfect Balance stores campaign progress, challenge results, GV coins, unlocked and selected items, language and audio preferences, and local controls for ad display in app storage. This data lets you resume play and keep your preferences.',
        'The game uses these files locally. The build reviewed disables app data backup in the Android manifest.'],
      ['ads', 'Advertising and data handled by Google',
        'Perfect Balance integrates Google AdMob for interstitial and rewarded ads. The Google ads SDK may collect and share IP addresses, which may indicate approximate location, interactions with the app and ads, performance diagnostics, and device or account identifiers depending on the applicable settings and choices. This may include the Android advertising ID.',
        'Google uses this data to serve and measure ads, perform analytics and prevent fraud. Data collected by the ads SDK is encrypted in transit using TLS, as documented by Google. See ' + adsEn + ' and the ' + googleEn + '.'],
      ['choices', 'Consent and ad privacy choices',
        'The game uses the Google User Messaging Platform (UMP) to refresh consent status and display a form when required. The game uses the UMP result to determine whether it can request ads. When UMP requires a way to revisit your choices, use “Ad privacy options” in the game menu.',
        'The options shown depend on the applicable rules and settings. You can also manage the advertising ID in Android settings, depending on your Android version.'],
      ['billing', 'Google Play purchases',
        'Google Play Billing checks purchases for the Google Play account and lets you buy or restore the option to remove ads. Google Play processes the payment. The game receives purchase information such as the product, purchase status, token and signed receipt to verify, acknowledge and restore the entitlement.',
        'The game verifies the signature and keeps a local copy of the receipt and signature to preserve the ad removal entitlement. GoVirt! Studios does not receive full payment method details through the game integration. See the ' + googleEn + ' to learn how Google handles transaction data.'],
      ['retention', 'Retention, deletion and your rights',
        'Game files remain in app storage while kept by the app or device. You can clear app data in Android settings. This deletes local progress and preferences. You can restore a purchase registered with Google Play using the same account, subject to service availability.',
        'Clearing app data does not delete records held by Google. See the ' + googleEn + ' for the controls and retention practices that apply to Google data. To exercise any rights that apply to data handled by GoVirt! Studios, such as access, correction or deletion, contact us below.'],
      ['children', 'Children’s privacy',
        'The declared target audience and advertising settings applicable to children and teens still need to be confirmed for release. Parents and guardians may contact us about the handling of children’s data.'],
      ['contact', 'Contact and changes',
        'Send privacy questions or requests to GoVirt! Studios at ' + email + '. We use the email address and message content you provide to handle your request.',
        'The updated policy will be available on this page when there are material changes to the game or to how data is handled.'],
    ],
  },
};
