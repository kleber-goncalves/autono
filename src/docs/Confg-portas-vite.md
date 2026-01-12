## ⚙️ Configuração do Servidor de Desenvolvimento

### 🎯 Por Que Configurar Portas Específicas?

O Vite por padrão usa portas comuns que podem entrar em conflito com outros serviços. Este projeto usa uma configuração otimizada para desenvolvimento profissional.

### ❌ Portas a Evitar

| Porta | Problema | Exemplo de Conflito |
|-------|----------|---------------------|
| **5173** | Porta padrão do Vite | Outro projeto Vite na mesma máquina |
| **3000** | Porta padrão do React | Servidor backend, API, ou outro projeto |
| **8080** | Porta comum para web | Servidores web, proxies, ou aplicações Java |

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Projeto A       │     │ Projeto B       │     │ Projeto C       │
│ (porta 5173)    │     │ (porta 3000)    │     │ (porta 8080)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         ❌ CONFLITO! Todos querem usar portas comuns
```

### ✅ Configuração Recomendada

| Configuração | Valor | Por Que? |
|--------------|-------|----------|
| **Porta** | `30001+` | Evita conflitos com serviços comuns |
| **Host** | `0.0.0.0` | Permite acesso de qualquer dispositivo na rede |
| **strictPort** | `true` | Garante que a porta específica seja usada |

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Projeto A       │     │ Projeto B       │     │ Projeto C       │
│ (porta 30001)   │     │ (porta 30002)   │     │ (porta 30003)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         ✅ SEM CONFLITO! Cada projeto tem sua porta alta
```

### 🔧 Arquivo de Configuração (`vite.config.js`)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    server: {
        host: "0.0.0.0", // ✅ Permite acesso de qualquer dispositivo
        port: 30001,      // ✅ Porta alta (evita conflitos)
        strictPort: true, // ✅ Garante uso da porta específica
        hmr: {
            host: "localhost",
            port: 30001,
            protocol: "ws",
        },
    },
    plugins: [react(), tailwindcss()],
});
```

### 🌐 Benefícios da Configuração

#### **1. Acesso Multi-Dispositivo**

```
Computador Principal: http://localhost:30001
Celular/Smartphone:  http://192.168.1.100:30001
Tablet:             http://192.168.1.100:30001
```

#### **2. Desenvolvimento em Equipe**

```
┌─────────────────┐     ┌─────────────────┐
│ Desenvolvedor A │     │ Desenvolvedor B │
│ (porta 30001)   │     │ (porta 30002)   │
└─────────────────┘     └─────────────────┘
         ✅ Trabalham simultaneamente
```

#### **3. Testes em Diferentes Dispositivos**

```
┌─────────────────┐
│ Computador      │ ← http://localhost:30001
├─────────────────┤
│ Celular         │ ← http://192.168.1.100:30001
├─────────────────┤
│ Tablet          │ ← http://192.168.1.100:30001
└─────────────────┘
```

### 🚨 Solução de Problemas

#### **Porta Já Está em Uso**

```bash
# Windows - Encontre qual processo usa a porta
netstat -ano | findstr :30001

# Linux/Mac
lsof -i :30001

# Mate o processo (substitua PID)
taskkill /PID <PID> /F  # Windows
kill -9 <PID>           # Linux/Mac
```

#### **Firewall Bloqueando**

```bash
# Windows - Abra porta no firewall
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=30001

# Linux - Use ufw
sudo ufw allow 30001
```

#### **Alterar Porta Temporariamente**

```bash
# Execute com porta diferente
npm run dev -- --port 30002
```

### 📊 Comparação Visual

```
CONFIGURAÇÃO PADRÃO (Problemas)          CONFIGURAÇÃO OTIMIZADA (Soluções)
┌─────────────────────────────────────┐   ┌─────────────────────────────────────┐
│ ❌ Porta 5173 (conflito comum)      │   │ ✅ Porta 30001+ (porta alta)       │
│ ❌ Host localhost (só local)        │   │ ✅ Host 0.0.0.0 (rede completa)    │
│ ❌ Sem strictPort (pode mudar)      │   │ ✅ strictPort true (porta fixa)    │
│ ❌ Um dispositivo por vez           │   │ ✅ Múltiplos dispositivos          │
│ ❌ Conflitos em equipe              │   │ ✅ Desenvolvimento paralelo        │
└─────────────────────────────────────┘   └─────────────────────────────────────┘
```

### 💡 Dicas Profissionais

1. **Portas Altas**: Use sempre acima de 30000 para desenvolvimento
2. **Documentação**: Anote qual porta cada projeto usa
3. **Scripts**: Crie aliases para projetos comuns
4. **Rede**: Teste sempre em dispositivos móveis
5. **Firewall**: Configure regras permanentes para portas de desenvolvimento

---
Com esta configuração, você terá um ambiente de desenvolvimento Vite robusto, evitando conflitos e facilitando o trabalho em equipe e testes em múltiplos dispositivos. Boa codificação! 🚀