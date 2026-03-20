import React from 'react';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <>
      <header className="mobile-header">
        <h1 className="logo-font">BRiSa</h1>
        <button className="theme-toggle-icon" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>
      <aside className="sidebar glass">
        <div className="logo-container">
          <h1 className="logo-font">BRiSa</h1>
        </div>
        <nav>
          <ul>
            <li className="active">
              <span className="icon">👥</span> Funcionários
            </li>
            <li className="disabled">
              <span className="icon">📊</span> Dashboard
            </li>
            <li className="disabled">
              <span className="icon">📦</span> Estoque
            </li>
            <li className="disabled">
              <span className="icon">💰</span> Vendas
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="theme-toggle" onClick={toggleDarkMode} title="Alternar Tema">
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
          <p>© 2026 Brisa Café</p>
        </div>
      </aside>
      <main className="main-content">
        <div className="waves-bg"></div>
        <section className="page-content">
          {children}
        </section>
      </main>

      <style jsx="true">{`
        .sidebar {
          width: 240px;
          height: 100vh;
          padding: 40px 16px;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
          border-right: 1px solid var(--glass-border);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .logo-container {
          margin-bottom: 40px;
          text-align: center;
        }

        .logo-container h1 {
          font-size: 2.5rem;
          color: var(--brisa-navy);
          margin: 0;
          line-height: 1;
        }

        nav ul {
          list-style: none;
        }

        nav li {
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--brisa-text);
          font-weight: 500;
          transition: var(--transition);
          cursor: pointer;
          opacity: 0.7;
        }

        nav li.active {
          background: rgba(142, 202, 230, 0.15);
          color: var(--brisa-navy);
          font-weight: 700;
          opacity: 1;
        }

        nav li:not(.active):not(.disabled):hover {
          background: var(--brisa-light-bg);
          opacity: 1;
        }

        nav li.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .sidebar-footer {
          margin-top: auto;
          font-size: 0.8rem;
          color: var(--brisa-text);
          opacity: 0.5;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .theme-toggle {
          background: var(--brisa-light-bg);
          color: var(--brisa-navy);
          border: 1px solid var(--glass-border);
          padding: 8px 12px;
          font-size: 0.75rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .theme-toggle:hover {
          background: var(--brisa-aqua);
          color: var(--brisa-navy);
          transform: translateY(-2px);
        }

        .main-content {
          margin-left: 240px;
          flex: 1;
          padding: 40px 60px;
          min-height: 100vh;
          position: relative;
          background: transparent;
          transition: background-color 0.3s ease;
        }

        .page-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 80px;
            padding: 40px 12px;
          }
          .logo-container h1 { font-size: 2rem; }
          .nav li span:not(.icon), .sidebar-footer {
            display: none;
          }
          .main-content {
            margin-left: 80px;
            padding: 40px 24px;
          }
          nav li {
            justify-content: center;
            padding: 14px;
          }
        }
        
        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 16px 24px;
          justify-content: space-between;
          align-items: center;
          z-index: 200;
          border-bottom: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .mobile-header h1 {
          font-size: 2rem;
          color: var(--brisa-navy);
          margin: 0;
          line-height: 1;
        }

        .theme-toggle-icon {
          background: transparent;
          border: none;
          font-size: 1.5rem;
          padding: 8px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: flex;
          }
          .sidebar {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 70px;
            flex-direction: row;
            padding: 0;
            border-right: none;
            border-top: 1px solid var(--glass-border);
            z-index: 200;
          }
          .logo-container, .sidebar-footer {
            display: none !important;
          }
          nav {
            width: 100%;
          }
          nav ul {
            display: flex;
            justify-content: space-around;
            height: 100%;
            align-items: center;
            margin: 0;
            padding: 0;
          }
          nav li {
            margin: 0;
            flex-direction: column;
            padding: 8px;
            gap: 4px;
            border-radius: 0;
            flex: 1;
            justify-content: center;
          }
          nav li span.icon {
            font-size: 1.2rem;
          }
          nav li {
            font-size: 0.70rem;
          }
          .main-content {
            margin-left: 0;
            margin-top: 70px;
            margin-bottom: 70px;
            padding: 24px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
