const TaskTable = [
  {
    taskName: "sdome name",
    startDate: "2020-10-17",
    endDate: "2020-10-20",
  },

  {
    taskName: "sdome name",
    startDate: "2020-10-20",
    endDate: "2020-10-20",
  },
  {
    taskName: "sdome name",
    startDate: "2020-10-30",
    endDate: "",
  },
  {
    taskName: "sdome name",
    startDate: "2020-10-27",
    endDate: "2020-10-28",
  },
  ,
];

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth, timeGridWeek, timeGridDay",
    },
    events: data,
  });

  calendar.render();
});

var data = TaskTable.map((task) => {
  return {
    title: task.taskName,
    start: task.startDate,
    end: task.endDate,
  };
});
