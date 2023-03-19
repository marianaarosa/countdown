const button = document.querySelector('button');

function calculateDays() {
  let date = document.getElementById("date").value;       /*validando o campo data */
  if (date == "") {
    alert("Please put a date");
    return;
  }
  const dateInput = document.getElementById('date').value;
  const parts = dateInput.split('-');
  console.log(parts);
  const targetDate = new Date(`${parts[1]}/${parts[2]}/${parts[0]}`);
  const today = new Date();

  const timeDiff = targetDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const result = document.getElementById('result');
  result.value = 'Result: ' + daysDiff + ' days';
}
