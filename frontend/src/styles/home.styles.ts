/**
 * =============================================================================
 * ESTILOS DA PÁGINA HOME
 * =============================================================================
 * Arquivo dedicado aos estilos da página inicial
 * Utiliza CSS-in-JS com React.CSSProperties para melhor organização
 */

/**
 * Objeto com todos os estilos aplicados inline nos elementos da página Home
 * Cada propriedade é uma classe de estilo reutilizável
 * Tipo: { [key: string]: React.CSSProperties }
 *   - key: nome da classe/componente
 *   - React.CSSProperties: tipo TypeScript para propriedades CSS válidas
 * 
 * VANTAGENS:
 * - Melhor organização e separação de responsabilidades
 * - Reutilização de estilos em múltiplos componentes
 * - Type-safe com TypeScript
 * - Fácil manutenção e atualização
 */
export const homeStyles: { [key: string]: React.CSSProperties } = {
  /**
   * CONTAINER PRINCIPAL
   * Estilo do container que envolve toda a página
   * Preenche 100% da altura da tela com flexbox centralizado
   */
  container: {
    minHeight: '100vh', // Altura mínima = altura da janela
    backgroundColor: '#0f172a', // Cor de fundo azul bem escuro (tema dark)
    color: '#e2e8f0', // Cor do texto cinza claro para bom contraste
    display: 'flex', // Ativa flexbox para layout flexível
    alignItems: 'center', // Centraliza verticamente os itens
    justifyContent: 'center', // Centraliza horizontalmente os itens
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', // Fonte do sistema (moderna)
    padding: '20px', // Espaçamento interno em todos os lados
  },

  /**
   * ÁREA PRINCIPAL DE CONTEÚDO
   * Estilo do elemento main que contém o conteúdo
   * Controla a largura máxima para manter legibilidade
   */
  main: {
    maxWidth: '800px', // Largura máxima da área de conteúdo
    width: '100%', // Ocupa 100% da largura disponível (responsivo)
  },

  /**
   * TÍTULO COM GRADIENTE
   * Estilo do h1 (título) com efeito de gradiente de cores
   * Cria um efeito visual atrativo no topo da página
   */
  title: {
    fontSize: '2.5rem', // Tamanho grande da fonte para destaque
    marginBottom: '2rem', // Espaço abaixo do título
    textAlign: 'center', // Centraliza o texto horizontalmente
    // Cria gradiente linear de roxo para rosa
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text', // Limita o background ao texto
    WebkitBackgroundClip: 'text', // Suporte para WebKit (Chrome, Safari, Edge)
    WebkitTextFillColor: 'transparent', // Torna o texto transparente para mostrar o gradiente
  },

  /**
   * CARDS (CAIXAS DE CONTEÚDO)
   * Estilo dos divs que contêm informações em caixas distintas
   * Cria visual de cartão com borda sutil e fundo escuro
   */
  card: {
    backgroundColor: '#1e293b', // Cor de fundo azul escuro mais claro que container
    borderRadius: '8px', // Cantos arredondados para design moderno
    padding: '1.5rem', // Espaçamento interno da caixa
    marginBottom: '1.5rem', // Espaço entre cards
    border: '1px solid #334155', // Borda cinza sutil para separação
  },

  /**
   * ESTILO DE ERRO
   * Classe específica para renderizar mensagens de erro
   * Usa cor vermelha para indicar visualmente um problema
   */
  error: {
    color: '#ef4444', // Vermelho vibrante (#ef4444 é a cor vermelha do Tailwind)
  },

  /**
   * ÁREA DE INFORMAÇÕES
   * Estilo para a seção de informações rodapé
   * Texto menor e mais discreto (secundário)
   */
  info: {
    textAlign: 'center', // Centraliza o texto
    marginTop: '2rem', // Espaço acima
    fontSize: '0.875rem', // Fonte menor (14px padrão)
    color: '#94a3b8', // Cinza mais leve que o texto principal (menos destaque)
  },
};
