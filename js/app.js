class Patient{
    constructor(name, surname, fincode, gender, borndate){
        this.name=name;
        this.surname=surname;
        this.fincode=fincode;
        this.gender=gender;
        this.borndate=borndate;
    }

}

class Doctor{
    constructor(name, surname, profession){
        this.name=name;
        this.surname=surname;
        this.profession=profession;
        this.patientlist=[]
    }

     AddPatient(patient_fincode){
        this.patientlist.push(patient_fincode)
    }


    DeletePatient(patient_fincode) {
        const index = this.patientlist.indexOf(patient_fincode);
        if (index !== -1) {
          this.patientlist.splice(index, 1);
        }
}
}


class Reservation {
    constructor(doctor, patient, date) {
      this.doctor = doctor;
      this.patient = patient;
      this.date = date;
    }
  
    ReservationInfo() {
      return `Doctor: ${this.doctor.name} ${this.doctor.surname}, Patient: ${this.patient.name} ${this.patient.surname}, Date: ${this.date}`;
    }
  }
  


  class Hospital {
    constructor() {
      this.patients = [];
      this.doctors = [];
      this.reservations = [];
    }
  
    AddPatient(patient) {
      this.patients.push(patient);
    }
  
    AddDoctor(doctor) {
      this.doctors.push(doctor);
    }
  
    AddReservation(doctor, patient, date) {
      const reservation = new Reservation(doctor, patient, date);
      this.reservations.push(reservation);
    }
  
    ShowAllList() {
      for (const reservation of this.reservations) {
        console.log(reservation.ReservationInfo()); 
      }
    }
  }
  
  

const patient1 = new Patient("Akif", "Eliyev", "12345678901", "kisi", "01/01/1990");
const doctor1 = new Doctor("Dr. Aysel", "Quliyeva", "UMUMI PRAKTIKA");
const hospital = new Hospital();

hospital.AddPatient(patient1);
hospital.AddDoctor(doctor1);

hospital.AddReservation(patient1, doctor1, "20/09/2023");

hospital.ShowAllList();
