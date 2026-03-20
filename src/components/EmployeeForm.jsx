import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onAddEmployee, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Barista',
    tasks: '',
    since: new Date().toISOString().split('T')[0],
    status: 'Ativo'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    
    onAddEmployee({
      ...(initialData || {}),
      ...formData,
      id: initialData ? initialData.id : Date.now(),
    });
    
    if (!initialData) {
      setFormData({
        name: '',
        role: 'Barista',
        tasks: '',
        since: new Date().toISOString().split('T')[0],
        status: 'Ativo'
      });
    }
  };

  const isEdit = !!initialData;

  return (
    <div className="card modal-form-card">
      <div className="modal-header">
        <h3>{isEdit ? 'Editar Funcionário' : 'Novo Funcionário'}</h3>
        <button className="btn-close" onClick={onCancel}>✕</button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            placeholder="Ex: João Silva"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Função Principal</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option>Barista</option>
              <option>Atendente</option>
              <option>Gerente</option>
              <option>Cozinheiro(a)</option>
              <option>Limpeza</option>
            </select>
          </div>
          <div className="form-group">
            <label>Admitido em</label>
            <input 
              type="date"
              value={formData.since}
              onChange={(e) => setFormData({...formData, since: e.target.value})}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select 
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>
          <div className="form-group empty">
            {/* Espaçador para manter o grid alinhado */}
          </div>
        </div>

        <div className="form-group">
          <label>Principais Tarefas / Observações</label>
          <textarea 
            rows="3" 
            placeholder="Descreva as responsabilidades..."
            value={formData.tasks}
            onChange={(e) => setFormData({...formData, tasks: e.target.value})}
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            {isEdit ? 'Salvar Alterações' : 'Registrar Funcionário'}
          </button>
        </div>
      </form>

      <style jsx="true">{`
        .modal-form-card {
          border: 1px solid var(--glass-border);
          box-shadow: 0 30px 60px rgba(44, 76, 124, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 2px solid var(--brisa-aqua);
          padding-bottom: 12px;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: var(--brisa-navy);
          font-family: 'Handlee', cursive;
        }

        .btn-close {
          background: transparent;
          font-size: 1.2rem;
          color: var(--brisa-text);
          opacity: 0.5;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .btn-close:hover {
          background: var(--brisa-light-bg);
          opacity: 1;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--brisa-navy);
          opacity: 0.8;
        }

        .form-actions {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 16px;
          margin-top: 20px;
        }

        .btn-primary {
          background: var(--brisa-navy);
          color: var(--brisa-bg);
          box-shadow: 0 4px 15px rgba(44, 76, 124, 0.2);
        }

        .btn-primary:hover {
          background: var(--brisa-teal);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(44, 76, 124, 0.3);
        }

        .btn-secondary {
          background: var(--brisa-light-bg);
          color: var(--brisa-navy);
          border: 1px solid var(--glass-border);
        }

        .btn-secondary:hover {
          background: white;
          border-color: var(--brisa-aqua);
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .form-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default EmployeeForm;
