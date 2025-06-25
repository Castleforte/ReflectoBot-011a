import React, { useState } from 'react';
import { allRobots } from '../robotData';

interface MyBotSectionProps {
  onClose: () => void;
  selectedRobotId: string;
  onSelectRobot: (robotId: string) => void;
}

function MyBotSection({ onClose, selectedRobotId, onSelectRobot }: MyBotSectionProps) {
  const [hoveredRobotId, setHoveredRobotId] = useState<string | null>(null);

  const handleRobotSelect = (robotId: string) => {
    onSelectRobot(robotId);
  };

  return (
    <div className="info-section">
      <div className="info-content">
        {/* Header with title and subtitle on single line */}
        <div className="flex items-center justify-between mb-4 px-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent leading-tight">
            My Bot
          </h1>
          <p className="text-3xl font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
            Choose Your Bot Buddy
          </p>
        </div>

        {/* Inner rectangle under titles */}
        <div
          className="rounded-2xl shadow-lg mx-4"
          style={{
            backgroundColor: '#15192d',
            height: 'calc(100% - 360px)', // Keeps outer box in place
            minHeight: '300px', // Shorter inner box
          }}
        >
          <div className="h-full flex items-center justify-center p-4">
            <div className="grid grid-cols-3 gap-y-2 gap-x-8 max-w-4xl mx-auto">
              {allRobots.map((robot) => (
                <div key={robot.id} className="flex flex-col items-center">
                  <button
                    onClick={() => handleRobotSelect(robot.id)}
                    onMouseEnter={() => setHoveredRobotId(robot.id)}
                    onMouseLeave={() => setHoveredRobotId(null)}
                    className="transition-transform duration-200 hover:scale-105 p-2"
                  >
                    <div className="w-52 h-52 flex items-center justify-center">
                      <img
                        src={
                          selectedRobotId === robot.id || hoveredRobotId === robot.id
                            ? robot.iconSelected
                            : robot.iconDefault
                        }
                        alt={robot.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBotSection;
