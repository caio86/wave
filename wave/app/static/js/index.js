
function setValueRangeNumber(idInRanger, idInNumber){

  document.getElementById(idInRanger).addEventListener("input", function () {
    document.getElementById(idInNumber).value = this.value;
  });

}

function setValueNumberRanger(idInNumber, idInRanger){

  document.getElementById(idInNumber).addEventListener("input", function () {
    document.getElementById(idInRanger).value = this.value;
  });

}
// Set Memory server
setValueRangeNumber("memoryserver", "memserverValue")
setValueNumberRanger("memserverValue","memoryserver")

// Set vcpu server
setValueRangeNumber("vcpuserver", "cpuserverValue")
setValueNumberRanger("cpuserverValue","vcpuserver")


// Set Memory client
setValueRangeNumber("memoryclient", "memclientValue")
setValueNumberRanger("memclientValue","memoryclient")

// Set vcpu client
setValueRangeNumber("vcpuclient", "cpuclientValue")
setValueNumberRanger("cpuclientValue","vcpuclient")


// Select Model

document.getElementById("model-select").addEventListener("change", function() {
  const modelsParms = ['sin', 'flashc', 'step'];

  document.getElementById("err-msg").style.display = "none";

  modelsParms.forEach((valor) => {
    document.getElementById(valor).style.display = "none";
  });
  let selectedDiv = document.getElementById(this.value);
  if(selectedDiv){
    selectedDiv.style.display = "flex";
  }
});

document.querySelector("form").addEventListener("submit", function(e) {
  const errMsg = document.getElementById("err-msg");
  errMsg.style.display = "none";
  errMsg.innerText = "";

  const amplitude = parseFloat(document.getElementById("amplitude-sinusoid").value);
  const lambd = parseFloat(document.getElementById("lambd-sinusoid").value);
  
  if (document.getElementById("model-select").value === "sin" && amplitude >= lambd) {
    e.preventDefault();
    errMsg.style.display = "block";
    errMsg.innerText = "Amplitude must be less than lambda";
  }
});

//Select platform
document.getElementById("docker-server").addEventListener("click", function() {
  document.querySelectorAll(".ram-cpu-fields").forEach((element) => {
    element.style.display = "none";
  });
});

document.getElementById("vm-server").addEventListener("click", function() {
  document.querySelectorAll(".ram-cpu-fields").forEach((element) => {
    element.style.display = "block";
  });
});

document.getElementById("docker").addEventListener("click", function() {
  document.querySelectorAll(".ram-cpu-fields-client").forEach((element) => {
    element.style.display = "none";
  });
});

document.getElementById("vm").addEventListener("click", function() {
  document.querySelectorAll(".ram-cpu-fields-client").forEach((element) => {
    element.style.display = "block";
  });
});