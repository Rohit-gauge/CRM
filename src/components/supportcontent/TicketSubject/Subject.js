import React, { useState } from 'react';

const Subject = ({ supportData }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="ticket-issue-wrap grid grid-cols-1 gap-4 px-4">
      <div className="ticket-issue">
        <span className="subject font-normal text-blue-400 text-sm">Ticket Subject</span>
        <p className="text-xs card-description">{supportData.subject}</p>
      </div>
      {supportData && supportData.description && (
        <div className="ticket-issue">
          <span className="subject font-normal text-blue-400 text-sm">Ticket Issue</span>
          <p className={`text-xs w-3/5 card-description ${expanded ? '' : 'line-clamp-2'}`}>{supportData.description}</p>
          {supportData.description.length > 50 && (
            <button className="text-blue-400 more-view text-xs mt-1" onClick={toggleExpand}>
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Subject;
