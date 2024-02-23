import React, { useEffect,  useState } from 'react'
import { Link } from 'react-router-dom'

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [, setServiceHistory] = useState([]);

  const fetchAppointments = () => {
    fetch('http://localhost:8080/api/appointments/')
      .then(response => response.json())
      .then(data => {
        const filteredAppointments = data.Appointments.filter(appointment => {
          return appointment.status !== 'finished' && appointment.status !== 'canceled';
        });

        const historyAppointments = data.Appointments.filter(appointment => {
          return appointment.status === 'finished' || appointment.status === 'canceled';
        });


        Promise.all(
          filteredAppointments.map(async appointment => {
            try {
              const response = await fetch(`http://localhost:8080/api/appointments/${appointment.id}/`);
              const appointmentData = await response.json();

              return { ...appointment, dealership_purchase: appointmentData.dealership_purchase || false };
            } catch (error) {
              console.error('Error:', error);
              return { ...appointment, dealership_purchase: false };
            }
          })
        ).then(updatedAppointments => {
          setAppointments(updatedAppointments);
          setServiceHistory(historyAppointments);
        });
      })
      .catch(e => console.error('error:', e));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAppointmentAction = (pk, action) => {
    let actionEndpoint = '';
    if (action === 'finish') {
      actionEndpoint = `http://localhost:8080/api/appointments/${pk}/finish/`;
    } else if (action === 'cancel') {
      actionEndpoint = `http://localhost:8080/api/appointments/${pk}/cancel/`;
    }

    const fetchConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(actionEndpoint, fetchConfig)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Appointment finished successfully' || data.message === 'Appointment canceled successfully') {
          fetchAppointments();
        }
      })
      .catch(e => console.log('error', e));
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" style={{ paddingTop: '4em' }}>
        <table className="table table-bordered small-heading">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Customer Name</th>
              <th>Time and Date</th>
              <th>Service Needed</th>
              <th>Technician</th>
              <th>VIP treatment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.date_time}</td>
                <td>{appointment.reason}</td>
                <td>
                  {appointment.technician ? (
                    `${appointment.technician.first_name} ${appointment.technician.last_name}`
                  ) : (
                    'No Technician Assigned'
                  )}
                </td>
                <td>{appointment.dealership_purchase ? <div>Yes</div> : <div>No</div>}</td>
                <td>
                  <button
                    className="btn btn-danger buttons"
                    onClick={() => handleAppointmentAction(appointment.id, 'cancel')}
                  >
                    Canceled
                  </button>
                  <button
                    className="btn btn-success buttons"
                    onClick={() => handleAppointmentAction(appointment.id, 'finish')}
                  >
                    Finished
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/appointments/create" className="btn btn-primary buttons btn-lg px-4 gap-3">
          Create Appointment
        </Link>
      </div>
    </>
  );
}

export default AppointmentList;
