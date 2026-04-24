import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export default function AdSchedule() {
  const { adId } = useParams();
  const navigate = useNavigate();

  const [slots, setSlots] = useState([
    "8-10 AM",
    "12-2 PM",
    "4-6 PM",
    "8-10 PM",
  ]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [schedule, setSchedule] = useState(
    slots.map(() => days.map(() => false))
  );

  const [newSlot, setNewSlot] = useState("");

  // ✅ VALIDATION
  const validateSlot = (value) => {
    const regex = /^\d{1,2}-\d{1,2}\s+(AM|PM)$/;
    if (!regex.test(value)) return false;
    if (slots.includes(value)) return false;
    return true;
  };

  // ✅ ADD SLOT
  const addSlot = () => {
    if (!validateSlot(newSlot)) {
      alert("Invalid format or duplicate. Example: 8-10 AM");
      return;
    }

    setSlots([...slots, newSlot]);
    setSchedule([...schedule, days.map(() => false)]);
    setNewSlot("");
  };

  // ✅ DELETE SLOT
  const deleteSlot = (row) => {
    setSlots(slots.filter((_, i) => i !== row));
    setSchedule(schedule.filter((_, i) => i !== row));
  };

  // ✅ TOGGLE CHECKBOX
  const toggleCell = (row, col) => {
    const updated = [...schedule];
    updated[row][col] = !updated[row][col];
    setSchedule(updated);
  };

  // ✅ CONVERT TO BITS
  const convertToBits = (row) => {
    return schedule[row].map((v) => (v ? "1" : "0")).join("");
  };

  // ✅ SAVE TO BACKEND
  const saveSchedule = async () => {
  try {
    const payload = slots.map((slot, i) => ({
      AdID: Number(adId),
      SlotName: slot,
      Bits: convertToBits(i),
    }));

    const res = await api.post(
      "https://localhost:80/MovingAdsBackend/api/adSchedule/save",
      payload
    );

    alert(res.data);
    navigate(-1);
  } catch (err) {
    console.log(err);
    alert("Error saving schedule");
  }
};

  return (
    <div style={{ padding: 20 }}>
      <h2>Ad Schedule</h2>

      {/* ADD SLOT */}
      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="e.g. 8-10 AM"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
        />
        <button onClick={addSlot}>Add Slot</button>
      </div>

      {/* TABLE */}
      <div style={{ overflowX: "auto" }}>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Slot</th>
              {days.map((d) => (
                <th key={d}>{d}</th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {slots.map((slot, row) => (
              <tr key={row}>
                <td>{slot}</td>

                {days.map((_, col) => (
                  <td key={col}>
                    <input
                      type="checkbox"
                      checked={schedule[row][col]}
                      onChange={() => toggleCell(row, col)}
                    />
                  </td>
                ))}

                <td>
                  <button onClick={() => deleteSlot(row)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SAVE BUTTON */}
      <div style={{ marginTop: 20 }}>
        <button onClick={saveSchedule}>Save Schedule</button>
      </div>
    </div>
  );
}