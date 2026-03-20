import React from 'react';

const EmployeeTable = ({ employees, onEdit }) => {
  return (
    <div className="card table-container">
      <h3>Lista de Equipe</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>Função</th>
              <th>Admissão</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  Nenhum funcionário cadastrado ainda.
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id} className={emp.status === 'Inativo' ? 'row-inactive' : ''}>
                  <td>
                    <div className="employee-info">
                      <div className={`avatar ${emp.status === 'Inativo' ? 'avatar-inactive' : ''}`}>
                        {emp.name.charAt(0)}
                      </div>
                      <div className="details">
                        <span className="name">{emp.name}</span>
                        <span className="tasks">{emp.tasks || "Sem observações"}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${emp.status === 'Inativo' ? 'badge-inactive' : 'badge-brisa'}`}>
                      {emp.role}
                    </span>
                  </td>
                  <td>{new Date(emp.since).toLocaleDateString('pt-BR')}</td>
                  <td>
                    <span className={`status-dot ${emp.status === 'Ativo' ? 'active' : 'inactive'}`}></span>
                    {emp.status}
                  </td>
                  <td>
                    <button className="btn-icon" onClick={() => onEdit(emp)} title="Editar">✏️</button>
                    <button className="btn-icon" title="Excluir">🗑️</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style jsx="true">{`
        .table-container {
          overflow: hidden;
        }

        .table-wrapper {
          overflow-x: auto;
          margin-top: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          padding: 12px 16px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--brisa-text);
          opacity: 0.6;
          border-bottom: 1px solid var(--glass-border);
        }

        td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--glass-border);
          vertical-align: middle;
          transition: var(--transition);
        }

        tr:last-child td {
          border-bottom: none;
        }

        tr:hover td {
          background: var(--brisa-light-bg);
        }

        .row-inactive td {
          opacity: 0.4;
        }

        .employee-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--brisa-aqua);
          color: var(--brisa-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(142, 202, 230, 0.3);
        }

        .avatar-inactive {
          background: #eee;
          color: #bbb;
          box-shadow: none;
        }

        .details {
          display: flex;
          flex-direction: column;
        }

        .name {
          font-weight: 600;
          color: var(--brisa-navy);
          font-size: 0.95rem;
        }

        .tasks {
          font-size: 0.8rem;
          color: var(--brisa-text);
          opacity: 0.7;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .badge-inactive {
          background: #f5f5f5;
          color: #ccc;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
          background: #ddd;
        }

        .status-dot.active {
          background: #52b788;
          box-shadow: 0 0 10px rgba(82, 183, 136, 0.4);
        }

        .status-dot.inactive {
          background: #e76f51;
          box-shadow: 0 0 10px rgba(231, 111, 81, 0.4);
        }

        .btn-icon {
          background: transparent;
          padding: 8px;
          font-size: 1.1rem;
          opacity: 0.4;
          transition: var(--transition);
        }

        .btn-icon:hover {
          opacity: 1;
          background: var(--brisa-light-bg);
          transform: translateY(-1px);
        }

        .empty-state {
          text-align: center;
          padding: 60px;
          color: var(--brisa-text);
          opacity: 0.5;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default EmployeeTable;
