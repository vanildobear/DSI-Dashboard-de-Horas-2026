/**
 * =============================================================================
 * FRONTEND NEXT.JS COM TYPESCRIPT E REACT
 * =============================================================================
 * Página inicial da aplicação
 * Demonstra comunicação entre frontend (Next.js) e backend (Express)
 */

// Diretiva para usar características do cliente (React hooks)
'use client';

// ============================================================================
// IMPORTAÇÕES
// ============================================================================
// Biblioteca para fazer requisições HTTP
import axios from 'axios';

// Hooks do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from 'react';

// Importa os estilos da página home (separado em arquivo dedicado)
import { homeStyles } from '@/styles/home.styles';

// ============================================================================
// CONFIGURAÇÕES
// ============================================================================
// URL da API do backend
// Usa a variável de ambiente NEXT_PUBLIC_API_URL ou localhost por padrão
// NEXT_PUBLIC_ permite que essa variável seja acessível no navegador
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================
/**
 * Interface TypeScript para tipificar a resposta da API do backend
 * Define quais campos esperamos receber do servidor
 */
interface ApiResponse {
  message?: string;
  status?: string;
  timestamp?: string;
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
/**
 * Componente Home - Página inicial da aplicação
 * Responsável por:
 * 1. Buscar dados do backend ao carregar a página
 * 2. Gerenciar estados de loading, erro e dados
 * 3. Renderizar UI com status do frontend e resposta do backend
 */
export default function Home() {
  // ========================================================================
  // ESTADO (State Management)
  // ========================================================================
  // Armazena os dados recebidos do backend
  const [data, setData] = useState<ApiResponse | null>(null);

  // Controla o estado de carregamento (true enquanto busca, false quando termina)
  const [loading, setLoading] = useState(true);

  // Armazena mensagens de erro caso a requisição falhe
  const [error, setError] = useState<string | null>(null);

  // ========================================================================
  // EFEITOS (Side Effects)
  // ========================================================================
  /**
   * useEffect - Executa uma função quando o componente é montado
   * Aqui usamos para buscar dados do backend quando a página carrega
   * O array vazio [] significa que executa apenas uma vez
   */
  useEffect(() => {
    // Função assíncrona para buscar dados da API
    const fetchData = async () => {
      try {
        // Define loading como true antes de fazer a requisição
        setLoading(true);

        // Faz GET request para o endpoint /api/hello do backend
        const response = await axios.get(`${API_URL}/api/hello`);

        // Armazena a resposta no estado
        setData(response.data);
      } catch (err) {
        // Em caso de erro, armazena mensagem de erro
        setError(
          err instanceof Error ? err.message : 'Erro ao conectar com backend'
        );

        // Log do erro no console para debugging
        console.error('Error:', err);
      } finally {
        // Sempre executa ao final, independente de sucesso ou erro
        // Define loading como false pois a requisição terminou
        setLoading(false);
      }
    };

    // Chama a função de busca
    fetchData();
  }, []); // Array vazio = executa uma única vez ao montar

  // ========================================================================
  // RENDERIZAÇÃO (JSX)
  // ========================================================================
  return (
    <div style={homeStyles.container}>
      <main style={homeStyles.main}>
        {/* Título com ícone e gradiente */}
        <h1 style={homeStyles.title}>🚀 Next.js + Express + Docker</h1>

        {/* Card mostrando status do frontend */}
        <div style={homeStyles.card}>
          <h2>Frontend Status</h2>
          <p>✅ Next.js is running</p>
        </div>

        {/* Card mostrando resposta do backend */}
        <div style={homeStyles.card}>
          <h2>Backend API Response</h2>

          {/* Renderização condicional - Mostra "Carregando..." enquanto busca */}
          {loading && <p>Carregando...</p>}

          {/* Renderização condicional - Mostra erro se houver */}
          {error && <p style={homeStyles.error}>❌ Erro: {error}</p>}

          {/* Renderização condicional - Mostra dados se receber com sucesso */}
          {data && (
            <div>
              <p>✅ {data.message}</p>
              {data.status && <p>Status: {data.status}</p>}
              {data.timestamp && <p>Timestamp: {data.timestamp}</p>}
            </div>
          )}
        </div>

        {/* Card com informação da URL do backend */}
        <div style={homeStyles.info}>
          <p>Backend URL: {API_URL}</p>
        </div>
      </main>
    </div>
  );
}

