function handleSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;

    let personal = new Personal(firstName, lastName, age, city);

    let personalList = document.getElementById("personalList").innerHTML;

    document.getElementById("personalList").innerHTML = personalList + `<li>${personal.firstName} ${personal.lastName} - ${personal.age}years old - from ${personal.city}</li>`

  }

  function Personal(firstName, lastName, age, city){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city
  }