import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('brisa_employees');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'João Café', role: 'Barista', tasks: 'Especialista em latte art', since: '2024-01-15', status: 'Ativo' },
      { id: 2, name: 'Maria Grão', role: 'Atendente', tasks: 'Caixa e atendimento', since: '2024-02-10', status: 'Ativo' }
    ];
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('brisa_theme') === 'dark';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    localStorage.setItem('brisa_employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('brisa_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('brisa_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleAddEmployee = (employeeData) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => emp.id === editingEmployee.id ? employeeData : emp));
    } else {
      setEmployees([...employees, employeeData]);
    }
    handleCloseModal();
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <div className="page-header">
          <div className="header-info">
            <h2>Gestão de Funcionários</h2>
            <p>Visualize e gerencie sua equipe de talentos.</p>
          </div>
          <button className="btn-add" onClick={() => setIsModalOpen(true)}>
            <span className="icon" style={{ fontSize: '1rem', fontWeight: 'bold' }}>+</span> Novo Funcionário
          </button>
        </div>

        <div className="table-full-section">
          <EmployeeTable employees={employees} onEdit={handleEdit} />
        </div>
      </Layout>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EmployeeForm 
              onAddEmployee={handleAddEmployee} 
              onCancel={handleCloseModal} 
              initialData={editingEmployee}
            />
          </div>
        </div>
      )}

      <style jsx="true">{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 16px;
        }

        .header-info h2 {
          font-size: 1.5rem;
          margin-bottom: 4px;
          color: var(--brisa-navy);
        }

        .header-info p {
          color: var(--brisa-text);
          opacity: 0.6;
          font-weight: 500;
        }

        .btn-add {
          background: var(--brisa-navy);
          color: var(--brisa-bg);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          box-shadow: 0 4px 12px rgba(44, 76, 124, 0.15);
        }

        .btn-add:hover {
          background: var(--brisa-teal);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(44, 76, 124, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(44, 76, 124, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 650px;
          animation: slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .table-full-section {
          animation: fadeIn 0.8s ease;
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .btn-add {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;
