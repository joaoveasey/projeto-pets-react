import './Tips.Module.css'

function Tips() {
  return (
    <>
      <div className='titulo'>
        <h1>DICAS ESSENCIAIS PARA CRUZAR SEU CACHORRO</h1>
      </div>
      <div className='fotodogdicas'>
        <img src="/1dogdicas.jpg" alt="primeirodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='tempocertodicas'>
        <h2>TEMPO CERTO</h2>
        <p>Fêmeas: A gestação ideal ocorre após o terceiro cio, quando o corpo da cadela está maduro o suficiente 
          para suportar a gravidez e garantir o desenvolvimento saudável dos filhotes. 
          Cruzar no primeiro ou segundo cio aumenta os riscos de complicações para a mãe e os filhotes.</p>
        <p id='tempocertomachos'>Machos: A partir dos 18 meses, os machos já podem ser férteis. No entanto, a maturidade física e mental completa 
          pode levar até 2 anos. Avalie o desenvolvimento individual do seu cão antes de cruzar.</p>
      </div>
      <div className='fotodogdicas'>
        <img src="/2dogdicas.png" alt="segundodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='parperfeitodicas'>
        <h2>COMO ESCOLHER O PAR PERFEITO?</h2>
        <p>Selecionar o par para o cruzamento do seu cachorro pode parecer simples à primeira vista,
           mas é uma etapa que demanda cuidado e atenção.</p>
        <p>Se o seu cachorro possui uma raça definida, a escolha pode ser um pouco mais direta, 
          já que as opções se restringem a outros cachorros da mesma raça.
          No entanto, o tamanho é um fator crucial a considerar ao selecionar o par de cachorros para o acasalamento.
          Se o macho for significativamente maior que a fêmea,
          pode haver complicações durante a gestação e o parto, uma vez que a fêmea talvez não tenha a estrutura 
          adequada para gerar filhotes de porte maior.</p>
        <p id='parperfeitoinstrucao'>Além disso, é imprescindível garantir que os cachorros selecionados para o cruzamento não sejam irmãos. 
          Cruzamentos consanguíneos aumentam significativamente o risco de doenças genéticas nos filhotes, portanto, 
          sempre priorize acasalamentos entre cachorros de linhagens diferentes.</p>
      </div>
      <div className='fotodogdicas'>
        <img src="/3dogdicas.png" alt="terceirodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='aproximacaodicas'>
        <h2>APROXIMAÇÃO</h2>
        <p>Antes de aproximar os dois parceiros escolhidos para o cruzamento, é fundamental levá-los ao veterinário para um
          check-up completo. Certifique-se de que ambos estejam saudáveis e com as vacinas em dia, 
          garantindo assim uma gestação e ninhada saudável.</p>
        <p>Contrariando a crença popular, não é necessário esperar o cio da fêmea para realizar essa etapa, 
          promova encontros entre os dois para que possam se familiarizar e criar vínculos.</p>
        <p id='aproximacaoinstrucao'>Durante as primeiras aproximações, vá com calma. 
          Permita que os cachorros se cheirem e se reconheçam, 
          facilitando a aceitação mútua. Essa fase inicial é crucial para o sucesso do cruzamento.</p>
      </div>
      <div className='fotodogdicas'>
        <img src="/4dogdicas.png" alt="quartodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='cruzamentodicas'>
        <h2>CRUZAMENTO</h2>
        <p>É essencial considerar o momento ideal para o cruzamento. Nos primeiros dias do cio da fêmea, durante o proestro, 
          ela ainda não está fértil e, portanto, não estará receptiva ao macho.</p>
        <p>A partir do nono dia do ciclo, aproximadamente, 
          ocorre a ovulação, momento em que a fêmea está fértil e pronta para o acasalamento.
          Durante o encontro, é recomendável deixar os dois animais juntos em um local seguro,
          mantendo-se afastado para que possam se sentir à vontade.</p>
        <p id='cruzamentoinstrucao'>No entanto, é importante não deixá-los sozinhos, 
          pois a fêmea pode rejeitar o macho de forma agressiva, potencialmente resultando em confrontos.</p>
      </div>
      <div className='fotodogdicas'>
        <img src="/5dogdicas.png" alt="quintodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='partodicas'>
        <h2>PRÉ-NATAL E PARTO</h2>
        <p>No período pré-natal, é fundamental cuidar da mãe com consultas veterinárias regulares para monitorar 
          sua saúde e garantir uma dieta equilibrada.</p>
        <p>Durante o parto, crie um ambiente tranquilo e seguro.</p>
        <p id='partoinstrucao'>Prepare um espaço limpo e acolhedor para a mãe dar à luz, com materiais de alta qualidade.
          Esteja presente para oferecer suporte durante o parto, preparado para lidar com qualquer emergência.</p>
      </div>
      <div className='fotodogdicas'>
        <img src="/6dogdicas.avif" alt="sextodogdicas" style={{ padding: '30px 0' ,width: '550px', height: 'auto', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className='localdicas'>
        <h2>LOCAL IDEAL</h2>
        <p>A escolha do local para o cruzamento é crucial para o sucesso do processo. <br /><br />Geralmente, é mais favorável realizar as aproximações e o acasalamento na residência do macho.
          Isso se deve ao fato de o macho estar em seu próprio território, onde se sentirá mais confortável.</p>
        <p id='localinstrucao'>Além disso, a fêmea, estando fora de seu ambiente, tende a ser menos agressiva durante o processo.</p>
      </div>
    </>
    
  )
}

export default Tips
