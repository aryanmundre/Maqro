import React from 'react';
import './AppPopup.css';

interface Macro {
  id: string;
  title: string;
  keybind: string;
  isApproved: boolean;
}

interface AppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  app: {
    name: string;
    icon: string;
    path: string;
  };
}

const AppPopup: React.FC<AppPopupProps> = ({ isOpen, onClose, app }) => {
  if (!isOpen) return null;

  // Sample data - this would come from your state management in a real app
  const suggestedMacros: Macro[] = [
    {
      id: '1',
      title: 'Play Study Playlist',
      keybind: 'Ctrl + s + p',
      isApproved: false
    },
    {
      id: '2',
      title: 'Skip Track',
      keybind: 'Ctrl + s',
      isApproved: false
    }
  ];

  const savedMacros: Macro[] = [
    {
      id: '3',
      title: 'Play/Pause',
      keybind: 'Ctrl + p',
      isApproved: true
    },
    {
      id: '4',
      title: 'Volume Up',
      keybind: 'Ctrl + ↑',
      isApproved: true
    }
  ];

  const renderMacroList = (macros: Macro[], title: string) => (
    <div className="macro-section">
      <h3 className="section-title">{title}</h3>
      <div className="macros-list">
        {macros.map((macro) => (
          <div key={macro.id} className="macro-item">
            <div className="macro-content">
              <h3 className="macro-title">{macro.title}</h3>
              <div className="macro-keybind">{macro.keybind}</div>
            </div>
            <div className="macro-actions">
              <button className="action-button edit-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={`action-button approve-button ${macro.isApproved ? 'approved' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="action-button remove-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <div className="app-info">
            <img src={app.icon} alt={app.name} className="app-icon" />
            <h2>{app.name}</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="popup-body">
            {renderMacroList(suggestedMacros, "Suggested Macros")}
          {renderMacroList(savedMacros, "Saved Macros")}
        </div>
      </div>
    </div>
  );
};

export default AppPopup; 