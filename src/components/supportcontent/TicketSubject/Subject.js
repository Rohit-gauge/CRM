import React, { useState } from 'react'

const Subject = ({ supportData }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="ticket-issue-wrap sm:w-3/4 w-1/2  mt-4">
                <div className="ticket-issue">
                    <span className="subject font-normal text-blue-400 text-sm " >Ticket Subject</span>
                    <p className="text-xs card-description ">{supportData.subject}</p>
                </div>
                {supportData && supportData.description && (
                    <div className="ticket-issue mt-2 mb-2">
                        <span className="subject font-normal text-blue-400 text-sm ">Ticket Issue</span>
                        <p className={`text-xs w-3/5 card-description ${expanded ? '' : 'line-clamp-2'}`}>{supportData.description}</p>
                        {supportData.description.length > 50 && (
                            <button className="text-blue-400 text-xs mt-1" onClick={toggleExpand}>
                                {expanded ? 'Show less' : 'See more'}
                            </button>
                        )}
                    </div>
                )}








            </div>
        </>
    )
}

export default Subject