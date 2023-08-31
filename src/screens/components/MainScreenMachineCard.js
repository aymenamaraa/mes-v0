import React from 'react';
import ColoredCircleButton from './ColoredCircleButton';
import { Card } from 'antd';

export default function MainScreenMachineCard({ machine, setFunction }) {
  return (
    <Card
      hoverable
      title={<b>{machine.machine_name}</b>}
      extra={
        <ColoredCircleButton
          machineStatus={machine?.machine_state}
          stopReason={machine?.stop_reason}
        />
      }
      bordered={false}
      // onClick={() => navigate("/MachineStatus")}
      onClick={() => setFunction(true)}
    >
      <ul>
        {machine?.recipe?.toString() && (
          // <li>{`Recette: ${machine.recipe}`}</li>
          <li>{`Recipe: ${machine.recipe} mm`}</li>
        )}
        {machine?.line_speed?.toString() && (
          // <li>{`Vitesse de ligne: ${machine.line_speed}`}</li>
          <li>{`Line speed: ${
            Math.round(machine.line_speed * 100) / 100
          } m/min`}</li>
        )}
        {machine?.TRS?.toString() && <li>{`Efficiency: ${machine.TRS}%`}</li>}

        <li>
          {`Rmaining time: ${machine?.remaining_time_hour}h:${machine?.remaining_time_min}min`}
        </li>
      </ul>
    </Card>
  );
}
